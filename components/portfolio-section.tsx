import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "SaaS"]

const projects = [
  {
    title: "ShopSmart E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully-featured e-commerce platform for a retail chain with multiple locations, integrating inventory management, online ordering, and in-store pickup options.",
    image: "/images/elevate-product.png",
    techStack: ["Helium 10", "Jungle Scout", "Alibaba", "Adobe Illustrator"],
    solutions: [
      "Real-time inventory synchronization across online and physical stores",
      "Advanced search and filtering capabilities",
      "Personalized product recommendations",
      "Seamless checkout experience with multiple payment options",
    ],
    beforeAfter: {
      before: "Disconnected systems caused inventory discrepancies and lost sales opportunities.",
      after: "35% increase in online sales and 28% reduction in inventory management costs.",
    },
  },
  {
    title: "TaskFlow Project Management",
    category: "Mobile Apps",
    description:
      "A SaaS project management tool designed for remote teams, featuring task tracking, time management, and collaborative document editing.",
    image: "/images/taskflow-app.png",
    techStack: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
    solutions: [
      "Real-time collaboration features",
      "Customizable workflows and kanban boards",
      "Time tracking and reporting tools",
      "Integration with popular productivity tools",
    ],
    beforeAfter: {
      before: "Team communication was fragmented across multiple platforms, causing delays and missed deadlines.",
      after: "Team productivity increased by 32% and project delivery times reduced by 40%.",
    },
  },
  {
    title: "Vlee",
    category: "Mobile Apps",
    description:
      "A video sharing mobile application that allows users to create and share content, follow creators, and engage with a community of content creators.",
    image: "/images/vlee-app.png",
    techStack: ["React Native", "GraphQL", "AWS Amplify", "Swift"],
    solutions: [
      "Seamless video uploading and sharing capabilities",
      "Category-based content organization",
      "Social features including profiles and following",
      "Sponsorship and monetization opportunities",
    ],
    beforeAfter: {
      before: "Users struggled with complex interfaces and limited content discovery options.",
      after: "App reached 50,000 downloads in first quarter with 78% user retention rate.",
    },
  },
]

export function PortfolioSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>

        <Tabs defaultValue="All" className="mt-12">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="rounded-full">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Solutions Provided:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {project.solutions.map((solution, i) => (
                              <li key={i}>{solution}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Before & After:</h4>
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="p-3 bg-gray-100 rounded-md">
                              <span className="font-medium">Before:</span> {project.beforeAfter.before}
                            </div>
                            <div className="p-3 bg-primary/10 rounded-md">
                              <span className="font-medium">After:</span> {project.beforeAfter.after}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center text-primary hover:underline mt-2"
                        >
                          View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
