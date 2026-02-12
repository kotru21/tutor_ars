import type { NextAuthConfig } from 'next-auth';

/**
 * Edge-safe auth configuration.
 *
 * This file is imported by proxy.ts (middleware) which runs in the edge runtime.
 * It MUST NOT import Node.js-only modules (crypto, fs, etc.) or heavy libraries.
 *
 * Provider configuration and full callbacks live in auth.ts instead.
 */
export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const isLessonsRoute = nextUrl.pathname.startsWith('/lessons');
      const isGradeKlassRoute = /^\/\d+-klass/.test(nextUrl.pathname);
      const isGradeRoute = nextUrl.pathname.startsWith('/grade/');
      const isOnProtectedRoute = isLessonsRoute || isGradeKlassRoute || isGradeRoute;

      if (isOnProtectedRoute) {
        return isLoggedIn;
      }

      return true;
    },
  },
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [],
} satisfies NextAuthConfig;
