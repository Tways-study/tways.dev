// ── Navigation ────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'About',     href: '#about',     num: '01' },
  { label: 'Education', href: '#education', num: '02' },
  { label: 'Skills',    href: '#skills',    num: '03' },
  { label: 'Work',      href: '#projects',  num: '04' },
  { label: 'Contact',   href: '#contact',   num: '05' },
] as const

// ── Hero stats ────────────────────────────────────────────────
export const HERO_STATS = [
  { num: '5+', label: 'Projects\nBuilt' },
  { num: '2+', label: 'Years\nCoding'  },
  { num: '4+', label: 'AI Tools\nIntegrated'  },
] as const

// ── Education & certificates timeline ────────────────────────
export type TimelineEntry = {
  kind:    'education' | 'certificate'
  title:   string
  org:     string
  start:   string
  end:     string
  detail?: string
  link?:   string
}

export const TIMELINE: TimelineEntry[] = [
  {
    kind:   'education',
    title:  'BS Information Technology',
    org:    'University of San Agustin',
    start:  '2021',
    end:    '2025',
    detail: 'Major in Web & Mobile Application Development',
    link:   '#',
  },
  {
    kind:  'certificate',
    title: 'Responsive Web Design',
    org:   'freeCodeCamp',
    start: '2023',
    end:   '2023',
    link:  'https://freecodecamp.org/certification/placeholder/responsive-web-design',
  },
  {
    kind:  'certificate',
    title: 'AWS Cloud Practitioner Essentials',
    org:   'Amazon Web Services (AWS Educate)',
    start: '2024',
    end:   '2024',
    link:  'https://aws.amazon.com/verification/placeholder',
  },
  {
    kind:  'certificate',
    title: 'Meta Front-End Developer',
    org:   'Meta (Coursera)',
    start: '2024',
    end:   '2025',
    link:  'https://coursera.org/verify/professional-cert/placeholder',
  },
]

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
    title: 'Handog-Aral',
    role:  'Personal Project',
    desc:  'AI-assisted literacy app for children with dyslexia, built with OCR scanning and Gemini AI.',
    tags:  ['JavaScript', 'Capacitor', 'Gemini AI'],
    link:  'https://github.com/Tways-study/Handog-Aral',
    year:  '2026',
    image: '/project-screenshots/HandogAral.png',
  },
  {
    title: 'BoardMate',
    role:  'Personal Project',
    desc:  'Boarding-house finder and review platform for university students in Antique.',
    tags:  ['TypeScript', 'Supabase', 'Next.js'],
    link:  'https://github.com/Tways-study/BoardMate',
    year:  '2026',
    image: '/project-screenshots/BoardMate.png',
  },
  {
    title: 'UniLend',
    role:  'Course Project',
    desc:  'University equipment management system for borrowing and tracking lab gear.',
    tags:  ['HTML/CSS/JS', 'Supabase', 'JavaScript'],
    link:  'https://github.com/Tways-study/UniLend',
    year:  '2026',
    image: '/project-screenshots/UniLend.png',
  },
  {
    title: 'KwartoKwarta',
    role:  'Personal Project',
    desc:  'Shared-expense ledger for boardmates with real-time sync and debt settlement.',
    tags:  ['Next.js', 'Firebase', 'TypeScript'],
    link:  'https://github.com/Tways-study/KwartoKwarta',
    year:  '2026',
    image: '/project-screenshots/KwartoKwarta.png',
  },
  {
    title: 'Pharmatrack',
    role:  'Client Project',
    desc:  'Attendance System for the Pharmacy Department in USA, Iloilo City',
    tags:  ['React', 'Supabase', 'TypeScript'],
    link:  '#',
    year:  '2025',
    image: '/project-screenshots/PharmaTrack.png',
  },
]
