import type React from "react"
import { CartProvider } from "@/hooks/use-cart"

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}
