import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/serverexp", request.url));
}
