import Image from 'next/image'
import AvatarModal from '@/components/AvatarModal'
import { getAllNotes } from '@/lib/notes'
import { getAllBooks } from '@/lib/books'
import styles from './page.module.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antonio Guerriere',
  jobTitle: 'Founder & Director',
  worksFor: { '@type': 'Organization', name: 'Mind Technica' },
  description:
    "Founder and Director of Mind Technica. AI and automation entrepreneur. MSc AI & Data Science candidate at Queen's University Belfast.",
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
  const notes = getAllNotes().slice(0, 3)
  const books = getAllBooks().slice(0, 3)
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
            <p className={styles.subtitle}>Founder &amp; Director, Mind Technica</p>
          </div>
        </header>

        <main>
          {/* ── Bio ─────────────────────────────────────────── */}
          <div className={styles.prose}>
            <p>
              Antonio Guerriere is the founder and director of{' '}
              <strong>Mind Technica</strong>, an AI and automation consultancy based
              in Northern Ireland that helps organisations design and deploy practical
              artificial intelligence systems.
            </p>

            <p>
              Through Mind Technica, Antonio works on machine learning systems,
              data pipelines, and end-to-end automation for organisations looking
              to operate effectively in an increasingly AI-driven world. He is also
              focused on building partnerships and ventures that can scale this work
              beyond consulting into products and platforms.
            </p>

            <p>
              Antonio holds a First-Class Honours degree in Computing and IT
              from The Open University (UK) and is currently pursuing
              an MSc in Data Science and Artificial Intelligence at Queen’s
              University Belfast. His interests include artificial intelligence
              safety, interpretability, and alignment, and the broader societal
              impact of advanced AI systems.
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
                <li key={note.slug} className={styles.notesItem}>
                  <a href={`/notes/${note.slug}`} className={styles.notesLink}>
                    {note.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/notes" className={styles.seeMore}>
              All notes <span aria-hidden="true">→</span>
            </a>
          </section>

          {/* ── Books ───────────────────────────────────────── */}
          <section className={styles.section} aria-labelledby="books-heading">
            <h2 id="books-heading" className={styles.sectionHeading}>
              <a href="/books" className={styles.sectionHeadingLink}>
                Book Notes
              </a>
            </h2>
            <ul className={styles.booksList}>
              {books.map((book) => (
                <li key={book.slug} className={styles.booksItem}>
                  <a href={`/books/${book.slug}`} className={styles.booksLink}>
                    {book.coverImage && (
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        width={32}
                        height={45}
                        className={styles.bookCover}
                      />
                    )}
                    <span>{book.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/books" className={styles.seeMore}>
              All books <span aria-hidden="true">→</span>
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
                  Founder &amp; Director &nbsp;·&nbsp; AI &amp; Automation Consultancy
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
