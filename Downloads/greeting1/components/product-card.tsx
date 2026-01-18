"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group">
      {/* Image */}
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-medium text-foreground transition-colors group-hover:text-muted-foreground">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">${product.price}</span>
          <Button size="sm" variant="secondary" className="rounded-full" onClick={() => addItem(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
