import { NextResponse } from "next/server";
import fallbackProfile from "@/data/leetcode/profile.json";


export async function GET() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://leetcode.com/u/Ujwal_Shettigar/",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              profile {
                ranking
                userAvatar
                realName
              }
              userCalendar {
                activeYears
                streak
                totalActiveDays
                submissionCalendar
              }
            }
          }
        `,
        variables: { username: "Ujwal_Shettigar" },
      }),
      signal: controller.signal,
      next: { revalidate: 21600 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      const user = json?.data?.matchedUser;
      if (user) {
        const calendar = JSON.parse(user.userCalendar.submissionCalendar || "{}");
        const stats = user.submitStats?.acSubmissionNum || [];

        return NextResponse.json(
          {
            username: user.username,
            realName: user.profile?.realName,
            ranking: user.profile?.ranking,
            avatar: user.profile?.userAvatar,
            stats: {
              totalSolved: stats.find((s: any) => s.difficulty === "All")?.count ?? 280,
              totalSubmissions: stats.find((s: any) => s.difficulty === "All")?.submissions ?? 1181,
              easy: stats.find((s: any) => s.difficulty === "Easy")?.count ?? 190,
              medium: stats.find((s: any) => s.difficulty === "Medium")?.count ?? 82,
              hard: stats.find((s: any) => s.difficulty === "Hard")?.count ?? 8,
            },
            calendar: {
              totalActiveDays: user.userCalendar?.totalActiveDays ?? 256,
              streak: user.userCalendar?.streak ?? 120,
              activeYears: user.userCalendar?.activeYears ?? [2025, 2026],
              submissionCalendar: calendar,
            },
            isLive: true,
            lastUpdated: new Date().toISOString(),
          },
          {
            headers: {
              "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
            },
          }
        );
      }
    }
  } catch (error) {
    console.warn("LeetCode live API unreachable, serving cached snapshot:", error);
  }

  // Fallback to verified local snapshot
  return NextResponse.json({
    ...fallbackProfile,
    isLive: false,
  });
}
