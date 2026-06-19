import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Category from "@/schemas/category.schema";
import Product from "@/schemas/product.schema";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    try {
        await connectDb()

        const searchParams = req.nextUrl.searchParams

        const search = searchParams.get('search');
        const slug = searchParams.getAll('category')
        const maxPrice = searchParams.get("max_price")
        const minPrice = searchParams.get("min_price")

        const query: Record<string, unknown> = {}
        if (search) query.title = { $regex: search, $options: "i" }

        const min = minPrice ? Number(minPrice) : NaN;
        const max = maxPrice ? Number(maxPrice) : NaN;

        if (!isNaN(min) || !isNaN(max)) {
            query.price = {
                ...(!isNaN(min) && { $gte: min }),
                ...(!isNaN(max) && { $lte: max }),
            };
        }

        if (slug && slug.length > 0) {
            const category = await Category.find({ slug: { $in: slug } });
            if (category.length === 0) {
                return response.error({
                    message: "Category not found",
                    status: 404
                });
            }

            const categoryIds = category.map(cat => cat._id)

            query.category = { $in: categoryIds };
        }

        const products = await Product.find(query).populate('category')

        return response.success({
            data: products,
            message: products.length === 0 ? "Product not found" : "Product fetched successfully"
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

