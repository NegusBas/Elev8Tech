import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { WaveDivider } from "@/components/wave-divider"

export const metadata: Metadata = {
  title: "Project Case Study | Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Explore our detailed case study showcasing our development process, challenges, and solutions for this client project.",
}

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this data from a database or API
function getProjectBySlug(slug: string) {
  const projects = {
    "fooddelivery-mobile-app": {
      title: "FoodDelivery Mobile App",
      category: "Mobile Apps",
      description:
        "A food delivery application connecting local restaurants with customers, featuring real-time order tracking and secure payment processing.",
      image: "/images/fooddelivery-app.png",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      challenge:
        "The client wanted to create a food delivery platform that would connect local restaurants with customers in their area. They needed a solution that could handle real-time order tracking, provide a seamless ordering experience, and offer secure payment processing, all while being easy to use for both customers and restaurant partners.",
      solution:
        "We developed a cross-platform mobile application using Flutter, with real-time order tracking using Google Maps API and Firebase. The app included features such as restaurant discovery, menu browsing, order customization, secure payment processing with Stripe, and a rating system for restaurants and delivery drivers. We also created a separate dashboard for restaurant partners to manage their menus and orders.",
      // Removed testimonial for this project
    },
    "taskflow-project-management": {
      title: "TaskFlow Project Management",
      category: "SaaS",
      description:
        "A SaaS project management tool designed for remote teams, featuring task tracking, time management, and collaborative document editing. Coming in June 2025.",
      image: "/images/taskflow-app.png",
      techStack: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
      challenge:
        "Our client, a growing tech company with remote teams across multiple time zones, was struggling with project coordination and task management. They needed a centralized solution that would allow team members to collaborate effectively, track progress in real-time, and manage documents without the confusion of multiple versions.",
      solution:
        "We developed TaskFlow, a comprehensive project management platform tailored to their specific workflow. The solution included customizable kanban boards, time tracking features, real-time collaboration tools, and document version control. We implemented role-based access controls and integrated with their existing communication tools to create a seamless workflow.",
      results: [
        "Projected to increase team productivity by 32% within the first quarter after launch",
        "Expected to reduce project delivery times by 40% on average",
        "Designed for seamless integration with existing tools to reduce context switching",
        "Will provide improved visibility into project status for stakeholders",
        "Built to enhance collaboration between team members across different time zones",
      ],
      testimonial: {
        quote:
          "TaskFlow has been designed from the ground up to revolutionize how remote teams collaborate. When it launches in June 2025, the intuitive interface and real-time updates will significantly improve productivity and reduce miscommunication. The customizable workflows perfectly match modern development processes.",
        author: "Basleal Ayinalem",
        position: "Founder & CEO, Elev8Tech",
      },
      launchDate: "June 2025",
    },
    "shopsmart-ecommerce-platform": {
      title: "ShopSmart E-commerce Platform",
      category: "E-commerce",
      description:
        "A fully-featured e-commerce platform for a retail chain with multiple locations, integrating inventory management, online ordering, and in-store pickup options.",
      image: "/images/elevate-product.png",
      techStack: ["Helium 10", "Jungle Scout", "Alibaba", "Adobe Illustrator"],
      challenge:
        "The client, a growing retail chain, needed to expand their online presence to compete with larger retailers. They faced challenges with inventory synchronization between their online and physical stores, leading to customer disappointment when items shown as available online were actually out of stock.",
      solution:
        "We developed a custom e-commerce platform that integrated seamlessly with their existing inventory management system. The solution featured real-time inventory updates across all channels, a user-friendly interface for both customers and staff, and a flexible fulfillment system supporting both shipping and location pickup options.",
      results: [
        "65% increase in online sales within the first quarter",
        "38% reduction in inventory management costs",
        "72% increase in customer satisfaction ratings",
        "Seamless integration between online and in-store operations",
      ],
      testimonial: {
        quote:
          "Elev8Tech transformed our e-commerce platform with the ShopSmart solution. Their team integrated our inventory management seamlessly, and our online sales have increased by 65% since launch. The real-time inventory updates have eliminated customer disappointment from out-of-stock items.",
        author: "Yewoubdar Mamo",
        position: "COO, EVE Sea Moss",
      },
      // Removed external link as requested
    },
    "agreement-app": {
      title: "Agreement App",
      category: "SaaS",
      description:
        "A secure application designed for confidential clientele and businesses to manage agreements and contracts with enhanced privacy features.",
      image: "/images/taskflow-app.png",
      techStack: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
      challenge:
        "The client needed a secure platform for managing sensitive agreements between businesses and confidential clients. They required robust security features, intuitive user interfaces, and reliable document handling capabilities.",
      solution:
        "We built a custom secure application tailored to their specific needs, with end-to-end encryption, role-based access controls, and digital signature capabilities. The solution included comprehensive audit trails and compliance features to ensure data integrity and confidentiality.",
      results: [
        "Enhanced security for confidential client agreements",
        "Streamlined contract management processes",
        "Improved compliance with industry regulations",
        "Positive feedback from clients regarding ease of use and security",
      ],
      testimonial: {
        quote:
          "Elev8Tech provided exceptional support for our Agreement app designed for confidential clientele and businesses. Their expertise in secure data handling and user-friendly interfaces has been crucial to our growth. The platform's security features and intuitive design have received outstanding feedback from our clients.",
        author: "Donald Hockenhull Tolliver",
        position: "CEO, AGREE ME inc.",
      },
    },
    "vlee-mobile-app": {
      title: "Vlee",
      category: "Mobile Apps",
      description:
        "A video sharing mobile application that allows users to create and share content, follow creators, and engage with a community of content creators.",
      image: "/images/vlee-app.png",
      techStack: ["React Native", "GraphQL", "AWS Amplify", "Swift"],
      challenge:
        "The client wanted to create a new video sharing platform focused on short-form content with a unique approach to creator monetization. They needed a solution that could handle high-volume video uploads, process content efficiently, and provide a seamless user experience.",
      solution:
        "We developed a cross-platform mobile application using React Native, with native modules for video processing to ensure optimal performance. The backend was built on AWS with a scalable architecture to handle growing user numbers and content volume. We implemented a unique monetization system that allowed creators to earn revenue through sponsorships and user support.",
      results: [
        "App reached 50,000 downloads in first quarter",
        "78% user retention rate",
        "Featured in App Store's 'New Apps We Love'",
        "Successfully processed over 100,000 video uploads in the first month",
      ],
      testimonial: {
        quote:
          "Elev8Tech took our vision for Vlee and turned it into reality. The app's performance has exceeded our expectations, and users love the intuitive interface. We reached 50,000 downloads in the first quarter, with a 78% user retention rate.",
        author: "Kebron Mamo",
        position: "Project Manager, Vlee Media",
      },
    },
    "elev8tech-corporate-website": {
      title: "Elev8Tech Corporate Website",
      category: "Web Development",
      description:
        "Our own corporate website showcasing our services, portfolio, and company information with a modern, responsive design.",
      image: "/placeholder.svg?height=600&width=800",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      challenge:
        "We needed a website that would effectively showcase our services, portfolio, and company culture while providing an exceptional user experience. The site needed to be fast, responsive, and visually appealing to reflect our expertise in web development.",
      solution:
        "We built our website using Next.js and Tailwind CSS, focusing on performance, accessibility, and user experience. We incorporated animations with Framer Motion to create engaging interactions without sacrificing load times. The site was designed to be fully responsive and optimized for all devices.",
      results: [
        "Improved site performance with 95+ Lighthouse scores",
        "Increased organic traffic by 45% within three months",
        "Reduced bounce rate by 30%",
        "Increased conversion rate for contact form submissions by 25%",
      ],
      testimonial: {
        quote:
          "Our new website has significantly improved our online presence and has become a powerful tool for showcasing our work and attracting new clients. The modern design and smooth performance reflect our commitment to quality and innovation.",
        author: "Basleal Ayinalem",
        position: "Founder & CEO, Elev8Tech",
      },
      externalLink: "https://elev8tech.co",
    },
    "healthtrack-patient-portal": {
      title: "HealthTrack Patient Portal",
      category: "Web Development",
      description:
        "A secure patient portal for a healthcare provider, allowing patients to schedule appointments, view medical records, and communicate with healthcare professionals.",
      image: "/placeholder.svg?height=600&width=800",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      challenge:
        "The healthcare provider needed a secure, HIPAA-compliant patient portal that would streamline appointment scheduling, provide easy access to medical records, and facilitate communication between patients and healthcare professionals. The existing system was outdated and difficult to use, leading to patient frustration and administrative inefficiencies.",
      solution:
        "We developed a comprehensive patient portal with a focus on security, usability, and integration with existing healthcare systems. The solution included secure authentication, encrypted data storage, appointment scheduling with automated reminders, access to medical records and test results, and a secure messaging system for patient-provider communication.",
      results: [
        "50% reduction in appointment no-shows",
        "35% decrease in administrative phone calls",
        "90% patient satisfaction rating",
        "Successful integration with existing electronic health record system",
      ],
      testimonial: {
        quote:
          "The HealthTrack portal has transformed how we interact with our patients. The system is intuitive for both patients and staff, and the reduction in administrative overhead has allowed us to focus more on patient care. Elev8Tech's understanding of healthcare requirements and attention to security details was impressive.",
        author: "Dr. Emily Rodriguez",
        position: "Medical Director, HealthCare Partners",
      },
    },
    "propertyfinder-real-estate": {
      title: "PropertyFinder Real Estate Platform",
      category: "Web Development",
      description:
        "A comprehensive real estate platform for property listings, virtual tours, and agent connections, with advanced search and filtering capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      challenge:
        "The client, a real estate agency, needed a modern platform to showcase their property listings, facilitate virtual tours, and connect potential buyers with agents. They wanted a solution that would provide advanced search and filtering capabilities, integrate with their existing CRM, and offer a superior user experience compared to competitors.",
      solution:
        "We developed a comprehensive real estate platform using Next.js and Tailwind CSS for the frontend, with Prisma and PostgreSQL for the backend. The platform featured advanced search and filtering options, interactive maps, virtual tour integration, automated email notifications, and a secure messaging system for agent-client communication. We also implemented an admin dashboard for property management and analytics.",
      results: [
        "60% increase in qualified leads",
        "45% reduction in time-to-sale for listed properties",
        "25% increase in website traffic through improved SEO",
        "Successful integration with existing CRM and property management systems",
      ],
      testimonial: {
        quote:
          "PropertyFinder has transformed our real estate business. The platform's advanced features and intuitive design have significantly improved our online presence and lead generation. Elev8Tech understood our specific needs and delivered a solution that exceeded our expectations.",
        author: "Jennifer Martinez",
        position: "Director of Sales, Urban Realty Group",
      },
    },
    "fitness-tracker-ui-design": {
      title: "Fitness Tracker UI Design",
      category: "UI/UX Design",
      description:
        "A comprehensive UI/UX design for a fitness tracking application, focusing on user engagement, intuitive navigation, and visual appeal.",
      image: "/placeholder.svg?height=600&width=800",
      techStack: ["Figma", "Adobe Photoshop", "Prototyping", "User Testing"],
      challenge:
        "The client was developing a fitness tracking application and needed a UI/UX design that would engage users, encourage regular use, and present complex fitness data in an intuitive and visually appealing way. The design needed to accommodate various user goals, from casual fitness enthusiasts to serious athletes.",
      solution:
        "We created a comprehensive UI/UX design in Figma, focusing on user-centered design principles. The design included personalized dashboards, intuitive workout tracking interfaces, progress visualization, social features, and gamification elements to encourage engagement. We conducted multiple rounds of user testing to refine the design based on real user feedback.",
      results: [
        "Design received 95% positive feedback in user testing",
        "Reduced user onboarding time by 40%",
        "Increased user engagement metrics in prototype testing",
        "Client secured additional funding based on the design prototype",
      ],
      testimonial: {
        quote:
          "The UI/UX design that Elev8Tech created for our fitness app was exceptional. They truly understood our vision and translated it into an intuitive, engaging, and visually stunning design. The user testing process was thorough and provided valuable insights that significantly improved the final product.",
        author: "Alex Thompson",
        position: "Founder, FitTech Solutions",
      },
    },
  }

  return projects[slug as keyof typeof projects] || null
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/works" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
      </div>
    )
  }

  // Only allow detailed case studies for these two projects
  if (params.slug !== "fooddelivery-mobile-app" && params.slug !== "taskflow-project-management") {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Details Not Available</h1>
        <p className="mb-8">Detailed information about this project is available upon request.</p>
        <Link href="/works" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Projects
        </Link>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#8a2be2] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#4a0080]"
          >
            Contact Us for Details
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative bg-gradient-to-br from-[#4a0080] to-[#8a2be2] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/works" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.launchDate && (
              <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-white">
                <span className="font-medium">Coming in {project.launchDate}</span>
              </div>
            )}
          </div>
        </div>
        <WaveDivider />
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#8a2be2]">The Challenge</h2>
              <p className="text-muted-foreground mb-8">{project.challenge}</p>
              <h2 className="text-3xl font-bold mb-6 text-[#8a2be2]">Our Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 -left-4 -top-4 w-full h-full rounded-xl bg-[#8a2be2]/10"></div>
              <div className="rounded-xl overflow-hidden border border-[#8a2be2]/20 shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg?height=600&width=800"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only show results section for TaskFlow project */}
      {params.slug === "taskflow-project-management" && project.results && (
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-[#8a2be2] text-center">Projected Results & Impact</h2>
              <div className="space-y-6">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-background rounded-xl shadow-md border border-[#8a2be2]/10"
                  >
                    <div className="mr-4 p-2 bg-[#8a2be2]/10 rounded-full">
                      <Check className="h-6 w-6 text-[#8a2be2]" />
                    </div>
                    <p className="text-lg text-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Only show testimonial section if the project has a testimonial and is not the food delivery app */}
      {project.testimonial && params.slug !== "fooddelivery-mobile-app" && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#4a0080] to-[#8a2be2] rounded-2xl p-8 md:p-12 text-white text-center">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 mx-auto text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl italic mb-6">{project.testimonial.quote}</p>
              <div>
                <p className="font-bold">{project.testimonial.author}</p>
                <p className="text-white/80">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#8a2be2]">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in web and mobile development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#8a2be2] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#4a0080]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
