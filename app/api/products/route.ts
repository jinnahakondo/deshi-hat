import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Product from "@/schemas/product.schema";

export async function GET() {
    try {
        await connectDb()

        const products = await Product.find()

        if (products.length === 0) {
            return response.error({
                message: "Products not found",
                status: 404
            })
        }

        return response.success({
            data: products,
            message: "Product fetched successfully"
        })

    } catch (error: any) {
        return response.error(
            {
                message: "failed to fetch products",
                error: error.message,
            }
        )
    }
}