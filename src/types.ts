/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PackageType = 'starter' | 'professional' | 'elite';

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  selectedPackage: PackageType;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | string;
  motivation: string;
  linkedIn?: string;
  preferredSchedule: string[];
  submittedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WeeklyModule {
  week: string;
  title: string;
  description: string;
  details: string[];
  labName?: string;
}

export interface SkillBenefit {
  title: string;
  capability: string;
  industry: string;
  iconName: string;
}
