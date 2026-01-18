"use client"
import Image from "next/image"

export function InteractiveCap() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-visible">
      <Image
        src="/images/s-l1200.png"
        alt="Black camo trucker cap with nail cross design"
        width={8000}
        height={6400}
        className="h-auto w-[150vw] object-contain mix-blend-multiply sm:w-[200vw] md:w-[250vw] dark:mix-blend-screen"
        style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))" }}
        priority
      />
    </div>
  )
}
