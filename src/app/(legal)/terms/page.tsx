import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="space-y-12">
        <div className="text-left border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mt-3">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="text-muted-foreground">Last Modified: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">1. INTRODUCTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, &quot;your&quot;) 
                and GameChisel (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) regarding your access to and use of our open source Unity collection project, 
                website, and related services (collectively, the &quot;Service&quot;).
              </p>
              <p>
                By accessing and using GameChisel&apos;s services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                We reserve the right to modify these terms at any time, and such modifications will be effective immediately
                upon posting on our website.
              </p>
              <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 
                &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. 
                &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">2. SERVICE DESCRIPTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                GameChisel provides an open source Unity collection project, including but not limited to:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Open source Unity components and scripts</li>
                <li>3D models and assets for game development</li>
                <li>Development tools and utilities</li>
                <li>Documentation and tutorials</li>
                <li>Community collaboration features</li>
                <li>GitHub repository access</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">3. OPEN SOURCE LICENSE</h2>
            <div className="space-y-4 leading-7">
              <p>
                GameChisel is an open source project. The source code and assets are made available under the terms of the 
                applicable open source license. By contributing to or using our project, you agree to comply with the 
                terms of the open source license.
              </p>
              <p>
                You may use, modify, and distribute the open source components in accordance with the license terms, 
                but you must maintain proper attribution and include the original license notices.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">4. ACCEPTABLE USE POLICY</h2>
            <div className="space-y-4 leading-7">
              <p>You agree not to use the service:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">5. INTELLECTUAL PROPERTY RIGHTS</h2>
            <div className="space-y-4 leading-7">
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of GameChisel and its licensors. 
                The service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Unless otherwise stated, GameChisel and/or its licensors own the intellectual property rights for all material on GameChisel. 
                All intellectual property rights are reserved. You may access this from GameChisel for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">6. PRIVACY POLICY</h2>
            <div className="space-y-4 leading-7">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. 
                By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
              <p>
                For detailed information about how we handle your personal data, please refer to our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">7. TERMINATION</h2>
            <div className="space-y-4 leading-7">
              <p>
                We may terminate or suspend your access to the service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever including but not limited to a breach of the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will cease immediately. If you wish to terminate your access, 
                you may simply discontinue using the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">8. DISCLAIMER</h2>
            <div className="space-y-4 leading-7">
              <p>
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, GameChisel excludes all 
                representations, warranties, conditions and terms express or implied, statutory or otherwise.
              </p>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">9. LIMITATION OF LIABILITY</h2>
            <div className="space-y-4 leading-7">
              <p>
                In no event shall GameChisel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your use of the service.
              </p>
              <p>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; 
                and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">10. GOVERNING LAW</h2>
            <div className="space-y-4 leading-7">
              <p>
                These Terms shall be interpreted and governed by the substantive and procedural laws of the United States without regard to its rules on conflicts or choice of law.
              </p>
              <p>
                The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in the United States, 
                and you hereby submit to the personal jurisdiction of such courts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">11. CHANGES TO TERMS</h2>
            <div className="space-y-4 leading-7">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                Continued use of our Service after policy updates constitutes acceptance of the revised terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">12. CONTACT INFORMATION</h2>
            <div className="space-y-4 leading-7">
              <p>
                If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-6 border border-border rounded-lg">
                <p><strong>GameChisel</strong></p>
                <p>Email: support@gamechisel.com</p>
                <p>Website: https://gamechisel.com</p>
                <p>GitHub: https://github.com/gamechisel/gamechisel</p>
              </div>
              <p>
                We will make every effort to respond to your inquiries within 30 days.
              </p>
            </div>
          </section>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            By using our Service, you acknowledge that you have read and understood these Terms of Service.
          </p>
          <p className="text-muted-foreground mt-2">
            These Terms of Service were last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
}