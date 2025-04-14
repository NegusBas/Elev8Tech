"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, AlertCircle, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const services = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "Custom Software Development",
  "UI/UX Design",
  "Other",
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    subject: "Contact Form Submission",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [showDirectContact, setShowDirectContact] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
    setFormData((prev) => ({
      ...prev,
      subject: `Inquiry about ${value} Services`,
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // This function creates a mailto link with the form data
  const composeEmailLink = () => {
    const subject = encodeURIComponent(
      formData.service ? `Inquiry about ${formData.service} Services` : "Website Contact Form",
    )

    const body = encodeURIComponent(`
Hello Elev8Tech team,

${formData.message}

My contact information:
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}
${formData.company ? `Company: ${formData.company}` : ""}
${formData.service ? `Service Interested In: ${formData.service}` : ""}

Thank you,
${formData.name}
    `)

    return `mailto:info@elev8tech.co?subject=${subject}&body=${body}`
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setShowDirectContact(false)

    try {
      // Format the message to include all relevant information
      const formattedMessage = `
Message: ${formData.message}

Service Interested In: ${formData.service}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
    `

      // Create the payload with all necessary information
      const payload = {
        ...formData,
        message: formattedMessage,
      }

      console.log("Submitting form data...")

      // Attempt to send the form data to the API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        // If successful, show success message and reset form
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          subject: "Contact Form Submission",
        })
      } else {
        // If there's an error, show error message and direct contact options
        console.error("Form submission error:", data)
        setError(data.message || "Something went wrong. Please try again later or contact us directly.")
        setShowDirectContact(true)
      }
    } catch (err) {
      // Handle any exceptions
      console.error("Error submitting form:", err)
      setError("Failed to send message. Please try contacting us directly via email or phone.")
      setShowDirectContact(true)
    } finally {
      setIsSubmitting(false)
    }
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

      {/* Contact Form Section */}
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
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <div className="flex items-center gap-2">
                      <a href="tel:+16266202783" className="text-gray-300 hover:text-primary transition-colors">
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

              {/* Direct Contact Information - Shows when form fails */}
              {(showDirectContact || error) && (
                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Contact Us Directly</h3>
                      <p className="text-gray-300 mb-4">
                        Our form is experiencing technical difficulties. Please use one of these methods to contact us:
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Send us an email directly:</h4>
                          <a
                            href={composeEmailLink()}
                            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Open Email Client
                          </a>
                        </div>

                        <div>
                          <h4 className="font-medium text-white mb-2">Call us:</h4>
                          <a
                            href="tel:+16266202783"
                            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            (626) 620-2783
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border border-gray-700 bg-gray-800 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center p-4 bg-green-900/50 text-green-400 rounded-full mb-4">
                        <Send className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">Message Received!</h3>
                      <p className="text-gray-300 mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="p-4 bg-red-900/50 text-red-300 rounded-md flex items-start">
                          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{error}</p>
                            <p className="mt-2 text-sm">
                              You can also email us directly at{" "}
                              <a href="mailto:info@elev8tech.co" className="underline hover:text-red-200">
                                info@elev8tech.co
                              </a>
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-gray-700 bg-gray-700/50 text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-gray-700 bg-gray-700/50 text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-700 bg-gray-700/50 text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="border-gray-700 bg-gray-700/50 text-white focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Service You're Interested In *</Label>
                        <RadioGroup
                          value={formData.service}
                          onValueChange={handleServiceChange}
                          className="grid grid-cols-1 md:grid-cols-2 gap-2"
                        >
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <RadioGroupItem value={service} id={service.replace(/\s+/g, "-").toLowerCase()} />
                              <Label htmlFor={service.replace(/\s+/g, "-").toLowerCase()} className="text-gray-300">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Your Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="border-gray-700 bg-gray-700/50 text-white focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-primary hover:bg-primary/90 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>

                        <Button
                          type="button"
                          className={`flex-1 ${error ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 hover:bg-gray-600"} text-white`}
                          onClick={() => (window.location.href = composeEmailLink())}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Email Directly
                        </Button>
                      </div>
                    </form>
                  )}
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
