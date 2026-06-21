import { connectDb } from "@/lib/db/db"
import { response } from "@/lib/helperFunction"
import Cart from "@/schemas/cart.schema"
import { NextRequest } from "next/server"

export async function GET() {
    try {
        await connectDb()

        const result = await Cart.find().lean().exec()

        return response.success({
            data: result,
            message: "Cart fetched successfully"
        })

    } catch (error: any) {
        return response.error(
            {
                message: "Failed to fetch Cart",
                error: error.message,
            }
        )
    }
}


export async function POST(req: NextRequest) {
    try {
        await connectDb()

        const payload = await req.json()
        const result = await Cart.create(payload)

        return response.success({
            message: "Cart created successfully",
            data: result
        })

    } catch (error: any) {
        return response.error({
            message: "Failed to create Cart",
            error: error.message
        })
    }
}