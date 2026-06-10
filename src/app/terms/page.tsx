"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function TermsOfService() {
  return (
    <div className="bg-primary min-h-screen pt-40 pb-20">
      <div className="container-custom max-w-4xl">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">Terms of Service</h1>
          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website at krushnkrupa.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Krushnkrupa Exporters&apos; website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Trade Inquiries</h2>
              <p>
                All trade inquiries submitted through the website are subject to verification. Krushnkrupa Exporters reserves the right to refuse service or provide quotations based on our internal risk assessment and logistical capabilities.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
              <p>
                The materials on Krushnkrupa Exporters&apos; website are provided on an &apos;as is&apos; basis. Krushnkrupa Exporters makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Gujarat, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
