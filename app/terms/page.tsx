import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Elev8Tech - Web & Mobile Development Solutions",
  description: "Read the terms and conditions governing the use of Elev8Tech's services and website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <div className="text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> April 16, 2025
            </p>

            <p>
              These Terms of Service ("Terms") govern your use of the Elev8Tech website and services. By accessing or
              using our services, you agree to be bound by these Terms.
            </p>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Services</h2>
              <p>
                Elev8Tech provides web development, mobile application development, custom software solutions,
                e-commerce platforms, and UI/UX design services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and complete information when using our services.</li>
                <li>Use our services in compliance with applicable laws and regulations.</li>
                <li>Not engage in any activity that interferes with or disrupts our services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on our website are the property of Elev8Tech or its
                licensors. You may not use, reproduce, or distribute any content without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Payment Terms</h2>
              <p>
                Payment terms will be outlined in individual service agreements. Unless otherwise specified, payments
                are due upon receipt of invoice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our services at our discretion, without
                notice, for conduct that we believe violates these Terms or is harmful to other users.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Disclaimers</h2>
              <p>
                Our services are provided "as is" without warranties of any kind. We do not guarantee that our services
                will be uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Elev8Tech shall not be liable for any indirect, incidental, or
                consequential damages arising out of or in connection with your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California, without regard to its conflict of law
                principles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms
                on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-2">
                <p>Elev8Tech</p>
                <p>16839 Ramona Avenue, Suite 256</p>
                <p>Fontana, CA 92336</p>
                <p>Email: info@elev8tech.co</p>
                <p>Phone: (626) 620-2783</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
