"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { Check, Globe, LineChart, Smartphone, Palette } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const serviceCategories = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies that drive business growth.",
    icon: Globe,
    services: [
      {
        title: "Custom Website Development",
        description: "Tailored websites designed to meet your specific business needs and goals.",
        features: [
          "Responsive design for all devices",
          "SEO-friendly architecture",
          "Fast loading speeds",
          "Content management systems",
          "Custom functionality",
        ],
      },
      {
        title: "E-commerce Solutions",
        description: "Online stores that provide seamless shopping experiences and drive sales.",
        features: [
          "Secure payment processing",
          "Inventory management",
          "Customer account management",
          "Product search and filtering",
          "Order tracking and management",
        ],
      },
      {
        title: "Web Application Development",
        description: "Complex web applications that solve specific business problems.",
        features: [
          "User authentication and authorization",
          "Real-time data processing",
          "Third-party API integrations",
          "Data visualization",
          "Scalable architecture",
        ],
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    icon: Smartphone,
    services: [
      {
        title: "iOS App Development",
        description: "Native applications for iPhone and iPad devices.",
        features: [
          "Swift and SwiftUI development",
          "Apple design guidelines compliance",
          "App Store submission assistance",
          "Push notifications",
          "In-app purchases",
        ],
      },
      {
        title: "Android App Development",
        description: "Native applications for Android smartphones and tablets.",
        features: [
          "Kotlin and Java development",
          "Material Design implementation",
          "Google Play Store submission",
          "Background services",
          "Device hardware integration",
        ],
      },
      {
        title: "Cross-Platform Development",
        description: "Applications that work on both iOS and Android from a single codebase.",
        features: [
          "React Native development",
          "Flutter development",
          "Code reusability",
          "Native performance",
          "Consistent user experience",
        ],
      },
    ],
  },
  {
    id: "brand-design",
    title: "Brand Kit & Graphic Design",
    description: "Comprehensive branding and design solutions to establish a strong visual identity for your business.",
    icon: Palette,
    services: [
      {
        title: "Brand Identity Development",
        description: "Create a cohesive brand identity that resonates with your target audience.",
        features: [
          "Logo design and variations",
          "Color palette selection",
          "Typography guidelines",
          "Brand voice and messaging",
          "Brand style guide documentation",
        ],
      },
      {
        title: "Marketing Collateral Design",
        description: "Professional design for all your marketing materials.",
        features: [
          "Business cards and stationery",
          "Brochures and flyers",
          "Presentation templates",
          "Social media graphics",
          "Email marketing templates",
        ],
      },
      {
        title: "Packaging & Product Design",
        description: "Eye-catching packaging and product designs that stand out on shelves and online.",
        features: [
          "Packaging concept development",
          "Label and box design",
          "Product mockups",
          "E-commerce product photography",
          "Unboxing experience design",
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing services to increase your online presence and drive business growth.",
    icon: LineChart,
    services: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's visibility in search engine results.",
        features: [
          "Keyword research and strategy",
          "On-page optimization",
          "Technical SEO audits",
          "Content strategy development",
          "Performance tracking and reporting",
        ],
      },
      {
        title: "Social Media Marketing",
        description: "Build and engage your audience across social media platforms.",
        features: [
          "Platform strategy development",
          "Content calendar creation",
          "Community management",
          "Paid social campaigns",
          "Performance analytics",
        ],
      },
      {
        title: "Content Marketing",
        description: "Create valuable content that attracts and retains your target audience.",
        features: [
          "Content strategy development",
          "Blog post creation",
          "Email marketing campaigns",
          "Video content production",
          "Infographics and visual content",
        ],
      },
    ],
  },
]

export function ServicesGrid() {
  const { colors } = usePageTheme()
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)

  return (
    <section id="services-grid" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText
            text="Our Comprehensive Services"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="We offer a wide range of digital services to help your business succeed in today's competitive landscape."
            className="mb-12 text-lg text-muted-foreground"
            delay={0.2}
          />
        </div>

        <Tabs
          defaultValue={serviceCategories[0].id}
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mx-auto max-w-5xl"
        >
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto">
            {serviceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border px-3 py-2 text-sm font-medium transition-all data-[state=active]:border-transparent data-[state=active]:text-white md:px-6"
                style={{
                  borderColor: `${colors.primary}30`,
                  color: activeCategory === category.id ? "white" : colors.primary,
                  backgroundColor: activeCategory === category.id ? colors.primary : "transparent",
                }}
              >
                <category.icon className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">{category.title}</span>
                <span className="inline md:hidden">
                  {category.id === "web-development" && "Web"}
                  {category.id === "mobile-development" && "Mobile"}
                  {category.id === "brand-design" && "Brand"}
                  {category.id === "digital-marketing" && "Marketing"}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ borderColor: `${colors.primary}20` }}
                  >
                    <div
                      className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-10 transition-all group-hover:scale-150 group-hover:opacity-20"
                      style={{ backgroundColor: colors.primary }}
                    ></div>

                    <h3 className="mb-3 text-xl font-bold" style={{ color: colors.secondary }}>
                      {service.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground">{service.description}</p>

                    <div>
                      <h4 className="mb-3 text-sm font-semibold" style={{ color: colors.secondary }}>
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: colors.primary }} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 h-1 w-12 rounded" style={{ backgroundColor: colors.primary }}></div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
