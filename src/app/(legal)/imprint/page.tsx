import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imprint - GameChisel",
  description: "Legal imprint and company information for GameChisel",
}

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="space-y-12">
        <div className="text-left border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-foreground">Imprint</h1>
          <p className="text-muted-foreground mt-3">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="text-muted-foreground">Last Modified: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">1. INFORMATION ACCORDING TO § 5 TMG</h2>
            <div className="space-y-4 leading-7">
              <p>
                <strong>GameChisel</strong><br />
                Open Source Unity Development Platform<br />
                <br />
                <strong>Represented by:</strong><br />
                Milan Kiele<br />
                Founder & Lead Developer
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">2. CONTACT</h2>
            <div className="space-y-4 leading-7">
              <p>
                <strong>Email:</strong> contact@gamechisel.com<br />
                <strong>Website:</strong> https://gamechisel.com<br />
                <strong>GitHub:</strong> https://github.com/gamechisel
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">3. RESPONSIBLE FOR CONTENT ACCORDING TO § 55 ABS. 2 RSTV</h2>
            <div className="space-y-4 leading-7">
              <p>
                Milan Kiele<br />
                GameChisel<br />
                contact@gamechisel.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">4. DISCLAIMER</h2>
            <div className="space-y-4 leading-7">
              <h3 className="text-xl font-semibold text-foreground mb-4">Liability for Contents</h3>
              <p>
                As service providers, we are liable for own contents of these websites according to Sec. 7, 
                paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), 
                service providers are not under obligation to permanently monitor submitted or stored information or to 
                search for evidences that indicate illegal activities.
              </p>
              
              <p>
                Legal obligations to removing information or to blocking the use of information remain unchallenged. 
                In this case, liability is only possible at the time of knowledge about a specific violation of law. 
                Illegal contents will be removed immediately at the time we get knowledge of them.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Liability for Links</h3>
              <p>
                Our offer includes links to external third party websites. We have no influence on the contents of 
                those websites, therefore we cannot guarantee for those contents. Providers or administrators of 
                linked websites are always responsible for their own contents.
              </p>
              
              <p>
                The linked websites had been checked for possible violations of law at the time of the establishment 
                of the link. Illegal contents were not detected at the time of the linking. However, a permanent 
                monitoring of the contents of linked websites cannot be imposed without reasonable indications that 
                there has been a violation of law. Illegal links will be removed immediately at the time we get 
                knowledge of them.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Copyright</h3>
              <p>
                Contents and compilations published on these websites by the providers are subject to German copyright laws. 
                Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright 
                law require a written permission of the author or originator. Downloads and copies of these websites 
                are permitted for private use only.
              </p>
              
              <p>
                The commercial use of our contents without permission of the original author is prohibited.
              </p>
              
              <p>
                Copyright laws of third parties are respected as long as the contents on these websites do not originate 
                from the provider. Contributions of third parties on this site are indicated as such. However, if you 
                notice any violations of copyright law, please inform us. Such contents will be removed immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">5. OPEN SOURCE</h2>
            <div className="space-y-4 leading-7">
              <p>
                GameChisel is an open source project. The source code is available under the MIT License on GitHub. 
                Contributions to the project are welcome and encouraged.
              </p>
              
              <p>
                <strong>Repository:</strong> https://github.com/gamechisel/gamechisel<br />
                <strong>License:</strong> MIT License
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">6. DATA PROTECTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                The use of our website is usually possible without providing personal information. As far as personal 
                data (such as name, address or email addresses) is collected on our pages, this is always done on a 
                voluntary basis, as far as possible.
              </p>
              
              <p>
                For detailed information about data protection, please refer to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}