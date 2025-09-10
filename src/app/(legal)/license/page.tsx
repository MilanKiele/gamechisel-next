import React from 'react';

export default function LicensePage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="space-y-12">
        <div className="text-left border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-foreground">License Agreement</h1>
          <p className="text-muted-foreground mt-3">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="text-muted-foreground">Last Modified: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">1. INTRODUCTION</h2>
            <div className="space-y-4 leading-7">
              <p>
                This License Agreement (&quot;License&quot;) governs your use of GameChisel&apos;s open source Unity collection software, 
                components, assets, and related materials (collectively, the &quot;Software&quot;).
              </p>
              <p>
                By accessing and using GameChisel&apos;s software and services, you acknowledge that you have read, understood, and agree to be
                bound by this License Agreement. If you do not agree to these terms, please do not use our software or services.
              </p>
              <p>
                This License is a legal agreement between you (either an individual or a single entity) and GameChisel for the software 
                product identified above, which includes computer software and may include associated media, printed materials, and online documentation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">2. LICENSE GRANT</h2>
            <div className="space-y-4 leading-7">
              <p>
                Subject to your compliance with this License, GameChisel grants you a limited, non-exclusive, non-transferable, 
                revocable license to use the Software for your personal or commercial use in accordance with these terms.
              </p>
              <p>
                This license is granted solely for the purpose of using the Software as intended by GameChisel and does not 
                include any rights to modify, distribute, or create derivative works beyond what is permitted by the open source license.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">3. PERMITTED USES</h2>
            <div className="space-y-4 leading-7">
              <p>You may use the Software to:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Develop Unity games and applications</li>
                <li>Use Unity components and scripts in your projects</li>
                <li>Modify and customize components for your needs</li>
                <li>Distribute your games and applications</li>
                <li>Contribute improvements back to the project</li>
                <li>Use 3D models and assets in your games</li>
                <li>Access documentation and tutorials</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">4. RESTRICTIONS</h2>
            <div className="space-y-4 leading-7">
              <p>You may not:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Use the Software for illegal or unauthorized purposes</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use the Software to create content that violates third-party rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Distribute the Software itself for commercial gain</li>
                <li>Use the Software in a way that violates the open source license</li>
                <li>Claim ownership of the original Software components</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">5. INTELLECTUAL PROPERTY RIGHTS</h2>
            <div className="space-y-4 leading-7">
              <p>
                The Software and all related intellectual property rights remain the exclusive property of GameChisel. 
                This License does not transfer any ownership rights to you.
              </p>
              <p>
                All title and intellectual property rights in and to the Software, and any copies of the Software are owned by GameChisel. 
                The Software is protected by copyright laws and international treaty provisions.
              </p>
              <p>
                You retain ownership of any content you create using the Software, subject to the terms of this License and our Terms of Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">6. OPEN SOURCE COMPONENTS</h2>
            <div className="space-y-4 leading-7">
              <p>
                GameChisel includes various open source components and libraries. Each component is licensed under its respective 
                open source license. You must comply with the terms of each individual license.
              </p>
              <p>
                Common open source licenses used in this project include:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>MIT License</li>
                <li>Apache License 2.0</li>
                <li>BSD License</li>
                <li>GNU General Public License (GPL)</li>
              </ul>
              <p>
                Please refer to the individual component documentation for specific license terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">7. TERM AND TERMINATION</h2>
            <div className="space-y-4 leading-7">
              <p>
                This License is effective until terminated. Your rights under this License will terminate automatically 
                without notice from GameChisel if you fail to comply with any term(s) of this License.
              </p>
              <p>
                Upon termination of the License, you must cease all use of the Software and destroy all copies, 
                full or partial, of the Software.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">8. DISCLAIMER OF WARRANTIES</h2>
            <div className="space-y-4 leading-7">
              <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. GAMECHISEL DISCLAIMS ALL WARRANTIES, 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, 
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                GameChisel does not warrant that the Software will meet your requirements or that the operation of the Software 
                will be uninterrupted or error-free.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">9. LIMITATION OF LIABILITY</h2>
            <div className="space-y-4 leading-7">
              <p>
                IN NO EVENT SHALL GAMECHISEL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
                RESULTING FROM YOUR USE OF THE SOFTWARE.
              </p>
              <p>
                GameChisel&apos;s total liability to you for any damages shall not exceed the amount paid by you for the Software, 
                if any, or fifty dollars ($50.00), whichever is greater.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">10. GOVERNING LAW</h2>
            <div className="space-y-4 leading-7">
              <p>
                This License shall be governed by and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from this License shall be subject to the exclusive jurisdiction of the courts 
                located in the United States.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">11. CONTACT INFORMATION</h2>
            <div className="space-y-4 leading-7">
              <p>
                For questions about this License Agreement, please contact us:
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
            By using our Software, you acknowledge that you have read and understood this License Agreement.
          </p>
          <p className="text-muted-foreground mt-2">
            This License Agreement was last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
}