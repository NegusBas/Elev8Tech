"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    features: [
      "Custom responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "1 month of maintenance",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with specific needs",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    features: [
      "Custom responsive website (up to 10 pages)",
      "Advanced SEO optimization",
      "E-commerce functionality (up to 50 products)",
      "Content management system",
      "3 months of maintenance",
      "Priority email & phone support",
      "Social media integration",
      "Google Analytics setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For established businesses requiring comprehensive solutions",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    features: [
      "Custom responsive website (unlimited pages)",
      "Premium SEO optimization & strategy",
      "E-commerce functionality (unlimited products)",
      "Advanced content management system",
      "Custom database integration",
      "6 months of maintenance",
      "24/7 priority support",
      "Social media integration & strategy",
      "Advanced analytics & reporting",
      "User authentication system",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "Do the pricing plans include hosting costs?",
    answer:
      "Yes, all our pricing plans include hosting for the first year. After the first year, hosting can be renewed at a competitive rate or transferred to your own hosting provider if preferred.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "You can upgrade your plan at any time. We'll simply prorate the difference and apply it to your new plan.",
  },
  {
    question: "What happens after my included maintenance period ends?",
    answer:
      "After your included maintenance period, you can purchase additional maintenance packages starting at $299/month, or we can train your team to handle basic updates.",
  },
  {
    question: "Do you offer custom pricing for specific projects?",
    answer:
      "Yes, we offer custom pricing for projects with specific requirements. Please fill out our Custom Plan Inquiry Form, and our team will get back to you with a tailored quote.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 14-day satisfaction guarantee. If you're not happy with our services within the first 14 days, we'll provide a full refund.",
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your business needs. No hidden fees, just value-driven solutions.
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-6">
            <span className={`text-sm ${!annual ? "font-medium text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual billing" />
            <span className={`text-sm ${annual ? "font-medium text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-green-600 font-medium">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white text-center">
                  Most Popular
                </div>
              )}

              <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {formatPrice(annual ? plan.yearlyPrice / 12 : plan.monthlyPrice)}
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>

                  {annual && (
                    <p className="text-sm text-gray-500 mt-1">Billed annually ({formatPrice(plan.yearlyPrice)})</p>
                  )}
                </div>

                <ul className="space-y-2.5 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto pt-4">
                <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
            <p className="text-gray-500">
              We understand that every business is unique. Contact us for a tailored solution that meets your specific
              requirements.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Request Custom Quote</Button>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
