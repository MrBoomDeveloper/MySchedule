import type { APIContext } from "astro";

export async function ALL(context: APIContext) {
    context.cookies.delete("token", { path: "/" });
    return context.redirect("/");
}