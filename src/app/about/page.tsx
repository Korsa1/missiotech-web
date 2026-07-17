import React from 'react';
import Link from 'next/link';
import HeaderV2 from '@/components/v2/HeaderV2';
import FooterV2 from '@/components/v2/FooterV2';

const principles = [
  { title: 'Mission before novelty', description: 'We begin with people, calling, context, and a real ministry problem—not with the newest tool.' },
  { title: 'Theology with practice', description: 'Technological possibilities are examined through Christian theology, missiology, education, ethics, and field experience.' },
  { title: 'Build, test, verify', description: 'Ideas become small usable resources or prototypes and are reviewed for facts, sources, theology, culture, privacy, and security.' },
  { title: 'Capacity over dependency', description: 'Training should help local leaders and missionaries develop sustainable judgment and repeatable workflows of their own.' },
];

export default function AboutPage() {
  return (
    <main className="font-sans antialiased text-[#1A2A33] bg-white">
      <HeaderV2 />
      <section className="pt-36 pb-20 bg-[#003B4F] text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wider text-[#00B8D4] mb-4">About MissioTech</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-7">A mission research and development initiative</h1>
          <p className="text-xl text-gray-300 leading-relaxed">MissioTech explores how AI, VR/XR, and emerging digital systems can serve Christian mission, disciple-making, and theological education responsibly across cultures.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#00B8D4] mb-3">Why it exists</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging field realities and emerging technology</h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>Mission organizations and seminaries face growing opportunities in AI and immersive technology, but they also face theological, educational, cultural, financial, and security questions.</p>
              <p>MissioTech responds through research, teaching, curriculum design, and small-scale prototypes. Its purpose is not to promote technology uncritically, but to help Christian leaders discern what is useful, what is risky, and what should remain deeply human.</p>
            </div>
          </div>
          <aside className="rounded-3xl bg-[#E6F7FA] p-8">
            <h2 className="text-2xl font-bold mb-4">Steve Jun</h2>
            <p className="text-[#0A6E8A] font-semibold mb-5">Founder, MissioTech · KPM Missionary · Researcher and Educator</p>
            <p className="text-gray-600 leading-relaxed mb-4">Steve Jun&apos;s work grows out of missionary leadership, theological education, and ministry training in Africa and Asia. He previously served in KPM research and development and continues to connect mission strategy with practical experiments in AI and XR.</p>
            <p className="text-gray-600 leading-relaxed">His teaching and research include missionary AI education, disciple-making theological education, digital and diaspora mission, AI agents, local AI, and VR/XR learning environments.</p>
          </aside>
        </div>
      </section>
      <section className="py-20 bg-[#F7FBFC]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-wider text-[#00B8D4] mb-3">How we work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">A disciplined path from question to ministry use</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <article key={principle.title} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#0A6E8A] text-white font-bold mb-5">{index + 1}</span>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Collaboration across mission and education</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">MissioTech&apos;s work has included training and research connected with KPM missionaries, mission forums, seminaries, theological educators, and ministry leaders in Asia and Africa. Collaboration is shaped around the needs and capacity of each context.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">Explore Programs</Link>
            <Link href="/contact" className="px-6 py-3 rounded-md border-2 border-[#0A6E8A] text-[#0A6E8A] font-bold hover:bg-[#E6F7FA] transition-colors">Discuss Collaboration</Link>
          </div>
        </div>
      </section>
      <FooterV2 />
    </main>
  );
}
