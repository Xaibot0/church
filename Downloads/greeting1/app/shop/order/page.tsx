import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-center">
          <h1 className="text-2xl font-display tracking-wide uppercase">ANOINTED</h1>
        </div>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16">
        {/* Section 1 — Statement */}
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide">
            We are not just a hat brand
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed tracking-wide mt-2">
            This is God Brands
          </h2>
          <p className="text-white/70 text-lg md:text-xl mt-4 leading-relaxed">
            {"It's his hand and his grace that is honored"}
          </p>
          <p className="text-white/50 text-base md:text-lg mt-2 italic">And this is the product of his obedience</p>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-xs border-t border-white/20" />

        {/* Section 2 — What It Is */}
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <div className="space-y-2">
            <p className="text-lg md:text-xl tracking-wide text-white/90">Designed in faith.</p>
            <p className="text-lg md:text-xl tracking-wide text-white/90">Released in order.</p>
            <p className="text-lg md:text-xl tracking-wide text-white/90">Worn with purpose.</p>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-xs border-t border-white/20" />

        {/* Section 3 — The Collection */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-10 text-center">The Collection</p>

          {/* Edition 1 */}
          <div className="border border-white/20 p-8 md:p-12 mb-8 text-center">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Limited Release</p>
            <h3 className="text-2xl md:text-3xl tracking-wider font-light mb-2">
              THE <span className="italic font-serif">Signature</span> EDITION
            </h3>
            <p className="text-white/60 text-sm tracking-wide mb-6">Isaiah 54:17</p>
            <p className="text-3xl font-light tracking-wide mb-8">$35</p>
            <Link href="/shop/order/payment?edition=signature&price=35">
              <Button className="bg-white text-black hover:bg-white/90 px-12 py-6 text-sm tracking-[0.2em] uppercase font-medium">
                Reserve
              </Button>
            </Link>
          </div>

          {/* Edition 2 */}
          <div className="border border-white/20 p-8 md:p-12 mb-8 text-center">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">Limited Release</p>
            <h3 className="text-2xl md:text-3xl tracking-wider font-light mb-2">
              THE <span className="italic font-serif">Faithful</span> EDITION
            </h3>
            <p className="text-white/60 text-sm tracking-wide mb-6">2 Corinthians 5:7</p>
            <p className="text-3xl font-light tracking-wide mb-8">$55</p>
            <Link href="/shop/order/payment?edition=faithful&price=55">
              <Button className="bg-white text-black hover:bg-white/90 px-12 py-6 text-sm tracking-[0.2em] uppercase font-medium">
                Reserve
              </Button>
            </Link>
          </div>

          {/* Edition 3 — Coming Soon */}
          <div className="border border-white/10 bg-white/5 p-8 md:p-12 text-center opacity-60">
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-4">Coming Soon</p>
            <h3 className="text-2xl md:text-3xl tracking-wider font-light mb-2">
              THE <span className="italic font-serif">Covenant</span> EDITION
            </h3>
            <p className="text-white/40 text-sm tracking-wide mt-6">Revealed soon</p>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-xs border-t border-white/20" />

        {/* Section 4 — Final Line */}
        <section className="mx-auto max-w-3xl px-6 py-12 text-center">
          <blockquote className="text-xl md:text-2xl font-light italic text-white/80 leading-relaxed">
            {'"He has made everything beautiful in its time."'}
          </blockquote>
          <p className="text-white/50 text-sm tracking-wide mt-4">— Ecclesiastes 3:11</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-white/70 text-sm">© 2026 ANOINTED. All rights reserved.</p>
          <p className="text-white/40 text-xs leading-relaxed max-w-lg mx-auto">
            All content, designs, and scripture references are the property of ANOINTED and may not be reproduced
            without permission.
          </p>
          <p className="text-white/30 text-xs mt-6">
            By submitting your information, you consent to receive occasional updates and early-access notifications.
          </p>
        </div>
      </footer>
    </main>
  )
}
