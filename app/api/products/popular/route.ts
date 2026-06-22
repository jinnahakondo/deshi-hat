import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Product from "@/schemas/product.schema";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectDb()

        const products = await Product.find()
            .sort({ averageRating: -1 })
            .limit(5)
            .lean()
            .exec()


        return response.success({
            data: products,
            message: "Popular product fetched successfully"
        })

    } catch (error: any) {
        return response.error(
            {
                message: "Failed to fetch popular products",
                error: error.message,
            }
        )
    }
}