import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock next/link to render children directly in tests
vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}))
