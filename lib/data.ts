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
}

export const PROJECTS: Project[] = [
  {
    num:   '01',
    title: 'Handog-Aral',
    role:  'Full-Stack Developer',
    desc:  'A mobile learning app for Filipino children built with OCR scanning, Gemini AI word analysis, and gamified vocabulary building. Shipped to Android via Capacitor.',
    tags:  ['React', 'Capacitor', 'Gemini AI'],
    link:  'https://github.com/Tways-study',
  },
  {
    num:   '02',
    title: 'Pharmatrack',
    role:  'Full-Stack Developer',
    desc:  'Attendance System for the Pharmacy Department in USA, Iloilo City',
    tags:  ['React', 'Supabase', 'TypeScript'],
    link:  'https://github.com/Tways-study',
  },
  {
    num:   '03',
    title: 'UniLend',
    role:  'Full-Stack Developer',
    desc:  'A university library lending platform with admin and student portals, real-time inventory tracking, and Supabase-powered authentication and database.',
    tags:  ['HTML/CSS/JS', 'Supabase', 'Auth'],
    link:  '#',
  },
  {
    num:   '04',
    title: 'Study Smart',
    role:  'Full-Stack Developer',
    desc:  'A student productivity tool built around OOP principles for managing study sessions, deadlines, and academic goals with a clean local-first architecture.',
    tags:  ['JavaScript', 'OOP', 'LocalStorage'],
    link:  '#',
  },
  {
    num:   '05',
    title: 'VibeShift',
    role:  'Frontend Developer',
    desc:  'An interactive mood-based web experience with dynamic theme shifting and ambient controls, built purely in vanilla JS with zero dependencies.',
    tags:  ['HTML/CSS', 'JavaScript', 'Vanilla'],
    link:  '#',
  },
  {
    num:   '06',
    title: 'SyllaLog',
    role:  'Full-Stack Developer',
    desc:  'A lightweight syllabus tracker for students to log course outlines, track coverage progress, and get visual completion feedback across subjects.',
    tags:  ['JavaScript', 'CRUD', 'LocalStorage'],
    link:  '#',
  },
]
