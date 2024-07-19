import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./functions/verify-token";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  const authenticated = token ? await verifyToken(token) : false;

  const isPrivatePath =
    path === "/payment" || path.startsWith("/account") || path === "/my-orders";

  const isAuthPath = path === "/signin" || path === "/signup";

  if (authenticated && isAuthPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!authenticated && isPrivatePath) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/product/:path*",
    "/search/:path*",
    "/category/:path*",
    "/payment",
    "/account/:path*",
    "/my-orders",
  ],
};
