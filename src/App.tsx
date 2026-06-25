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
import AdminPanel from './components/AdminPanel';
import { PackageType, Registration } from './types';

const LOCAL_STORAGE_KEY = 'openclaw_academy_registrations';

const mockLeads: Registration[] = [
  {
    id: 'lead-1',
    fullName: 'Rizky Amalia',
    email: 'rizky.amalia@gmail.com',
    phone: '081298765432',
    selectedPackage: 'standard',
    experienceLevel: 'beginner',
    background: 'career-changer',
    openClawExperience: 'Heard about it, curious',
    motivation: 'Ingin belajar OpenClaw dari nol untuk memajukan karir IT saya.',
    preferredSchedule: ['malam'],
    submittedAt: '2026-06-23T14:30:00.000Z',
  },
  {
    id: 'lead-2',
    fullName: 'Dony Saputra',
    email: 'dony.saputra@outlook.com',
    phone: '085712345678',
    selectedPackage: 'premium',
    experienceLevel: 'Tried briefly',
    background: 'professional',
    openClawExperience: 'Tried briefly',
    motivation: 'Ingin mencoba lab sandbox premium OpenClaw untuk melatih tim di kantor.',
    preferredSchedule: ['weekend'],
    submittedAt: '2026-06-24T02:15:00.000Z',
  },
];

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('standard');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setRegistrations(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse registrations from localStorage', err);
      }
    } else {
      // Seed initial mock registrations for rich presentation
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockLeads));
      setRegistrations(mockLeads);
    }
  }, []);

  // Save registration helper
  const handleNewRegistration = (newReg: Registration) => {
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  // Delete individual lead
  const handleDeleteLead = (id: string) => {
    const updated = registrations.filter((r) => r.id !== id);
    setRegistrations(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  // Clear all database
  const handleClearAll = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh data pendaftar?')) {
      setRegistrations([]);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  // Seed data trigger
  const handleSeedMockLeads = () => {
    setRegistrations(mockLeads);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockLeads));
  };

  const handleScrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-navy text-theme-title selection:bg-brand-red selection:text-white flex flex-col justify-between">
      
      {/* Skip to content links for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-red text-white px-4 py-2 rounded-lg font-bold z-[100] transition">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        leadCount={registrations.length}
      />

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

      {/* Slide-out Administrative Drawer */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        registrations={registrations}
        onClearAll={handleClearAll}
        onDeleteLead={handleDeleteLead}
        onSeedMockLeads={handleSeedMockLeads}
      />

    </div>
  );
}
