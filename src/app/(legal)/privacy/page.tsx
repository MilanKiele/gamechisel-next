import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="space-y-12">
        <div className="text-left border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mt-3">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="text-muted-foreground">Last Modified: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">1. INTRODUCTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                This Privacy Policy (&quot;Policy&quot;) describes how GameChisel (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, discloses, 
                and protects your personal information when you use our open source Unity collection website, GitHub repository, 
                and related services (collectively, the &quot;Service&quot;).
              </p>
              <p>
                We are committed to protecting your privacy and ensuring the security of your personal information. This Policy 
                explains your privacy rights and how the law protects you.
              </p>
              <p>
                By using our Service, you consent to the collection and use of your information in accordance with this Privacy Policy. 
                If you do not agree with our policies and practices, do not use our Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">2. INFORMATION WE COLLECT</h2>
            <div className="space-y-4 leading-7">
              <p><strong>Personal Information You Provide:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Contact information (email address, name)</li>
                <li>GitHub account information (if you contribute to our repository)</li>
                <li>Communications (messages, feedback, support requests)</li>
                <li>User-generated content (code contributions, issues, pull requests)</li>
              </ul>
              
              <p><strong>Information We Collect Automatically:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files (access times, error logs, performance data)</li>
              </ul>

              <p><strong>Information from Third Parties:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>GitHub (if you connect your GitHub account)</li>
                <li>Analytics providers (usage statistics, demographics)</li>
                <li>Social media platforms (if you connect your accounts)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">3. HOW WE USE YOUR INFORMATION</h2>
            <div className="space-y-4 leading-7">
              <p>We use your personal information for the following purposes:</p>
              
              <p><strong>Service Provision:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Providing access to our open source Unity collection</li>
                <li>Managing GitHub repository contributions</li>
                <li>Facilitating community collaboration</li>
                <li>Providing technical support and documentation</li>
              </ul>

              <p><strong>Communication:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Sending service-related notifications</li>
                <li>Responding to customer support requests</li>
                <li>Providing technical support</li>
                <li>Sending project updates and announcements</li>
              </ul>

              <p><strong>Improvement and Analytics:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Analyzing usage patterns and user behavior</li>
                <li>Improving our open source components</li>
                <li>Developing new features and tools</li>
                <li>Conducting research and development</li>
              </ul>

              <p><strong>Legal and Security:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and abuse</li>
                <li>Enforcing our Terms of Service</li>
                <li>Ensuring platform security</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">4. HOW WE SHARE YOUR INFORMATION</h2>
            <div className="space-y-4 leading-7">
              <p>We may share your personal information in the following circumstances:</p>

              <p><strong>Service Providers:</strong></p>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, 
                including hosting, email delivery, customer support, and analytics.
              </p>

              <p><strong>Open Source Community:</strong></p>
              <p>
                As an open source project, your contributions (code, issues, pull requests) may be publicly visible 
                on our GitHub repository and other public platforms.
              </p>

              <p><strong>Legal Requirements:</strong></p>
              <p>
                We may disclose your information when required by law, court order, or government request, or when 
                we believe disclosure is necessary to protect our rights, property, or safety.
              </p>

              <p><strong>With Your Consent:</strong></p>
              <p>
                We may share your information with third parties when you have given us explicit consent to do so.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">5. DATA RETENTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
              <p>
                Specifically, we retain:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Account information: Until you delete your account or request deletion</li>
                <li>GitHub contributions: Permanently as part of the open source project</li>
                <li>Usage data: Up to 24 months for analytics purposes</li>
                <li>Support communications: Up to 3 years for quality assurance</li>
              </ul>
              <p>
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">6. DATA SECURITY</h2>
            <div className="space-y-4 leading-7">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>Our security measures include:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure hosting and infrastructure</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">7. YOUR PRIVACY RIGHTS</h2>
            <div className="space-y-4 leading-7">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <p><strong>Access and Portability:</strong></p>
              <p>You have the right to access and receive a copy of your personal information.</p>
              
              <p><strong>Correction:</strong></p>
              <p>You have the right to correct inaccurate or incomplete personal information.</p>
              
              <p><strong>Deletion:</strong></p>
              <p>You have the right to request deletion of your personal information in certain circumstances.</p>
              
              <p><strong>Restriction:</strong></p>
              <p>You have the right to restrict the processing of your personal information in certain situations.</p>
              
              <p><strong>Objection:</strong></p>
              <p>You have the right to object to our processing of your personal information for direct marketing purposes.</p>
              
              <p><strong>Withdraw Consent:</strong></p>
              <p>Where processing is based on consent, you have the right to withdraw your consent at any time.</p>

              <p>To exercise these rights, please contact us at support@gamechisel.com. We will respond to your request within 30 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">8. COOKIES AND TRACKING TECHNOLOGIES</h2>
            <div className="space-y-4 leading-7">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our Service. 
                Cookies are small data files stored on your device.
              </p>
              
              <p><strong>Types of Cookies We Use:</strong></p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Essential cookies: Required for basic service functionality</li>
                <li>Performance cookies: Help us analyze and improve service performance</li>
                <li>Functional cookies: Enable enhanced features and personalization</li>
                <li>Analytics cookies: Used to understand user behavior and improve our service</li>
              </ul>
              
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may 
                affect your ability to use some features of our Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">9. INTERNATIONAL DATA TRANSFERS</h2>
            <div className="space-y-4 leading-7">
              <p>
                Your personal information may be transferred to and processed in countries other than your country 
                of residence, including the United States and other countries where we or our service providers operate.
              </p>
              <p>
                When we transfer your personal information internationally, we implement appropriate safeguards 
                to ensure your information receives adequate protection, including:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">10. CHILDREN&apos;S PRIVACY</h2>
            <div className="space-y-4 leading-7">
              <p>
                Our Service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
              <p>
                Users between 13 and 17 years of age may only use our Service under parental supervision and 
                with parental consent to these terms.
              </p>
              <p>
                If we learn that we have collected personal information from a child under 13 without parental 
                consent, we will take steps to delete such information from our files as quickly as possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">11. CHANGES TO THIS PRIVACY POLICY</h2>
            <div className="space-y-4 leading-7">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors.
              </p>
              <p>
                When we make changes, we will update the &quot;Last Modified&quot; date at the top of this Policy and, 
                for material changes, we may provide additional notice such as:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Sending you an email notification</li>
                <li>Posting a notice on our website</li>
                <li>Requiring you to acknowledge the changes when you next use the Service</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we 
                collect, use, and protect your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">12. CONTACT INFORMATION</h2>
            <div className="space-y-4 leading-7">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy 
                practices, please contact us:
              </p>
              <div className="bg-muted p-6 border border-border rounded-lg">
                <p><strong>GameChisel</strong></p>
                <p>Email: support@gamechisel.com</p>
                <p>Website: https://gamechisel.com</p>
                <p>GitHub: https://github.com/gamechisel/gamechisel</p>
              </div>
              <p>
                We will make every effort to respond to your privacy inquiries within 30 days.
              </p>
            </div>
          </section>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            By using our Service, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <p className="text-muted-foreground mt-2">
            This Privacy Policy was last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
}