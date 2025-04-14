"use client"

import { usePageTheme } from "@/components/page-theme-provider"

export function WaveDivider({
  position = "bottom",
  inverted = false,
}: { position?: "top" | "bottom"; inverted?: boolean }) {
  const { colors } = usePageTheme()

  const fillColor = position === "bottom" ? "white" : colors.primary
  const transform = inverted ? "rotate(180deg)" : "rotate(0deg)"

  return (
    <div
      className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-none ${position === "top" ? "-mt-1" : "-mb-1"}`}
      style={{ transform }}
    >
      <svg
        className="relative block w-full h-16 md:h-24"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={fillColor}
        ></path>
      </svg>
    </div>
  )
}
