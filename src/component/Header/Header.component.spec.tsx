import { Header } from '@src/component/Header/Header'
import { render, screen } from '@testing-library/react'

describe('Headerコンポーネントのテスト', () => {
  render(<Header />)
  test('リンクのhrefがトップページかどうか', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
