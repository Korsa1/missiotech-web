import React from 'react';
import Link from 'next/link';
import HeaderV2 from '@/components/v2/HeaderV2';
import FooterV2 from '@/components/v2/FooterV2';

type ProgramSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  outcomes: string[];
  examples: string[];
  reversed?: boolean;
};

function ProgramSection({ id, eyebrow, title, description, outcomes, examples, reversed = false }: ProgramSectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-20 odd:bg-white even:bg-[#F7FBFC]">
      <div className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-[#00B8D4] mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A33] mb-6">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>
          <h3 className="font-bold text-lg mb-4">What participants build or learn</h3>
          <ul className="space-y-3">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-gray-600">
                <span className="text-[#00B8D4] font-bold" aria-hidden="true">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-3xl bg-[#003B4F] text-white p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-5">Representative work</h3>
          <ul className="space-y-4">
            {examples.map((example) => (
              <li key={example} className="border-l-2 border-[#00B8D4] pl-4 text-gray-200 leading-relaxed">{example}</li>
            ))}
          </ul>
          <Link href={`/contact?program=${encodeURIComponent(title)}`} className="inline-block mt-8 px-6 py-3 rounded-xl bg-[#00B8D4] text-[#003B4F] font-bold hover:bg-white transition-colors">
            Discuss this program
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="font-sans antialiased text-[#1A2A33] bg-white">
      <HeaderV2 />
      <section className="pt-36 pb-20 bg-[#003B4F] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#00B8D4] mb-4">Programs &amp; Collaboration</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Technology shaped by mission practice</h1>
          <p className="text-xl text-gray-300 leading-relaxed">MissioTech develops people and ministry capacity through contextual training, theological-education tools, and applied research in AI and immersive technology.</p>
        </div>
      </section>

      <ProgramSection id="missionary-ai-training" eyebrow="Training" title="Missionary AI Training" description="Practical education for missionaries, pastors, and ministry teams who need more than a list of AI tools. Each program connects a real recurring task with a safe, verifiable, and reusable workflow." outcomes={['Design prompts and custom assistants around a clearly defined ministry purpose.','Adapt sermons, lessons, reports, and Bible-study material for different ages, cultures, and language levels.','Use source-grounded tools such as NotebookLM and establish theological, factual, cultural, and security checks.','Decide when cloud AI, local AI, or human-only work is most appropriate.']} examples={['KPM × MissioTech online AI education for missionaries, including custom AI assistant design.','Audience-specific content workshops converting existing ministry resources into teaching and presentation formats.','Hands-on assignments using GPTs or Gems, NotebookLM, and repeatable “magic prompt” workflows.']} />

      <ProgramSection id="theological-education" eyebrow="Formation" title="AI-Enabled Theological Education" description="We help seminaries and ministry educators turn substantial theological and historical material into structured, multilingual, and interactive learning experiences without surrendering academic or theological responsibility to AI." outcomes={['Develop student-ready lessons, handouts, assignments, and course structures.','Create multilingual learning resources with clear disclosure and human review.','Build submission, instructor-review, and local-LLM assessment workflows.','Connect historical evidence, maps, timelines, and primary-source context to classroom use.']} examples={['A multilingual Philippine Church History Learning Hub with lesson navigation and student submission workflows.','Intensive seminary-course development for Reformed Philippine church history and mission studies.','Practical AI and VR ministry instruction connected with theological institutions in Asia and Africa.']} reversed />

      <ProgramSection id="mission-research" eyebrow="Research & Prototyping" title="AI, XR &amp; Mission Research" description="MissioTech studies emerging technology from the standpoint of mission, discipleship, theological education, and Christian ethics. Research is translated into lectures, curricula, prototypes, and field-testable proposals." outcomes={['Frame opportunities and risks through theological, missiological, pedagogical, and ethical lenses.','Design AI-agent teams for research and ministry workflows with staged verification.','Prototype VR/XR environments for disciple-making and location-free theological formation.','Develop AI Mission Literacy curricula for missionaries, pastors, educators, and mission leaders.']} examples={['“AI, XR & Mission” lectures and mission-forum presentations for church and mission leaders.','Research on disciple-making theological education in VR and immersive ministry environments.','Curriculum design spanning AI theology and ethics, agents, local AI, security, education, and XR ministry.']} />

      <section className="py-20 bg-[#E6F7FA] text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Start with one concrete ministry need</h2>
          <p className="text-lg text-gray-600 mb-8">We can shape a workshop, research collaboration, curriculum sprint, or small prototype around your people and context.</p>
          <Link href="/contact" className="btn-primary inline-block">Contact MissioTech</Link>
        </div>
      </section>
      <FooterV2 />
    </main>
  );
}
