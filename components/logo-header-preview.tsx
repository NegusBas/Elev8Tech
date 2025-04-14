import Image from "next/image"

export default function LogoHeaderPreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-gradient-primary p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Elev8Tech Logo" width={200} height={200} className="h-16 w-auto" />
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
      <div className="bg-gray-800 p-2">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-4">
            <span>Follow us on</span>
            <div className="flex space-x-2">
              <span className="fab fa-facebook"></span>
              <span className="fab fa-twitter"></span>
              <span className="fab fa-instagram"></span>
            </div>
          </div>
          <div>
            <span>Build your online presence today...</span>
          </div>
          <div>
            <span>Email us: info@elev8tech.co</span>
          </div>
        </div>
      </div>
    </div>
  )
}
