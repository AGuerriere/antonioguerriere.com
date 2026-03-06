import AvatarModal from '@/components/AvatarModal'
import styles from './page.module.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antonio Guerriere',
  description: 'Technologist & entrepreneur. Open University First-Class graduate.',
  url: 'https://antonioguerriere.com/',
  image: 'https://antonioguerriere.com/images/antonio.webp',
  sameAs: ['https://www.linkedin.com/in/antonioguerriere/'],
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
            <p className={styles.subtitle}>
              Technologist &amp; entrepreneur &bull; Queen&apos;s University Belfast — MSc
              Artificial Intelligence &amp; Data Science (2026) &bull; The Open University —
              BSc&nbsp;(Hons) Computing, First-Class Honours
            </p>
          </div>
        </header>

        <main>
          <p className={styles.bio}>
            I&apos;m an AI and automation-focused founder working at the intersection of intelligent
            systems, data analytics, and applied machine learning. I hold a{' '}
            <strong>First-Class Honours</strong> degree in Computing and IT from the{' '}
            <strong>Open University</strong> and am currently pursuing an MSc in Artificial
            Intelligence and Data Science at <strong>Queen&apos;s University Belfast</strong>.
            I&apos;m the founder of <strong>Mind Technica</strong>, where our current focus is
            designing and deploying cutting-edge AI solutions, while exploring strategic partnerships
            and new ventures.
          </p>

          <div className={styles.pillbar} aria-label="Focus areas">
            <span className={styles.pill}>
              <span className={styles.dot} aria-hidden="true" /> AI &amp; Data Analytics
            </span>
            <span className={styles.pill}>
              <span className={styles.dot} aria-hidden="true" /> Automation
            </span>
            <span className={styles.pill}>
              <span className={styles.dot} aria-hidden="true" /> Research
            </span>
            <span className={styles.pill}>
              <span className={styles.dot} aria-hidden="true" /> Strategy &amp; Ops
            </span>
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
              Company site
            </a>
          </div>

          <footer className={styles.footer}>
            Available for conversations about new ventures, acquisitions, and partnerships.
            <span className={styles.sep}>•</span>
            Based between the UK, Ireland and Italy.
          </footer>
        </main>
      </div>
    </>
  )
}
