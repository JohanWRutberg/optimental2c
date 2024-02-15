export { default } from "next-auth/middleware";

export const config = {
  // Skyddade sidor
  matcher: ["/profile", "/contact", "/admin/:path*"],
};
