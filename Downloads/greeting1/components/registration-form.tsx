"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

export function RegistrationForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
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

      localStorage.setItem("elbarba_user", JSON.stringify(formData))
      setIsLoading(false)
      router.push("/shop")
    } catch (err) {
      console.error("Error:", err)
      alert("An error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="h-12 rounded-xl border-border bg-background px-4"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="h-12 rounded-xl border-border bg-background px-4"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="h-12 rounded-xl border-border bg-background px-4"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          className="h-12 rounded-xl border-border bg-background px-4"
        />
      </div>

      <Button type="submit" disabled={isLoading} className="h-12 w-full rounded-xl text-base font-medium">
        {isLoading ? "Please wait..." : "Continue to Shop"}
      </Button>
    </form>
  )
}
