import type { AstroSharedContext } from "astro";

export function POST({ params, request }: AstroSharedContext) {
    return new Response(JSON.stringify({
        message: "Schedule creation isn't implemented yet!"
    }));
}