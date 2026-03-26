import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllBookSlugs, getBookBySlug } from '@/lib/books'
import styles from './article.module.css'

export function generateStaticParams() {
  return getAllBookSlugs().map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getBookBySlug(slug)
    return {
      title: `${meta.title} by ${meta.author} — Antonio Guerriere`,
      description: meta.description,
      alternates: {
        canonical: `https://antonioguerriere.com/books/${slug}`,
      },
      openGraph: {
        title: `${meta.title} by ${meta.author}`,
        description: meta.description,
        type: 'article',
        publishedTime: meta.date,
        url: `https://antonioguerriere.com/books/${slug}`,
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

export default async function BookPage({ params }: Props) {
  const { slug } = await params
  let book
  try {
    book = getBookBySlug(slug)
  } catch {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: book.meta.title,
    description: book.meta.description,
    datePublished: book.meta.date,
    author: {
      '@type': 'Person',
      name: 'Antonio Guerriere',
      url: 'https://antonioguerriere.com',
    },
    itemReviewed: {
      '@type': 'Book',
      name: book.meta.title,
      author: {
        '@type': 'Person',
        name: book.meta.author,
      },
    },
    url: `https://antonioguerriere.com/books/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <Link href="/books" className={styles.back}>
            <span aria-hidden="true">←</span> All books
          </Link>
        </nav>

        <article>
          <header className={styles.articleHeader}>
            {book.meta.coverImage && (
              <div className={styles.coverWrap}>
                <Image
                  src={book.meta.coverImage}
                  alt={`${book.meta.title} cover`}
                  width={125}
                  height={187}
                  className={styles.cover}
                  priority
                />
              </div>
            )}
            <div className={styles.headerText}>
              <h1 className={styles.title}>{book.meta.title}</h1>
              <p className={styles.author}>{book.meta.author}</p>
              <time className={styles.date} dateTime={book.meta.date}>
                {formatDate(book.meta.date)}
              </time>
              {book.meta.rating != null && (
                <p className={styles.rating}>
                  <span className={styles.ratingLabel}>How strongly I recommend it:</span>
                  <span className={styles.ratingValue}>{book.meta.rating}/10</span>
                </p>
              )}
            </div>
          </header>

          <div className={styles.prose}>
            <MDXRemote source={book.content} />
          </div>
        </article>

        <footer className={styles.articleFooter}>
          <Link href="/books" className={styles.back}>
            <span aria-hidden="true">←</span> All books
          </Link>
        </footer>
      </div>
    </>
  )
}
