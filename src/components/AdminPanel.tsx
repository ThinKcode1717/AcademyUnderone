/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Trash2, Database, Users, Server, ShieldCheck, Mail, Phone, Calendar, Download } from 'lucide-react';
import { Registration } from '../types';
import { useApp } from '../context/AppContext';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  registrations: Registration[];
  onClearAll: () => void;
  onDeleteLead: (id: string) => void;
  onSeedMockLeads: () => void;
}

export default function AdminPanel({
  isOpen,
  onClose,
  registrations,
  onClearAll,
  onDeleteLead,
  onSeedMockLeads,
}: AdminPanelProps) {
  const { language } = useApp();

  if (!isOpen) return null;

  // Calculate statistics
  const totalLeads = registrations.length;
  const starterCount = registrations.filter((r) => r.selectedPackage === 'starter').length;
  const standardCount = registrations.filter((r) => r.selectedPackage === 'standard').length;
  const premiumCount = registrations.filter((r) => r.selectedPackage === 'premium').length;

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-all">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide out drawer panel */}
      <div className="relative w-full max-w-4xl h-full bg-cyber-navy border-l border-cyber-slate flex flex-col shadow-2xl z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 bg-cyber-charcoal border-b border-cyber-slate flex items-center justify-between">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 bg-accent-cyan/15 rounded-lg text-accent-cyan">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-theme-title text-lg leading-tight">
                {language === 'id' ? 'Panel Admin Leads' : 'Admin Leads Panel'}
              </h3>
              <span className="text-xs font-mono text-cyber-text-muted">OPENCLAW ACADEMY DATABASE</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cyber-navy border border-cyber-slate/80 text-cyber-text-sec hover:text-white hover:bg-cyber-slate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Container */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Quick Statistics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-cyber-charcoal border border-cyber-slate p-4 rounded-xl">
              <span className="block text-[10px] font-mono text-cyber-text-muted uppercase">
                {language === 'id' ? 'TOTAL PENDAFTAR' : 'TOTAL LEADS'}
              </span>
              <span className="text-2xl font-black text-theme-title block mt-1">{totalLeads}</span>
            </div>
            <div className="bg-cyber-charcoal border border-cyber-slate p-4 rounded-xl">
              <span className="block text-[10px] font-mono text-cyber-text-muted uppercase">STARTER</span>
              <span className="text-2xl font-black text-accent-cyan block mt-1">{starterCount}</span>
            </div>
            <div className="bg-cyber-charcoal border border-cyber-slate p-4 rounded-xl">
              <span className="block text-[10px] font-mono text-cyber-text-muted uppercase">STANDARD</span>
              <span className="text-2xl font-black text-brand-red block mt-1">{standardCount}</span>
            </div>
            <div className="bg-cyber-charcoal border border-cyber-slate p-4 rounded-xl">
              <span className="block text-[10px] font-mono text-cyber-text-muted uppercase">PREMIUM</span>
              <span className="text-2xl font-black text-accent-gold block mt-1">{premiumCount}</span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap gap-3 items-center justify-between py-2 border-b border-cyber-slate/30">
            <span className="text-xs font-mono text-cyber-text-sec uppercase">
              {language === 'id' ? 'Daftar Formulir Masuk' : 'Submitted Registration Forms'}
            </span>
            <div className="flex space-x-2">
              {totalLeads === 0 && (
                <button
                  onClick={onSeedMockLeads}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-brand-red/10 border border-brand-red/30 rounded-lg text-brand-red-light hover:bg-brand-red/20 transition-all cursor-pointer"
                >
                  {language === 'id' ? 'Isi Data Simulasi Demo' : 'Seed Demo Leads'}
                </button>
              )}
              {totalLeads > 0 && (
                <button
                  onClick={onClearAll}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-brand-red/10 border border-brand-red/20 rounded-lg text-brand-red hover:bg-brand-red/20 transition-all flex items-center space-x-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Hapus Semua' : 'Clear All'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Registrations List table/card */}
          {registrations.length > 0 ? (
            <div className="space-y-4">
              {registrations.map((lead) => (
                <div
                  key={lead.id}
                  className="p-5 rounded-xl bg-cyber-charcoal border border-cyber-slate/60 hover:border-cyber-slate relative space-y-4 transition"
                >
                  {/* Card Title info */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h4 className="font-bold text-theme-title text-base sm:text-lg leading-snug">{lead.fullName}</h4>
                      <span className="text-[11px] font-mono text-cyber-text-muted">LEAD ID: {lead.id}</span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Package badge */}
                      <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase ${
                        lead.selectedPackage === 'starter'
                          ? 'bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan'
                          : lead.selectedPackage === 'standard'
                          ? 'bg-brand-red/10 border border-brand-red/20 text-brand-red'
                          : 'bg-accent-gold/10 border border-accent-gold/20 text-accent-gold'
                      }`}>
                        {lead.selectedPackage}
                      </span>

                      {/* Exp level */}
                      <span className="px-2 py-0.5 rounded bg-cyber-navy text-[9px] font-mono text-cyber-text-sec border border-cyber-slate">
                        BG: {lead.experienceLevel}
                      </span>
                    </div>
                  </div>

                  {/* Core details table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-cyber-text-sec">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-cyber-text-muted" />
                      <span>{lead.email}</span>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyber-text-muted" />
                        <span>{lead.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyber-text-muted" />
                      <span>{language === 'id' ? 'Masuk:' : 'Registered:'} {formatDate(lead.submittedAt)}</span>
                    </div>
                    {lead.background && (
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-cyber-text-muted text-[10px] uppercase">{language === 'id' ? 'Latar:' : 'BG:'}</span>
                        <span className="capitalize">{lead.background}</span>
                      </div>
                    )}
                  </div>

                  {/* Motivation quote */}
                  {lead.motivation && (
                    <div className="p-3 bg-cyber-navy/40 rounded-lg border border-cyber-slate/50 text-xs text-cyber-text-sec">
                      <p className="leading-relaxed">
                        <strong className="text-theme-title font-semibold">{language === 'id' ? 'Motivasi:' : 'Motivation:'}</strong> "{lead.motivation}"
                      </p>
                    </div>
                  )}

                  {/* Schedule Preference info */}
                  {lead.preferredSchedule && lead.preferredSchedule.length > 0 && (
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-cyber-text-muted">
                      <span>{language === 'id' ? 'PREFERENSI JADWAL:' : 'PREFERRED SCHEDULES:'}</span>
                      <span className="text-theme-title uppercase font-bold">{lead.preferredSchedule.join(', ')}</span>
                    </div>
                  )}

                  {/* Individual Delete Button */}
                  <button
                    onClick={() => onDeleteLead(lead.id)}
                    className="absolute bottom-4 right-4 p-2 text-cyber-text-muted hover:text-brand-red rounded bg-cyber-navy border border-cyber-slate/60 hover:border-brand-red/40 transition-colors cursor-pointer"
                    title={language === 'id' ? 'Hapus Lead' : 'Delete Lead'}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-cyber-slate rounded-2xl space-y-4">
              <Users className="w-12 h-12 text-cyber-text-muted mx-auto" />
              <div className="space-y-1">
                <h4 className="font-bold text-theme-title">
                  {language === 'id' ? 'Database Pendaftar Kosong' : 'Lead Database Empty'}
                </h4>
                <p className="text-xs text-cyber-text-sec max-w-sm mx-auto leading-relaxed">
                  {language === 'id'
                    ? 'Belum ada calon mahasiswa yang mengisi pendaftaran. Gunakan formulir di landing page untuk menginput pendaftaran baru atau klik tombol di bawah untuk mengisi data simulasi demo.'
                    : 'No candidates have submitted registration forms yet. Submit a form on the landing page or click below to generate mock simulator leads.'}
                </p>
              </div>
              <button
                onClick={onSeedMockLeads}
                className="px-4 py-2 text-sm font-bold bg-brand-red text-white hover:bg-brand-red-dark rounded-xl transition cursor-pointer"
              >
                {language === 'id' ? 'Isi Data Simulasi Demo' : 'Generate Mock Leads'}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
