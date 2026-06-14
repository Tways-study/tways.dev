// ── Navigation ────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'About',   href: '#about',    num: '01' },
  { label: 'Skills',  href: '#skills',   num: '02' },
  { label: 'Work',    href: '#projects', num: '03' },
  { label: 'Contact', href: '#contact',  num: '04' },
] as const

// ── Hero stats ────────────────────────────────────────────────
export const HERO_STATS = [
  { num: '5+', label: 'Projects\nShipped' },
  { num: '3',  label: 'Years\nBuilding'  },
  { num: '7+', label: 'Tech\nMastered'  },
] as const

// ── Marquee skill strip ───────────────────────────────────────
export const MARQUEE_ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Java', 'Python', 'Supabase', 'Capacitor', 'Figma', 'Vite',
] as const

// ── Skill groups ──────────────────────────────────────────────
export type SkillGroup = {
  group:  string
  items:  string[]
  active: boolean[]
}

export const SKILLS: SkillGroup[] = [
  {
    group:  'Frontend',
    items:  ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    active: [true, true, true, true],
  },
  {
    group:  'Backend & Data',
    items:  ['Supabase', 'SQL', 'Node.js'],
    active: [true, true, true, false],
  },
  {
    group:  'Mobile & Tools',
    items:  ['Capacitor', 'Android', 'Vite', 'Git'],
    active: [true, true, true, true],
  },
  {
    group:  'Languages',
    items:  ['JavaScript', 'Python', 'Java', 'C++'],
    active: [true, true, true, false],
  },
]

// ── Projects ──────────────────────────────────────────────────
export type Project = {
  num:   string
  title: string
  role:  string
  desc:  string
  tags:  string[]
  link:  string
  year:  string
  image: string
}

export const PROJECTS: Project[] = [
  {
    num:   '01',
    title: 'Handog-Aral',
    role:  'Full-Stack Developer',
    desc:  'An AI-assisted literacy tool for children in rural areas and children with Dyslexia. Built with OCR scanning, Gemini AI word analysis, and gamified vocabulary building, shipped to Android via Capacitor.',
    tags:  ['JavaScript', 'Capacitor', 'Gemini AI'],
    link:  'https://github.com/Tways-study/Handog-Aral',
    year:  '2026',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop',
  },
  {
    num:   '02',
    title: 'Pharmatrack',
    role:  'Full-Stack Developer',
    desc:  'Attendance System for the Pharmacy Department in USA, Iloilo City',
    tags:  ['React', 'Supabase', 'TypeScript'],
    link:  '#',
    year:  '2025',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop',
  },
  {
    num:   '03',
    title: 'UniLend',
    role:  'Full-Stack Developer',
    desc:  'A university equipment management system built as a course requirement. Allows students and admins to manage, borrow, and track equipment efficiently, backed by Supabase.',
    tags:  ['HTML/CSS/JS', 'Supabase', 'JavaScript'],
    link:  'https://github.com/Tways-study/UniLend',
    year:  '2026',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop',
  },
  {
    num:   '04',
    title: 'BoardMate',
    role:  'Full-Stack Developer',
    desc:  'A boarding-house finder and review platform for university students in Antique. Built with TypeScript and Supabase for real-time listings, reviews, and authenticated user profiles.',
    tags:  ['TypeScript', 'Supabase', 'Next.js'],
    link:  'https://github.com/Tways-study/BoardMate',
    year:  '2026',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format&fit=crop',
  },
  {
    num:   '05',
    title: 'KwartoKwarta',
    role:  'Full-Stack Developer',
    desc:  'A shared-expense ledger for boardmates built with Next.js, Tailwind v4, and Firebase. Features real-time Firestore sync, custom expense splits, and simplified debt settlement via the Admin SDK.',
    tags:  ['Next.js', 'Firebase', 'TypeScript'],
    link:  'https://github.com/Tways-study/KwartoKwarta',
    year:  '2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop',
  },
]
