import NextAuth from 'next-auth'
import authConfig from './auth.config'

NextAuth(authConfig)

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image |favicon.ico).*)'],
}