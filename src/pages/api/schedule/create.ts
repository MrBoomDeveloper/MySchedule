import type { APIContext, AstroSharedContext } from "astro";

export function POST(context: APIContext) {
    return new Response(JSON.stringify({
        message: "Schedule creation isn't implemented yet!"
    }));
}