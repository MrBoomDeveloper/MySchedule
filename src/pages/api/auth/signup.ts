import type { AstroSharedContext } from "astro";

export function GET({ params, request }: AstroSharedContext) {
    if(!import.meta.env.REGISTRATION_ENABLED) {
        return new Response(JSON.stringify({
            message: "Account registration isn't enabled on this instance!"
        }));
    }

    return new Response(JSON.stringify({
        message: "Account registration isn't implemented yet!"
    }));
}