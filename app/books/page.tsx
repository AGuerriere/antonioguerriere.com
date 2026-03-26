import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBooks } from '@/lib/books'
import styles from './books.module.css'

export const metadata: Metadata = {
  title: "Books — Antonio Guerriere",
  description:
    'Book reviews on AI, technology, creativity, and building companies.',
  alternates: {
    canonical: 'https://antonioguerriere.com/books',
  },
  openGraph: {
    title: "Books — Antonio Guerriere",
    description:
      'Book reviews on AI, technology, creativity, and building companies.',
    type: 'website',
    url: 'https://antonioguerriere.com/books',
  },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function BooksPage() {
  const books = getAllBooks()

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Antonio Guerriere
        </Link>
        <h1 className={styles.title}>Books</h1>
        <p className={styles.subtitle}>
          Antonio's reviews and notes on books worth reading.
        </p>
      </header>

      <main>
        <ul className={styles.list}>
          {books.map((book) => (
            <li key={book.slug} className={styles.item}>
              <Link href={`/books/${book.slug}`} className={styles.itemLink}>
                {book.coverImage && (
                  <div className={styles.cover}>
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      width={124}
                      height={187}
                      className={styles.coverImg}
                    />
                  </div>
                )}
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <span className={styles.bookTitle}>{book.title}</span>
                    <span className={styles.bookAuthor}>{book.author}</span>
                    <span className={styles.bookDate}>{formatDate(book.date)}</span>
                    {book.rating != null && (
                      <span className={styles.bookRating}>
                        Recommend: {book.rating}/10
                      </span>
                    )}
                  </div>
                  <p className={styles.bookDesc}>{book.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
