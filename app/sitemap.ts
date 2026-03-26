import type { MetadataRoute } from 'next'
import { getAllNotes } from '@/lib/notes'
import { getAllBooks } from '@/lib/books'

export const dynamic = 'force-static'

const BASE_URL = 'https://antonioguerriere.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes()
  const books = getAllBooks()

  const noteEntries: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${BASE_URL}/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const bookEntries: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: new Date(book.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/books`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...noteEntries,
    ...bookEntries,
  ]
}
