import { User } from "@/schemas/user.schema";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
    try {
        const payload = await req.json()
        const user = await User.create(payload)
        return NextResponse.json({
            data: user,
            message: "user created"
        })
    } catch (error) {
        return NextResponse.json({
            message: "failed to create user"
        })
    }
}