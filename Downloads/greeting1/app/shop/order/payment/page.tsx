"use client"

import React, { useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Loading from "./loading"

const editions: Record<string, { name: string; scripture: string }> = {
  signature: { name: "The Signature Edition", scripture: "Isaiah 54:17" },
  faithful: { name: "The Faithful Edition", scripture: "2 Corinthians 5:7" },
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const edition = searchParams.get("edition") || "signature"
  const price = searchParams.get("price") || "35"
  const editionInfo = editions[edition] || editions.signature

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
    address: "",
    city: "",
    zip: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // Redirect to confirmation
    router.push(`/shop/order/confirmation?edition=${edition}`)
  }

  const isFormValid =
    formData.cardNumber.length >= 16 &&
    formData.expiry.length >= 4 &&
    formData.cvc.length >= 3 &&
    formData.name.length > 0 &&
    formData.address.length > 0 &&
    formData.city.length > 0 &&
    formData.zip.length > 0

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-display tracking-wide uppercase">ANOINTED</h1>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-lg">
          {/* Order Summary */}
          <section className="text-center mb-12">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Your Selection</p>
            <h2 className="text-2xl md:text-3xl tracking-wider font-light mb-2 uppercase">
              {editionInfo.name}
            </h2>
            <p className="text-white/60 text-sm tracking-wide mb-4">{editionInfo.scripture}</p>
            <p className="text-4xl font-light tracking-wide">${price}</p>
          </section>

          {/* Divider */}
          <div className="border-t border-white/20 mb-12" />

          {/* Payment Form */}
          <Suspense fallback={<Loading />}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-6 text-center">Payment Details</p>

              {/* Card Number */}
              <div>
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength={19}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
              </div>

              {/* Expiry & CVC */}
              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="expiry"
                  placeholder="MM / YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  maxLength={7}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
                <Input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  maxLength={4}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
              </div>

              {/* Cardholder Name */}
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Cardholder name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-8" />

              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-6 text-center">Shipping Address</p>

              {/* Address */}
              <div>
                <Input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
              </div>

              {/* City & ZIP */}
              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
                <Input
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/40 focus:border-white focus-visible:ring-0 px-0 py-3 text-lg tracking-wide"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <Button
                  type="submit"
                  disabled={!isFormValid || isProcessing}
                  className="w-full bg-white text-black hover:bg-white/90 disabled:bg-white/20 disabled:text-white/40 py-6 text-sm tracking-[0.2em] uppercase font-medium"
                >
                  {isProcessing ? "Processing..." : `Complete Purchase — $${price}`}
                </Button>
              </div>

              {/* Security Note */}
              <p className="text-white/30 text-xs text-center mt-6 leading-relaxed">
                Your payment is secured. By completing this purchase, you agree to our terms and conditions.
              </p>
            </form>
          </Suspense>
        </div>
      </div>
    </main>
  )
}
