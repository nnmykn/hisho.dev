import { Header } from '@/src/app/(basic)/_component/Header/Header'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

describe('Headerコンポーネントのテスト', () => {
  render(<Header />)
  test('ロゴのリンクのhrefがトップページかどうか', () => {
    const link = screen.getByTestId('logoLink')
    expect(link).toHaveAttribute('href', '/')
  })
})
