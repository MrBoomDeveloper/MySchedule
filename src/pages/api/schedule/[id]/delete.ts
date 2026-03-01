import type { AstroSharedContext } from "astro";

export function DELETE({ params, request }: AstroSharedContext) {
	return new Response(JSON.stringify({
		deletedScheduleId: params.id
	}));
}