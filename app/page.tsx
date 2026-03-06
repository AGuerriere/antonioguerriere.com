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
              based in Northern Ireland. His work is grounded in a deep belief
              that artificial intelligence, if developed and deployed with the
              right intent, has the potential to be one of the most
              transformative forces in human history — accelerating scientific
              discovery, expanding access to knowledge, and raising the quality
              of life for people everywhere.
            </p>
            <p>
              Through Mind Technica, Antonio designs and deploys intelligent
              systems — from machine learning pipelines to end-to-end automation
              — for organisations looking to lead in an AI-native world. He is
              equally focused on building the strategic partnerships and ventures
              needed to scale that mission beyond consulting, into products and
              platforms that create lasting, broad-based value.
            </p>
            <p>
              Beyond the commercial, Antonio is drawn to the larger questions.
              He is actively engaged with the challenges of AI safety,
              interpretability, and alignment — the foundational problems that
              will determine whether the technology fulfils its promise or falls
              short of it. He believes that getting AI right is not just a
              technical challenge, but a civilisational one, and that the
              entrepreneurs, researchers, and builders working at this frontier
              carry a genuine responsibility to ensure that what they create is
              beneficial not for the few, but for all.
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

          {/* ── Work ────────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="work-heading">
            <h2 id="work-heading" className={styles.sectionHeading}>
              Work
            </h2>
            <ul className={styles.entries}>
              <li className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryTitle}>Mind Technica</span>
                  <span className={styles.entryYear}>2024–present</span>
                </div>
                <p className={styles.entryMeta}>
                  Founder &amp; CEO &nbsp;·&nbsp; AI &amp; Automation Consultancy
                </p>
              </li>
            </ul>
          </section>

          {/* ── Academic ────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="academic-heading">
            <h2 id="academic-heading" className={styles.sectionHeading}>
              Academic
            </h2>
            <ul className={styles.entries}>
              <li className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryTitle}>
                    MSc Artificial Intelligence &amp; Data Science
                  </span>
                  <span className={styles.entryYear}>2025–2026</span>
                </div>
                <p className={styles.entryMeta}>
                  Queen&apos;s University Belfast
                </p>
                <p className={styles.entryDesc}>
                  Modules include statistical learning, NLP, and machine
                  learning engineering. Current group research project:
                  predictive modelling on urban mobility datasets (OLS
                  regression, hypothesis testing, diagnostic analysis). Expected
                  graduation: 2026.
                </p>
              </li>

              <li className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span className={styles.entryTitle}>
                    BSc&nbsp;(Hons) Computing &amp; IT — First-Class Honours
                  </span>
                  <span className={styles.entryYear}>Graduated 2024</span>
                </div>
                <p className={styles.entryMeta}>The Open University</p>
                <p className={styles.entryDesc}>
                  Foundations in software engineering, data structures,
                  algorithms, and human-computer interaction. Final
                  classification: First Class.
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
                <div className={styles.entryHeader}>
                  <span className={styles.entryTitle}>
                    collabnotes — Collaborative Annotation Tool
                  </span>
                  <span className={styles.entryYear}>2024</span>
                </div>
                <p className={styles.entryMeta}>
                  Presented at ICERI 2024 &nbsp;·&nbsp; Co-investigator
                </p>
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
