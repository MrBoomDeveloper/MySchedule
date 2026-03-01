import type { AstroSharedContext } from "astro";

export function GET({ params, request }: AstroSharedContext) {
    return new Response(JSON.stringify({
        message: "Account authorization isn't implemented yet!"
    }));
}