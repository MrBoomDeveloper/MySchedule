import database from "@/database";
import type { APIContext } from "astro";
import bcrypt from "bcryptjs";

export async function POST(context: APIContext) {
    if(import.meta.env.REGISTRATION_ENABLED != "true") {
        return new Response(JSON.stringify({
            message: "registration_disabled"
        }), {
            status: 403
        });
    }

    const form = await context.request.formData();
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if(!username || !email || !password) {
        return new Response(JSON.stringify({
            message: "required_fields_empty"
        }), {
            status: 422
        });
    }
        
    const hashed = await bcrypt.hash(password, 10);
        
    try {
        database.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)').run(username, email, hashed);
        return context.redirect("/auth/signin");
    } catch {
        return new Response(JSON.stringify({
            message: "username_or_email_taken"
        }), {
            status: 409
        });
    }
}