import Hero                  from '@/components/Hero'
import About                 from '@/components/About'
import EducationCertificates from '@/components/EducationCertificates'
import Skills                from '@/components/Skills'
import Projects              from '@/components/Projects'
import Contact               from '@/components/Contact'
import Footer                from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <EducationCertificates />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
