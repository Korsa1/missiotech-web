'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-12 bg-[#E6F7FA]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Data Dashboard</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Explore interactive visualizations of MissioTech's impact and performance metrics.
            These charts demonstrate how our technology solutions drive measurable results.
          </p>
        </div>
      </div>
      <Dashboard />
      <Footer />
    </main>
  );
}
