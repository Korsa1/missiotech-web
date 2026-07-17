import React from 'react';

const projects = [
    {
        category: 'Training',
        title: 'KPM × MissioTech Missionary AI Education',
        description: 'Practical online training for missionaries on prompt design, audience-specific content, NotebookLM, custom GPTs and Gems, and reusable AI-assisted ministry workflows.',
        details: ['Mission-focused exercises', 'Custom assistant design', 'Theological and factual verification'],
    },
    {
        category: 'Theological Education',
        title: 'AI-Enabled Learning Resources',
        description: 'Course materials and learning tools for seminaries and ministry leaders, including multilingual Philippine church-history lessons, student submissions, and AI-supported assessment.',
        details: ['Seminary course development', 'Multilingual learning design', 'Local-LLM assessment experiments'],
    },
    {
        category: 'Research & Prototyping',
        title: 'AI, XR & Mission',
        description: 'Research, lectures, and prototypes connecting AI agents, immersive theological education, disciple-making, and metaverse ministry with field realities and Christian ethics.',
        details: ['Mission forums and workshops', 'VR/XR ministry environments', 'AI Mission Literacy curriculum'],
    },
];

const TestimonialsV2 = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" aria-labelledby="work-in-practice-title">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#00B8D4] font-bold tracking-wider uppercase text-sm">Work in Practice</span>
                    <h2 id="work-in-practice-title" className="text-4xl font-bold mt-2 mb-5 text-[#1A2A33]">Built from Real Ministry Work</h2>
                    <p className="text-xl text-gray-600">
                        These are representative areas in which MissioTech has already taught, researched, or developed working resources with mission and theological-education partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <article key={project.title} className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <span className="self-start px-3 py-1 rounded-full bg-[#E6F7FA] text-[#0A6E8A] text-xs font-bold uppercase tracking-wide mb-5">
                                {project.category}
                            </span>
                            <h3 className="font-bold text-2xl text-[#1A2A33] mb-4">{project.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                            <ul className="mt-auto space-y-3 border-t border-gray-100 pt-6">
                                {project.details.map((detail) => (
                                    <li key={detail} className="flex items-start gap-3 text-sm text-gray-600">
                                        <svg className="w-5 h-5 text-[#00B8D4] flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsV2;
