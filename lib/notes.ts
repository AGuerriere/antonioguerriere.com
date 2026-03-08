import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface NoteMeta {
  title: string
  description: string
  date: string
  slug: string
}

const NOTES_DIR = path.join(process.cwd(), 'content/notes')

export function getAllNotes(): NoteMeta[] {
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.mdx'))

  const notes = files.map((file) => {
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: file.replace(/\.mdx$/, ''),
    } as NoteMeta
  })

  return notes.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getNoteBySlug(slug: string) {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
    } as NoteMeta,
    content,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
