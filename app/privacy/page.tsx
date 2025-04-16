import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Elev8Tech - Web & Mobile Development Solutions",
  description: "Learn about how Elev8Tech collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <div className="text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-6">
              <strong>Effective Date:</strong> April 16, 2025
            </p>

            <p>
              Elev8Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how
              we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, mailing address, and payment
                  information.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, including IP
                  address, browser type, pages visited, and time spent on pages.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience, analyze
                  site traffic, and understand user behavior.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and maintain our services.</li>
                <li>Process transactions and send related information.</li>
                <li>Communicate with you, including responding to inquiries and sending updates.</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist in operating our website and
                  providing our services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law or in response to valid requests by public
                  authorities.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information.
                </li>
                <li>
                  <strong>Objection:</strong> Object to the processing of your personal information.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request transfer of your personal information to another service
                  provider.
                </li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at info@elev8tech.co.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
                information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
