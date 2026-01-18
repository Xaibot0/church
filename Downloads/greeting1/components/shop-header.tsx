"use client"

import Link from "next/link"
import { ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export function ShopHeader() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display tracking-wide text-foreground uppercase">
          ANOINTED
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/shop"
            className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Shop
          </Link>
          <Link
            href="/shop/order"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Order
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            New Arrivals
          </Link>
          <Link
            href="/shop"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Best Sellers
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative rounded-full">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart ({itemCount} items)</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
