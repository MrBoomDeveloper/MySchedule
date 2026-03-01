import type { AstroSharedContext } from "astro";

export async function POST(context: AstroSharedContext) {
    context.cookies.delete("auth", { path: "/" });
    return context.redirect("/");
}