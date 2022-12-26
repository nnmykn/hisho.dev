import { Header } from '@src/component/Header/Header'
import { render, screen } from '@testing-library/react'

describe('Headerコンポーネントのテスト', () => {
  render(<Header />)
  test('Headerの文字が含まれているDOMが存在するか確認', () => {
    const header = screen.getByText('Header')
    expect(header).toBeInTheDocument()
  })
})
