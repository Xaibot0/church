"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

type Step = "email" | "phone"

export function SwipeRegistration() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>("email")
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const stepConfig = {
    email: { icon: Mail },
    phone: { icon: Phone },
  }

  const handleBack = () => {
    if (currentStep === "phone") {
      setCurrentStep("email")
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.email) {
      setCurrentStep("phone")
    }
  }

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.phone) {
      setIsLoading(true)
      try {
        const { error } = await supabase.from("registrations").insert([
          {
            email: formData.email,
            phone: formData.phone,
          },
        ])

        if (error) {
          console.error("Error saving to Supabase:", error)
          alert("Failed to save registration. Please try again.")
          setIsLoading(false)
          return
        }

        localStorage.setItem("amen_user", JSON.stringify(formData))
        setIsLoading(false)
        router.push("/shop/order")
      } catch (err) {
        console.error("Error:", err)
        alert("An error occurred. Please try again.")
        setIsLoading(false)
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8 sm:px-6 sm:py-12 text-white">
      <div className="w-full max-w-md flex flex-col items-center">
        {currentStep === "phone" && (
          <button
            onClick={handleBack}
            className="self-start mb-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK
          </button>
        )}

        <h2 className="text-4xl sm:text-5xl font-display tracking-wide uppercase mb-6 sm:mb-8">ANOINTED</h2>

        <p className="text-lg sm:text-xl font-light italic tracking-wide mb-6 sm:mb-8 text-gray-300">In His time.</p>

        {/* Hat Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8">
          <Image
            src="https://elbarbashats.mx/cdn/shop/files/el-Barbas-ezgif.com-optimize.gif?v=1753813580"
            alt="Anointed Cap"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Step Forms */}
        <div className="w-full">
          {currentStep === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 sm:h-14 rounded-none border-0 border-b border-gray-600 bg-transparent text-center text-sm sm:text-base tracking-wider placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white"
              />
              <Button
                type="submit"
                className="w-full h-12 sm:h-14 mt-4 sm:mt-6 rounded-none bg-white text-black text-sm sm:text-base font-semibold tracking-wider hover:bg-gray-200 transition-colors"
              >
                CONTINUE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          {currentStep === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-12 sm:h-14 rounded-none border-0 border-b border-gray-600 bg-transparent text-center text-sm sm:text-base tracking-wider placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 sm:h-14 mt-4 sm:mt-6 rounded-none bg-white text-black text-sm sm:text-base font-semibold tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isLoading ? "LOADING..." : "GET ACCESS"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          )}
        </div>

        {/* Privacy Policy */}
        <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-500 text-center max-w-xs leading-snug">
          By submitting this form, you agree to receive early-access updates and occasional messages from ANOINTED.
          Consent is not a condition of purchase. Message & data rates may apply. Unsubscribe anytime.{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          &{" "}
          <Link href="#" className="underline">
            Terms
          </Link>
          .
        </p>

        {/* Customer Support Button */}
        <Button
          variant="outline"
          className="mt-4 sm:mt-6 w-full h-12 sm:h-14 rounded-none border-gray-600 bg-transparent text-white text-xs sm:text-sm font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
        >
          CUSTOMER SUPPORT
        </Button>

        <div className="flex gap-2 mt-6 sm:mt-8">
          {["email", "phone"].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-colors ${currentStep === step ? "bg-white" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
