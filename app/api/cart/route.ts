import { verifyAuth } from "@/lib/auth/verifyAuth";
import { connectDb } from "@/lib/db/db"
import { response } from "@/lib/helperFunction";
import Cart from "@/schemas/cart.schema"


export async function GET(req: Request) {

    await connectDb();

    const { user } = await verifyAuth()

    const cart = await Cart.findOne({
        user: user.id,
    })
        .populate("items.product", "-_id title images")

    return Response.json({
        success: true,
        data: cart.items,
    });
}

