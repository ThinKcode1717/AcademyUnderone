/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import SkillsBenefits from './components/SkillsBenefits';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import SupportedInstitution from './components/SupportedInstitution';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { PackageType, Registration } from './types';

const LOCAL_STORAGE_KEY = 'openclaw_academy_registrations';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('standard');
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setRegistrations(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse registrations from localStorage', err);
      }
    }
  }, []);

  // Save registration helper
  const handleNewRegistration = (newReg: Registration) => {
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleScrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-navy text-theme-title selection:bg-brand-red selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Skip to content links for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-red text-white px-4 py-2 rounded-lg font-bold z-[100] transition">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onCtaclick={() => handleScrollToSection('#registrasi')}
          onSecondaryClick={() => handleScrollToSection('#kurikulum')}
        />

        {/* Value Proposition Cards */}
        <ValueProps />

        {/* Skills and Job Demands Section */}
        <SkillsBenefits />

        {/* Curriculum Preview timeline */}
        <Curriculum />

        {/* Pricing tiers and Early Bird Counter */}
        <Pricing onSelectPackage={(pkg) => setSelectedPackage(pkg)} />

        {/* Partnership FEDUCATION description and testominials */}
        <SupportedInstitution />

        {/* Interactive registration form */}
        <RegistrationForm
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          onNewRegistration={handleNewRegistration}
        />

        {/* FAQ list with query search bar */}
        <FAQ />

      </main>

      {/* Footer copyright and Newsletter */}
      <Footer />

    </div>
  );
}
