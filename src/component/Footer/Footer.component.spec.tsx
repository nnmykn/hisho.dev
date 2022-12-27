import { Footer } from '@src/component/Footer/Footer'
import { render, screen } from '@testing-library/react'

describe('Footerコンポーネントのテスト', () => {
  render(<Footer />)
  test('Footerの文字が含まれているDOMが存在するか確認', () => {
    const header = screen.getByText('Footer')
    expect(header).toBeInTheDocument()
  })
})
