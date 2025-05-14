'use client';

import React from 'react';
import Link from 'next/link'; // ✅ 이 줄 추가
import Head from 'next/head'; // ✅ 이 줄을 꼭 추가

const metaversesolution = () => {
  return (
    <>
      <Head>
        <title>VR & AR Mission Solutions | MissioTech</title>
        <meta
          name="description"
          content="Immersive training and outreach tools using VR/AR for mission organizations. Affordable, measurable, and impactful."
        />
      </Head>

export default MetaverseSolution;

      <main className="flex min-h-screen flex-col">
        <header className="bg-white shadow py-4">
          <div className="container mx-auto px-4 text-xl font-bold">MissioTech</div>
        </header>

        <section className="bg-[#E6F7FA] pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">VR · AR Solutions</h1>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Affordable immersive technology that turns training & outreach into measurable impact.
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0A6E8A]">Starting at $199 / month</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact?ref=vr" className="btn-primary">
                Free Consultation
              </Link>
              <a href="#showcase" className="btn-outline">
                Watch Demo ↓
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-10">Why Mission-Focused VR / AR?</h2>
            <div className="overflow-x-auto">
              <table className="mx-auto w-full max-w-5xl table-auto border-collapse text-left text-sm shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="px-4 py-3 font-semibold">Challenge</th>
                    <th className="px-4 py-3 font-semibold">Traditional Method</th>
                    <th className="px-4 py-3 font-semibold">VR / AR Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[['High travel & field‑risk cost','On‑site trips, insurance','Up to 90% cost saving via simulation'],['Low engagement on Zoom','Passive slides','3× higher retention (PwC 2023)'],['Hard‑to‑measure outcomes','Paper tests','Instant analytics dashboard']].map(([c, t, v]) => (
                    <tr key={c} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{c}</td>
                      <td className="px-4 py-3 text-gray-600">{t}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="showcase" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-10">Solution Showcase</h2>
            <div className="grid gap-10 md:grid-cols-2">
              {[{
                title: 'Mission Field Walkthrough',
                focus: 'Cultural cues & safety drills',
                outcome: '70% faster adaptation',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              }, {
                title: 'Language Partner AR',
                focus: 'Pronunciation overlay',
                outcome: '50% error reduction',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              }, {
                title: 'Virtual Fund-Raiser Hall',
                focus: 'Interactive donor booths',
                outcome: 'Avg. gift +23%',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              }, {
                title: 'Remote Repair Coach',
                focus: 'AR step-by-step guidance',
                outcome: 'First-time fix ↑ 35%',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              }].map((s) => (
                <div key={s.title} className="rounded-lg bg-white shadow overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={s.video}
                      title={s.title}
                      loading="lazy"
                      className="w-full h-full border-0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="text-gray-600">{s.focus}</p>
                    <p className="text-sm font-medium text-[#0A6E8A]">{s.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Quote */}
        <section className="bg-[#E6F7FA] py-16">
          <blockquote className="mx-auto max-w-2xl text-center text-xl italic text-primary">
            “We replaced two days of on-site orientation with a single 45-minute VR session—saving $5,000 in flights and doubling volunteer confidence.”
          </blockquote>
          <p className="mt-4 text-center font-semibold text-primary-900">— HopeServe Manila, 2024 pilot</p>
        </section>

      </main>
    </>
  );
};

export default metaversesolution;
