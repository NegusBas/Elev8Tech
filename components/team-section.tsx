import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in software development and business leadership, Alex founded Elev8Tech to help businesses leverage technology for growth.",
    skills: ["Business Strategy", "Software Architecture", "Team Leadership"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Samantha Chen",
    role: "Lead Developer",
    bio: "Samantha brings 10+ years of full-stack development expertise, specializing in creating scalable web applications and mentoring junior developers.",
    skills: ["React", "Node.js", "AWS", "System Design"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Marcus Williams",
    role: "Mobile Development Lead",
    bio: "Marcus has developed over 30 mobile applications for iOS and Android, with a focus on creating intuitive user experiences and high-performance apps.",
    skills: ["React Native", "Swift", "Kotlin", "UX Design"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    bio: "Priya combines artistic talent with user research to create beautiful, functional designs that enhance user engagement and conversion rates.",
    skills: ["UI Design", "User Research", "Prototyping", "Figma"],
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented professionals behind Elev8Tech's success. We're passionate about technology and committed to
              your success.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
