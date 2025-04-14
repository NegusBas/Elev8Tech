import Image from "next/image"

export default function LogoCornerPreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-gradient-primary p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Elev8Tech Logo" width={300} height={300} className="h-20 w-auto" />
          </div>
          <div className="hidden md:flex space-x-6">
            <span className="text-white text-sm">Home</span>
            <span className="text-white text-sm">Services</span>
            <span className="text-white text-sm">Works</span>
            <span className="text-white text-sm">About</span>
            <span className="text-white text-sm">Blog</span>
            <span className="text-white text-sm">Contact</span>
          </div>
          <div>
            <button className="bg-springhive-orange text-white px-4 py-2 rounded-full text-sm">
              Call Us: +1 (415) 555-2671
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
