'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/**
 * MetaverseSolution Sub‑Page
 * Tone & styling aligned with ServicesPage (MissioTech primary palette / Tailwind utility classes)
 */

const MetaverseSolution: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header (consistent across site) */}
      <Header />

      {/* Hero – same colour scheme & spacing as ServicesPage */}
      <section className="bg-[#E6F7FA] pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">VR · AR Solutions</h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Affordable immersive technology that turns training & outreach into measurable impact.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">Starting at&nbsp;$199&nbsp;/&nbsp;month</p>
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

      {/* Value Pitch – table matches ServicesPage card tone */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Why Mission‑Focused VR&nbsp;/&nbsp;AR?</h2>
          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-5xl table-auto border-collapse text-left text-sm shadow-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-3 font-semibold">Challenge</th>
                  <th className="px-4 py-3 font-semibold">Traditional Method</th>
                  <th className="px-4 py-3 font-semibold">VR&nbsp;/&nbsp;AR Benefit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['High travel & field‑risk cost', 'On‑site trips, insurance', 'Up to 90 % cost saving via simulation'],
                  ['Low engagement on Zoom', 'Passive slides', '3× higher retention (PwC 2023)'],
                  ['Hard‑to‑measure outcomes', 'Paper tests', 'Instant analytics dashboard'],
                ].map(([c, t, v]) => (
                  <tr key={c} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 align-top text-gray-700">{c}</td>
                    <td className="px-4 py-3 align-top text-gray-600">{t}</td>
                    <td className="px-4 py-3 align-top font-medium text-gray-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Showcase – four videos (cards mirror ServicesPage style) */}
      <section id="showcase" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Solution Showcase</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                title: 'Mission Field Walkthrough',
                focus: 'Cultural cues & safety drills',
                outcome: '70 % faster adaptation',
                video: 'https://www.youtube.com/embed/VIDEO_ID_1',
              },
              {
                title: 'Language Partner AR',
                focus: 'Pronunciation overlay',
                outcome: '50 % error reduction',
                video: 'https://www.youtube.com/embed/VIDEO_ID_2',
              },
              {
                title: 'Virtual Fund‑Raiser Hall',
                focus: 'Interactive donor booths',
                outcome: 'Avg. gift +23 %',
                video: 'https://www.youtube.com/embed/VIDEO_ID_3',
              },
              {
                title: 'Remote Repair Coach',
                focus: 'AR step‑by‑step guidance',
                outcome: 'First‑time fix ↑ 35 %',
                video: 'https://www.youtube.com/embed/VIDEO_ID_4',
              },
            ].map(s => (
              <div key={s.title} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="aspect-video bg-black/5">
                  <iframe
                    src={s.video}
                    title={s.title}
                    loading="lazy"
                    className="h-full w-full border-0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.focus}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{s.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages – card style consistent with ServicesPage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Packages & Pricing</h2>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Starter', 199, 25, ['1 video module', 'WebXR access', 'Basic analytics']],
              ['Growth', 399, 100, ['Any 2 modules', 'Headset mode', 'Custom quiz']],
              ['Impact', 699, 250, ['All 4 modules', 'KPI dashboard', 'Quarterly review']],
            ].map(([name, price, seats, features]) => (
              <div key={name as string} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{name as string}</h3>
                <p className="mt-1 text-gray-600">Up to {seats as number} seats</p>
                <p className="mt-4 text-3xl font-extrabold text-primary">${price as number}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700">
                  {(features as string[]).map(f => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Link href="/contact?ref=vr" className="btn-primary mt-6 inline-block text-center">
                  Start Consultation
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            *Annual billing saves 15 %. Cancel any time with 30 days notice.*
          </p>
        </div>
      </section>

      {/* Add‑on Consulting */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-10">Affordable Consulting Add‑Ons</h2>
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Fee</th>
                  <th className="px-4 py-3 font-semibold">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Goal‑Setting Workshop (2 hrs)', '$150', 'KPI map & content sheet'],
                  ['Scene Personalisation', '$200 / module', 'Branded start screen'],
                  ['Impact Report (after 3 mo)', '$250', 'PDF metrics & next steps'],
                ].map(([s, f, d]) => (
                  <tr key={s} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3">{s}</td>
                    <td className="px-4 py-3">{f}</td>
                    <td className="px-4 py-3">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Quote */}
      <section className="bg-[#E6F7FA] py-16">
        <blockquote className="mx-auto max-w-2xl text-center text-xl italic text-primary">
          “We replaced two days of on‑site orientation with a single 45‑minute VR session—saving $5,000 in flights and doubling volunteer confidence.”
        </blockquote>
        <p className="mt-4 text-center font-semibold text-primary-900">— HopeServe Manila, 2024 pilot</p>
