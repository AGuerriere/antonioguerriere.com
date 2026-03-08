import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getNoteBySlug } from '@/lib/notes'
import styles from './article.module.css'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getNoteBySlug(slug)
    return {
      title: `${meta.title} — Antonio Guerriere`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: 'article',
        publishedTime: meta.date,
        url: `https://antonioguerriere.com/notes/${slug}`,
        authors: ['Antonio Guerriere'],
      },
    }
  } catch {
    return {}
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  let note
  try {
    note = getNoteBySlug(slug)
  } catch {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.meta.title,
    description: note.meta.description,
    datePublished: note.meta.date,
    author: {
      '@type': 'Person',
      name: 'Antonio Guerriere',
      url: 'https://antonioguerriere.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Antonio Guerriere',
    },
    url: `https://antonioguerriere.com/notes/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <Link href="/notes" className={styles.back}>
            <span aria-hidden="true">←</span> All notes
          </Link>
        </nav>

        <article>
          <header className={styles.articleHeader}>
            <h1 className={styles.title}>{note.meta.title}</h1>
            <time className={styles.date} dateTime={note.meta.date}>
              {formatDate(note.meta.date)}
            </time>
          </header>

          <div className={styles.prose}>
            <MDXRemote source={note.content} />
          </div>
        </article>

        <footer className={styles.articleFooter}>
          <Link href="/notes" className={styles.back}>
            <span aria-hidden="true">←</span> All notes
          </Link>
        </footer>
      </div>
    </>
  )
}
