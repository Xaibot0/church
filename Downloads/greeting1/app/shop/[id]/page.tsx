import { notFound } from "next/navigation"
import { ShopHeader } from "@/components/shop-header"
import { ProductDetail } from "@/components/product-detail"
import { products } from "@/lib/products"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <ShopHeader />
      <ProductDetail product={product} />
    </main>
  )
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}
