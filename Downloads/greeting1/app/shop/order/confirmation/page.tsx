"use client"

import { useSearchParams } from "next/navigation"
import { Check } from "lucide-react"
import React, { Suspense } from 'react';
import Loading from './loading';

const editions: Record<string, { name: string; scripture: string }> = {
  signature: { name: "The Signature Edition", scripture: "Isaiah 54:17" },
  faithful: { name: "The Faithful Edition", scripture: "2 Corinthians 5:7" },
}

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-display tracking-wide uppercase">ANOINTED</h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </div>
    </main>
  )
}

function Content() {
  const searchParams = useSearchParams()
  const edition = searchParams.get("edition") || "signature"
  const editionInfo = editions[edition] || editions.signature

  return (
    <div className="text-center max-w-md">
      {/* Success Icon */}
      <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-white/30 flex items-center justify-center">
        <Check className="w-10 h-10 text-white" />
      </div>

      {/* Confirmation Text */}
      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Order Confirmed</h2>
      <p className="text-white/60 text-lg mb-8">Thank you for your faith.</p>

      {/* Order Details */}
      <div className="border border-white/20 p-8 text-center mb-8">
        <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Your Order</p>
        <h3 className="text-xl md:text-2xl tracking-wider font-light mb-2 uppercase">
          {editionInfo.name}
        </h3>
        <p className="text-white/60 text-sm tracking-wide">{editionInfo.scripture}</p>
      </div>

      {/* Message */}
      <p className="text-white/50 text-sm leading-relaxed mb-8">
        A confirmation email has been sent to your inbox. Your hat will be shipped within 5-7 business days.
      </p>

      {/* Scripture */}
      <blockquote className="text-lg font-light italic text-white/70 leading-relaxed">
        {'"He has made everything beautiful in its time."'}
      </blockquote>
      <p className="text-white/40 text-sm tracking-wide mt-2">— Ecclesiastes 3:11</p>
    </div>
  )
}
