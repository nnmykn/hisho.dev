import { Footer } from '@src/component/Footer/Footer'
import { render, screen } from '@testing-library/react'

describe('Footerコンポーネントのテスト', () => {
  render(<Footer />)
  test('Footerの文字が含まれているDOMが存在するか確認', () => {
    const footer = screen.getByText('Footer')
    expect(footer).toBeInTheDocument()
  })
})
