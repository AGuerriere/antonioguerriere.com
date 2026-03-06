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
    {
      '@type': 'CollegeOrUniversity',
      name: 'The Open University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: "Queen's University Belfast",
    },
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

          <hr className={styles.divider} />

          <section aria-labelledby="academic-heading">
            <h2 id="academic-heading" className={styles.sectionHeading}>
              Academic
            </h2>
            <div className={styles.prose}>
              <p>
                Antonio holds a <strong>First-Class Honours</strong> degree in
                Computing and IT from <strong>The Open University</strong> and
                is currently pursuing an{' '}
                <strong>
                  MSc in Artificial Intelligence and Data Science
                </strong>{' '}
                at <strong>Queen&apos;s University Belfast</strong>, where his
                research interests span neural network interpretability, applied
                NLP, and the strategic implications of large-scale AI systems.
                He is a co-investigator on research presented at{' '}
                <strong>ICERI 2024</strong>.
              </p>
            </div>
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
