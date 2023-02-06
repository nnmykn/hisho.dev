import '@testing-library/jest-dom'
/**
 *  Property 'toBeInTheDocument' does not exist on type 'Assertion '.のエラーを解消するために必要
 * @see https://zenn.dev/convcha/articles/1148fd4aa662fd
 */
import '@testing-library/jest-dom/extend-expect'
