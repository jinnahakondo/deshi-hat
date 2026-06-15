import { response } from "@/lib/helperFunction";
import User from "@/schemas/user.schema";
import { NextRequest } from "next/server";

interface routeProps {
    params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, { params }: routeProps) {
    try {
        const { id } = await params

        const user = await User.findById(id)

        if (!user) {
            return response.error({
                message: "user not found",
                status: 404
            })
        }

        return response.success({
            data: user,
            message: "user fetched successfully"
        })

    } catch (error: any) {
        return response.error({
            message: 'failed to fetch user',
            error: error.message
        })
    }
}