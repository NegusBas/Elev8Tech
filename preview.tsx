"use client"

import Image from "next/image"

export default function VleeImagePreview() {
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">Vlee App Image Preview</h2>

      <div className="relative w-full max-w-2xl aspect-video border-2 border-purple-500 rounded-lg overflow-hidden shadow-lg">
        <Image src="/images/vlee-app.png" alt="Vlee App UI Preview" fill className="object-cover" />
      </div>

      <div className="text-sm text-gray-600 mt-2">
        <p>Path: /images/vlee-app.png</p>
        <p>This is the updated image that will appear on the works page.</p>
      </div>
    </div>
  )
}
