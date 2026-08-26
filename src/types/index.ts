export interface Coordinator {
  id: string;
  name: string;
  role: string;
  photo: string;
  photoUrl?: string;
  linkedin: string;
  linkedinUrl?: string;
  row: 'top' | 'middle' | 'bottom';
  tier?: 1 | 2 | 3;
  bio?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  categoryName?: string;
  tagline?: string;
  description: string;
  icon: string;
  iconName?: string;
  deliverables: string[];
  bulletPoints?: string[];
}

export interface ClientProject {
  id: string;
  name: string;
  clientName?: string;
  year: number; // 2020 through 2026
  logo: string;
  logoUrl?: string;
  industry: string;
  domain?: string;
  brief: string;
  description?: string;
  impact: string;
  deliverables?: string[];
  flipsOnHover?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  name?: string;
  order: number; // 1 to 5
  date: string;
  seasonOrDate?: string;
  description: string;
  subtitle?: string;
  category?: 'National Competition' | 'Corporate Partnership' | 'Hackathon' | 'Product Sprint' | string;
  prizePool?: string;
  partners?: string[];
  status?: 'Upcoming' | 'Active' | 'Completed' | 'Annual' | string;
  bannerUrl?: string;
}

export interface ResourceItem {
  id: string;
  type: 'case-book' | 'primer';
  title: string;
  category: string;
  description: string;
  edition?: string;
  downloadUrl?: string;
  publishDate: string;
  releaseDate?: string;
  topics?: string[];
  fileSize?: string;
  isPlaceholder?: boolean;
}

export interface PartnerInquiry {
  fullName: string;
  name?: string;
  organization: string;
  email: string;
  phone: string;
  serviceInterest: string;
  service?: string;
  message: string;
}

export type ContactSubmission = PartnerInquiry;

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface AwardItem {
  title: string;
  competition: string;
  year: string;
  description?: string;
}
