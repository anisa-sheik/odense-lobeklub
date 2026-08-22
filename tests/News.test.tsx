import { render, screen } from '@testing-library/react'
import { vi, describe, test, expect } from 'vitest'
import NewsIndex from '../app/news/page'
import NewsArticle from '../app/news/[slug]/page'

vi.mock('../lib/data', () => ({
  news: [
    { slug: 'a', title: 'Title A', date: '2026-01-01', excerpt: 'Ex A', content: 'Content A' },
  ],
  findNewsBySlug: (s: string) => ({ slug: 'a', title: 'Title A', date: '2026-01-01', excerpt: 'Ex A', content: 'Content A' }),
}))

describe('News pages', () => {
  test('news index renders list', () => {
    render(<NewsIndex />)
    expect(screen.getByText(/Title A/)).toBeInTheDocument()
  })

  test('news article renders content', () => {
    const params = { params: { slug: 'a' } }
    render(<NewsArticle {...params} /> as any)
    expect(screen.getByText(/Content A/)).toBeInTheDocument()
  })
})
