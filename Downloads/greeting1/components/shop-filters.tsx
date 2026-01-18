"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Snapback", "Fitted", "Dad Hat", "Trucker", "Beanie"]

export function ShopFilters() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "secondary"}
          size="sm"
          onClick={() => setActiveCategory(category)}
          className="rounded-full px-5"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
