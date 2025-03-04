import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.url;
  if (url.includes("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
