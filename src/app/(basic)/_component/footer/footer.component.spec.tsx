import { Footer } from '@/app/(basic)/_component/footer/footer'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Footerコンポーネントのテスト', () => {
  render(<Footer />)
  test('Footerの文字が含まれているDOMが存在するか確認', () => {
    const footer = screen.getByText('Footer')
    expect(footer).toBeInTheDocument()
  })
})
