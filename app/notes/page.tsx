import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNotes } from '@/lib/notes'
import styles from './notes.module.css'

export const metadata: Metadata = {
  title: "Antonio's Notes — Antonio Guerriere",
  description:
    'Articles on AI, automation, machine learning, and building technology companies.',
  alternates: {
    canonical: 'https://antonioguerriere.com/notes',
  },
  openGraph: {
    title: "Antonio's Notes — Antonio Guerriere",
    description:
      'Articles on AI, automation, machine learning, and building technology companies.',
    type: 'website',
    url: 'https://antonioguerriere.com/notes',
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function NotesPage() {
  const notes = getAllNotes()

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Antonio Guerriere
        </Link>
        <h1 className={styles.title}>Antonio's Notes</h1>
        <p className={styles.subtitle}>
          Writing on AI, automation, and building technology companies.
        </p>
      </header>

      <main>
        <ul className={styles.list}>
          {notes.map((note) => (
            <li key={note.slug} className={styles.item}>
              <Link href={`/notes/${note.slug}`} className={styles.link}>
                <span className={styles.noteTitle}>{note.title}</span>
                <span className={styles.noteMeta}>
                  <span className={styles.noteDate}>
                    {formatDate(note.date)}
                  </span>
                </span>
              </Link>
              <p className={styles.noteDesc}>{note.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
