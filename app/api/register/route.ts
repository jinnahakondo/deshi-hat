import { response } from "@/lib/helperFunction";
import { User } from "@/schemas/user.schema";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
    try {
        const payload = await req.json()
        const user = await User.create(payload)
        return response.success({
            message: "user created",
            data: user,
            status: 201,
        })
    } catch (error: any) {
        return response.error({
            message: "failed to create user",
            status: 500,
        })
    }
}