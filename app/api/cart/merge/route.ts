import { verifyAuth } from "@/lib/auth/verifyAuth";
import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Cart from "@/schemas/cart.schema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDb();
        const { user } = await verifyAuth();

        const cartData = await req.json();

        const result = await Cart.findOneAndUpdate(
            { user: user.id },
            { items: cartData },
            {
                upsert: true,
                new: true
            }
        );

        return response.success({
            data: result,
            message: "cart data merged"
        })

    } catch (error: any) {
        return response.error({
            message: "failed to merge cart data",
            error: error.message
        })
    }
}