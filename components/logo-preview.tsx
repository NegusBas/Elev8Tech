import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

export default function LogoPreview() {
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md">
      <div className="bg-white p-4 dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Elev8Tech Logo"
              width={200}
              height={200}
              className="h-16 w-auto dark:brightness-125"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Home</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Services</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Portfolio</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Team</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Contact</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium dark:bg-primary-dark dark:text-gray-900">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
