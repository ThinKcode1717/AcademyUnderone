/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PackageType = 'starter' | 'standard' | 'premium';

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  selectedPackage: PackageType;
  experienceLevel: 'beginner' | 'some-it' | 'basic-networking' | string;
  background: 'student' | 'professional' | 'self-taught' | 'career-changer' | 'other' | string;
  openClawExperience: string;
  motivation: string;
  linkedIn?: string;
  preferredSchedule: string[];
  submittedAt: string;
  bnspAddon?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  initials?: string;
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
