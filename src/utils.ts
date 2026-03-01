import jwt from "jsonwebtoken";

export async function getUsernameByToken(token: string | undefined): Promise<string | null> {
    if(token == null) return null;
    
    try {
        return (jwt.verify(token, import.meta.env.JWT_SECRET) as { username: string }).username;
    } catch { 
        return null; 
    }
}