import { NextRequest, NextResponse } from 'next/server'

const WWW_HOST = 'www.getkuneo.com'
const ROOT_HOST = 'getkuneo.com'

export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const hostname = nextUrl.hostname

  if (hostname === ROOT_HOST) {
    const redirectUrl = new URL(nextUrl.href)
    redirectUrl.hostname = WWW_HOST
    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
