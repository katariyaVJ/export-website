"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicy() {
  return (
    <div className="bg-primary min-h-screen pt-40 pb-20">
      <div className="container-custom max-w-4xl">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">Privacy Policy</h1>
          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Krushnkrupa Exporters. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at vijaykatariya1825@gmail.com.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>
                We collect personal information that you provide to us such as name, address, contact information, and trade specifications when you fill out our inquiry forms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect or receive to facilitate account creation and logon process, to send you marketing and promotional communications, and to fulfill and manage your trade inquiries.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at vijaykatariya1825@gmail.com or by post to our regional headquarters in Surat, Gujarat, India.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
