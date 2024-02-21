import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// export function middleware(req: NextRequest) {
//   console.log("mw run");
//   console.log("request", req.nextUrl.pathname);

//   return NextResponse.next();
// }

export const config = {
  // Skyddade sidor
  matcher: ["/profile", "/contact", "/admin/:path*"],
};
