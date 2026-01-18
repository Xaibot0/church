import { ShopHeader } from "@/components/shop-header"
import { ProductGrid } from "@/components/product-grid"
import { ShopFilters } from "@/components/shop-filters"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <ShopHeader />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-foreground">Our Collection</h1>
          <p className="text-muted-foreground">Handcrafted caps for every style</p>
        </div>

        {/* Filters */}
        <ShopFilters />

        {/* Products */}
        <ProductGrid />
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm font-medium text-foreground">ANOINTED</p>
            <p className="text-sm text-muted-foreground">© 2026 ANOINTED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
