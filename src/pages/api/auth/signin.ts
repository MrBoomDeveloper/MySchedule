import database from "@/database";
import type { APIContext } from "astro";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(context: APIContext) {
    const form = await context.request.formData();
    const identifier = form.get("username") as string;
    const password = form.get("password") as string;

    if(!identifier || !password) {
        return new Response(JSON.stringify({
            message: "required_fields_empty"
        }), {
            status: 422
        });
    }
        
    const user = database.prepare('SELECT * FROM users WHERE email=? OR username=?').get(identifier, identifier) as any;
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return new Response(JSON.stringify({
            message: "invalid_credentials"
        }), {
            status: 401
        });
    }
    
    const token = jwt.sign({
        username: user.username 
    }, import.meta.env.JWT_SECRET, { 
        expiresIn: "24h"
    });

    context.cookies.set("token", token, { path: "/" });
    return context.redirect("/dashboard");
}