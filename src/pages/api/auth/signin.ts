import type { AstroSharedContext } from "astro";

export async function POST(context: AstroSharedContext) {
    const form = await context.request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    context.cookies.set("auth", username, { path: "/" });
    return context.redirect("/dashboard");
}