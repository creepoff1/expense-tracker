import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { loginSchema } from "./zod-schemas";
import { logger } from "./logger";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        logger.debug("Authorize called with:", { email: credentials?.email });
        
        if (!credentials?.email || !credentials?.password) {
          logger.debug("Missing credentials");
          return null;
        }

        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) {
          logger.debug("Invalid credentials format:", parsed.error);
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email }
        });

        if (!user) {
          logger.debug("User not found:", parsed.data.email);
          return null;
        }

        logger.debug("User found, checking password...");
        const isPasswordValid = await bcrypt.compare(
          parsed.data.password,
          user.password
        );

        if (!isPasswordValid) {
          logger.debug("Invalid password for user:", parsed.data.email);
          return null;
        }

        logger.debug("Authentication successful for:", parsed.data.email);
        return {
          id: user.id,
          email: user.email,
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      logger.debug("JWT callback:", { tokenId: token.id, user: user?.email });
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      logger.debug("Session callback:", { sessionUser: session.user?.email, tokenId: token.id });
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
};
