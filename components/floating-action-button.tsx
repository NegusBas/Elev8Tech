"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mb-4 transform transition-all border border-primary/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-secondary dark:text-white">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have a question? Send us a message and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-primary/20 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-primary/20 rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full p-2 border border-primary/20 rounded dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  )
}
