import Image from "next/image"

export default function HeaderPreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Elev8tech.PNG-FOIV4J5ZFBbREytJnvXOuhFaHRfNCK.png"
            alt="Elev8Tech Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <span className="text-sm font-medium text-gray-700">Home</span>
          <span className="text-sm font-medium text-gray-700">Services</span>
          <span className="text-sm font-medium text-gray-700">Portfolio</span>
          <span className="text-sm font-medium text-gray-700">Team</span>
          <span className="text-sm font-medium text-gray-700">Contact</span>
        </div>
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">Get a Quote</button>
        </div>
      </div>
    </div>
  )
}
