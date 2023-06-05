import { Header } from '@/src/app/(basic)/_component/Header/Header'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

describe('Headerコンポーネントのテスト', () => {
  render(<Header />)
  test('リンクのhrefがトップページかどうか', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
