import Image from "next/image"

export default function SpringHiveStylePreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-gradient-primary p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Elev8Tech Logo"
              width={180}
              height={60}
              className="h-12 w-auto brightness-125"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">Home</span>
            <span className="text-white text-sm">Services</span>
            <span className="text-white text-sm">Works</span>
            <button className="bg-springhive-orange text-white px-4 py-2 rounded-full text-sm">Call Us</button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Web Development and Digital Solutions</h2>
            <p className="opacity-90 mb-6">We build innovative web and mobile solutions that help businesses grow.</p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Website Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 dark:bg-gray-800">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="font-bold">Faster Turnaround</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Quality websites built quickly</p>
          </div>
          <div>
            <h3 className="font-bold">Competitive Pricing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Best value for your money</p>
          </div>
          <div>
            <h3 className="font-bold">Experienced Team</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">30+ years of experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}
