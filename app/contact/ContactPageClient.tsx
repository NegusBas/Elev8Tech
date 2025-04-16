"use client"

import { useState } from "react"
import { Mail, MapPin, Check, Copy, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "Custom Software Development",
  "UI/UX Design",
  "Other",
]

export default function ContactPageClient() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // This function creates a mailto link with basic information
  const composeEmailLink = () => {
    const subject = encodeURIComponent("Website Contact Form")
    const body = encodeURIComponent(`
Hello Elev8Tech team,

I'm interested in discussing a potential project with you.

Thank you,
[Your Name]
  `)

    return `mailto:info@elev8tech.co?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Have a question or ready to start your project? Get in touch with our team and let's discuss how we can
              help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say
                hello, we're here to help.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/20 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Office</h3>
                    <p className="text-gray-300">
                      16839 Ramona Avenue, Suite 256
                      <br />
                      Fontana, CA 92336
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/20 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <div className="flex items-center gap-2">
                      <a href="mailto:info@elev8tech.co" className="text-gray-300 hover:text-primary transition-colors">
                        info@elev8tech.co
                      </a>
                      <button
                        onClick={() => copyToClipboard("info@elev8tech.co")}
                        className="p-1 text-gray-400 hover:text-primary transition-colors"
                        aria-label="Copy email address"
                        title="Copy email address"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/20 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Text Us</h3>
                    <div className="flex items-center gap-2">
                      <a href="sms:+16266202783" className="text-gray-300 hover:text-primary transition-colors">
                        (626) 620-2783
                      </a>
                      <button
                        onClick={() => copyToClipboard("(626) 620-2783")}
                        className="p-1 text-gray-400 hover:text-primary transition-colors"
                        aria-label="Copy phone number"
                        title="Copy phone number"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Business Hours</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <Card className="border border-gray-700 bg-gray-800 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Ready to Get Started?</h2>

                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/20 text-primary rounded-full mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Contact Us Today</h3>
                    <p className="text-gray-300 mb-6">
                      We're excited to hear about your project! Reach out to us directly via email or text, and we'll
                      get back to you as soon as possible.
                    </p>
                    <a
                      href={composeEmailLink()}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us Now
                    </a>

                    <a
                      href="sms:+16266202783"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors mt-4"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Text (626) 620-2783
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "What is the typical timeline for a web development project?",
                  answer:
                    "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
                },
                {
                  question: "Do you offer ongoing maintenance and support?",
                  answer:
                    "Yes, we offer various maintenance and support packages to ensure your website or application continues to run smoothly after launch. These can include regular updates, security monitoring, performance optimization, and content updates.",
                },
                {
                  question: "How much does a typical project cost?",
                  answer:
                    "Project costs vary widely based on requirements, complexity, and scope. We provide detailed quotes after understanding your specific needs. Our pricing is transparent, with no hidden fees, and we work with clients to find solutions that fit their budget.",
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer:
                    "To provide an accurate quote, we typically need to understand your project goals, target audience, desired features and functionality, design preferences, timeline, and budget constraints. The more details you can provide, the more accurate our estimate will be.",
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
