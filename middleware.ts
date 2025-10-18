import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("Middleware:", { path: req.nextUrl.pathname, token: !!req.nextauth.token });
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("Authorized check:", { hasToken: !!token, tokenId: token?.id });
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/expenses/:path*",
    "/categories/:path*",
  ],
};
