import { verifyAuth } from "@/lib/auth/verifyAuth";
import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import { NextRequest } from "next/server";
import { ItemType } from "../merge/route";
import Cart from "@/schemas/cart.schema";

export async function PATHC(req: NextRequest) {
    try {
        await connectDb();
        const { user } = await verifyAuth();
        const { product, quantity }: ItemType = await req.json();

        const result = Cart.findOneAndUpdate(
            {
                user: user.id.at,
                product,
            },
            { $set: { quantity } },
            { new: true }
        );

        return response.success({
            message: "updated cart item quantity",
            data: result,
        })

    } catch (error: any) {
        return response.error({
            message: "failed to update cart item quantity",
            error: error.message
        })
    }
}