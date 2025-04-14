import Image from "next/image"

export default function Elev8TechStylePreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-white p-4 border-b border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Elev8Tech Logo" width={180} height={60} className="h-16 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-secondary text-sm">Home</span>
            <span className="text-secondary text-sm">Services</span>
            <span className="text-secondary text-sm">Works</span>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm">Call Us</button>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-secondary">Web Development and Digital Solutions</h2>
            <p className="text-gray-600 mb-6">
              We build innovative web and mobile solutions that help businesses grow.
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm">Get Started Today</button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-4 relative z-10">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Website Preview</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-4 text-white">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-bold">Faster Turnaround</h3>
            <p className="text-sm text-white/80">Quality websites built quickly</p>
          </div>
          <div>
            <h3 className="font-bold">Competitive Pricing</h3>
            <p className="text-sm text-white/80">Best value for your money</p>
          </div>
          <div>
            <h3 className="font-bold">Experienced Team</h3>
            <p className="text-sm text-white/80">30+ years of experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}
