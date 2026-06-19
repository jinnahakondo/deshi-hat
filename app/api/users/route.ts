import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import User from "@/schemas/user.schema";

export async function GET(req: Request) {
    try {
        await connectDb()
        const result = await User.find()
        return response.success({
            data: result,
            message: "Users fetched successfully",
        })
    } catch (error: any) {
        return response.error({
            message: 'Failed to fetch users',
            error: error.message
        })
    }
}