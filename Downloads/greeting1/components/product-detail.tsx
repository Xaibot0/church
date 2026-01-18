"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Back Link */}
      <Link
        href="/shop"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">{product.category}</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground">{product.name}</h1>
          <p className="mb-8 text-2xl font-semibold text-foreground">${product.price}</p>

          <p className="mb-8 leading-relaxed text-muted-foreground">{product.description}</p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-foreground">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-all ${
                      selectedColor === color
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="mb-8">
              <p className="mb-3 text-sm font-medium text-foreground">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium text-foreground">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-border">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-l-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-r-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button size="lg" className="h-14 rounded-full text-base font-medium" onClick={handleAddToCart}>
            Add to Cart — ${product.price * quantity}
          </Button>

          {/* Additional Info */}
          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Free Shipping</p>
                <p className="text-sm text-muted-foreground">On orders over $75</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Easy Returns</p>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
