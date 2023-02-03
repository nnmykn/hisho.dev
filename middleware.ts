import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
}

/**
 * @see https://github.com/vercel/examples/blob/main/edge-middleware/basic-auth-password/middleware.ts
 */
export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue ?? '').split(':')

    if (
      user === process.env['BASIC_AUTH_USERNAME'] &&
      pwd === process.env['BASIC_AUTH_PASSWORD']
    ) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
