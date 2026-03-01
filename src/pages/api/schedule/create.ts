import database from "@/database";
import { getUsernameByToken } from "@/utils";
import type { APIContext } from "astro";
import { v7 as uuidv7 } from "uuid";

export async function POST(context: APIContext) {
    const form = await context.request.formData();
    const name = form.get("name") as string;
    const isPublic = form.get("public") as string == "on" ? "true" : "false";

    if(!name) {
        return new Response(JSON.stringify({
            message: "required_fields_empty"
        }), {
            status: 422
        });
    }

    const user = await getUsernameByToken(context.cookies.get("token")?.value);

    if(user == null) {
        return new Response(JSON.stringify({
            message: "unauthorized"
        }), {
            status: 401
        });
    }

    const uuid = uuidv7();

    database.prepare('INSERT INTO schedules (id, owner, name, public) VALUES (?, ?, ?, ?)').run(uuid, user, name, isPublic);
    return context.redirect(`/schedule/${uuid}/manage`);
}