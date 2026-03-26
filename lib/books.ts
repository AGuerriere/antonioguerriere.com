import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BookMeta {
  title: string
  author: string
  description: string
  date: string
  coverImage: string
  rating: number
  slug: string
}

const BOOKS_DIR = path.join(process.cwd(), 'content/books')

export function getAllBooks(): BookMeta[] {
  const files = fs.readdirSync(BOOKS_DIR).filter((f) => f.endsWith('.mdx'))

  const books = files.map((file) => {
    const raw = fs.readFileSync(path.join(BOOKS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title,
      author: data.author,
      description: data.description,
      date: data.date,
      coverImage: data.coverImage,
      rating: data.rating,
      slug: file.replace(/\.mdx$/, ''),
    } as BookMeta
  })

  return books.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getBookBySlug(slug: string) {
  const filePath = path.join(BOOKS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: {
      title: data.title,
      author: data.author,
      description: data.description,
      date: data.date,
      coverImage: data.coverImage,
      rating: data.rating,
      slug,
    } as BookMeta,
    content,
  }
}

export function getAllBookSlugs(): string[] {
  return fs
    .readdirSync(BOOKS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
