import AvatarModal from '@/components/AvatarModal'
import styles from './page.module.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antonio Guerriere',
  jobTitle: 'Founder & CEO',
  worksFor: { '@type': 'Organization', name: 'Mind Technica' },
  description:
    "Founder and CEO of Mind Technica. AI and automation entrepreneur. MSc AI & Data Science candidate at Queen's University Belfast.",
  url: 'https://antonioguerriere.com/',
  image: 'https://antonioguerriere.com/images/antonio.webp',
  sameAs: [
    'https://www.linkedin.com/in/antonioguerriere/',
    'https://mindtechnica.com',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'The Open University' },
    { '@type': 'CollegeOrUniversity', name: "Queen's University Belfast" },
  ],
}

// Replace hrefs with real URLs when articles are published
const notes = [
  { title: 'On Building AI-Native Organisations', href: '/notes/ai-native-organisations' },
  { title: 'Neural Network Interpretability: A Practitioner\'s Perspective', href: '/notes/nn-interpretability' },
  { title: 'The Strategic Case for Automation in SMEs', href: '/notes/automation-smes' },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <AvatarModal />
          <div>
            <h1>Antonio Guerriere</h1>
            <p className={styles.subtitle}>Founder &amp; CEO, Mind Technica</p>
          </div>
        </header>

        <main>
          {/* ── Bio ─────────────────────────────────────────── */}
          <div className={styles.prose}>
      <p>
        Antonio Guerriere is the founder and CEO of{' '}
        <strong>Mind Technica</strong>, an AI and automation consultancy
        based in Northern Ireland. His work is driven by the belief that
        artificial intelligence, if developed and deployed responsibly,
        has the potential to be one of the most transformative technologies
        of our time — accelerating scientific discovery, expanding access
        to knowledge, and improving quality of life for people around the world.
      </p>

      <p>
        Through Mind Technica, Antonio designs and deploys intelligent
        systems — from machine learning pipelines to end-to-end automation —
        for organisations looking to operate effectively in an increasingly
        AI-driven world. He is also focused on building the partnerships and
        ventures needed to scale this work beyond consulting, into products
        and platforms that create lasting value.
      </p>

      <p>
        Beyond the commercial side, Antonio is interested in the broader
        questions surrounding artificial intelligence. In particular 
        AI safety, interpretability, and alignment —
        areas that will play an important role in how the technology evolves.
        He believes that developing AI responsibly is not only a technical
        challenge, but also a societal one, and that the people building these
        systems have a responsibility to ensure they benefit society as a whole.
      </p>
          </div>

          <div className={styles.links}>
            <a
              className={styles.btn}
              href="https://www.linkedin.com/in/antonioguerriere/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={`${styles.btn} ${styles.secondary}`}
              href="https://mindtechnica.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mind Technica
            </a>
          </div>

          {/* ── Antonio's Notes ──────────────────────────────── */}
          <section className={styles.section} aria-labelledby="notes-heading">
            <h2 id="notes-heading" className={styles.sectionHeading}>
              <a href="/notes" className={styles.sectionHeadingLink}>
                Antonio&apos;s Notes
              </a>
            </h2>
            <ul className={styles.notesList}>
              {notes.map((note) => (
                <li key={note.href} className={styles.notesItem}>
                  <a href={note.href} className={styles.notesLink}>
                    {note.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/notes" className={styles.seeMore}>
              All notes <span aria-hidden="true">→</span>
            </a>
          </section>

          {/* ── Work ────────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="work-heading">
            <h2 id="work-heading" className={styles.sectionHeading}>
              Work
            </h2>
            <ul className={styles.entries}>
              <li className={styles.entry}>
                <p className={styles.entryTitle}>Mind Technica</p>
                <p className={styles.entryMeta}>
                  Founder &amp; CEO &nbsp;·&nbsp; AI &amp; Automation Consultancy
                </p>
              </li>
            </ul>
          </section>

          {/* ── Research ────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="research-heading">
            <h2 id="research-heading" className={styles.sectionHeading}>
              Research
            </h2>
            <ul className={styles.entries}>
              <li className={styles.entry}>
                <p className={styles.entryTitle}>
                  collabnotes — Collaborative Annotation Tool
                </p>
                <p className={styles.entryMeta}>
                  Presented at ICERI 2024 &nbsp;·&nbsp; Co-investigator
                </p>
              </li>
            </ul>
            <a
              href="https://scholar.google.com/citations?user=DgbhiS4AAAAJ&hl=en&scioq=antonio+guerriere"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seeMore}
            >
              Google Scholar <span aria-hidden="true">↗</span>
            </a>
          </section>

          {/* ── Academic ────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="academic-heading">
            <h2 id="academic-heading" className={styles.sectionHeading}>
              Academic
            </h2>
            <ul className={styles.entries}>
              <li className={styles.entry}>
                <p className={styles.entryTitle}>
                  MSc Artificial Intelligence &amp; Data Science
                </p>
                <p className={styles.entryMeta}>
                  Queen&apos;s University Belfast
                </p>
              </li>

              <li className={styles.entry}>
                <p className={styles.entryTitle}>
                  BSc&nbsp;(Hons) Computing &amp; IT — First-Class Honours
                </p>
                <p className={styles.entryMeta}>The Open University - United Kingdom</p>
              </li>
            </ul>
          </section>

          <footer className={styles.footer}>
            Available for conversations about new ventures, acquisitions, and
            partnerships.
            <span className={styles.sep}>•</span>
            Based between the UK, Ireland and Italy.
          </footer>
        </main>
      </div>
    </>
  )
}
