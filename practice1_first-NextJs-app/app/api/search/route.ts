import { getReviews, searchBetweenReviews } from "@/lib/reviews";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (query) {
    const reviews = await getReviews();
    return NextResponse.json(searchBetweenReviews(reviews, query));
  }
}
