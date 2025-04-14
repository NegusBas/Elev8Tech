import Image from "next/image"
import { Moon, Sun } from "lucide-react"

export default function DarkModePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg overflow-hidden shadow-md">
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Elev8tech.PNG-FOIV4J5ZFBbREytJnvXOuhFaHRfNCK.png"
              alt="Elev8Tech Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-gray-100">
              <Sun className="h-4 w-4 text-gray-700" />
            </button>
            <span className="text-xs font-medium text-gray-700">Light Mode</span>
          </div>
        </div>
        <div className="h-20 bg-gray-50 rounded flex items-center justify-center">
          <p className="text-sm text-gray-700">Light Mode Content</p>
        </div>
      </div>

      <div className="p-4 bg-gray-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Elev8tech.PNG-FOIV4J5ZFBbREytJnvXOuhFaHRfNCK.png"
              alt="Elev8Tech Logo"
              width={120}
              height={40}
              className="h-8 w-auto brightness-125"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-gray-800">
              <Moon className="h-4 w-4 text-gray-300" />
            </button>
            <span className="text-xs font-medium text-gray-300">Dark Mode</span>
          </div>
        </div>
        <div className="h-20 bg-gray-800 rounded flex items-center justify-center">
          <p className="text-sm text-gray-300">Dark Mode Content</p>
        </div>
      </div>
    </div>
  )
}
