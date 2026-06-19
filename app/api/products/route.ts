import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Product from "@/schemas/product.schema";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams

        const search = searchParams.get('search');
        const category = searchParams.get('category')
        const maxPrice = searchParams.get("max_price")
        const minPrice = searchParams.get("min_price")

        const query: Record<string, unknown> = {}

        if (search) query.title = { $regex: search, $options: "i" }
        if (category) query.category = { $regex: category, $options: 'i' }

        if (minPrice || maxPrice) {
            query.price = {
                ...(minPrice && { $gte: Number(minPrice) }),
                ...(maxPrice && { $lte: Number(maxPrice) }),
            }
        }

        console.log(query);

        await connectDb()

        const products = await Product.find(query)

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

// export async function POST(req: NextRequest) {
//     try {
//         const product = await req.json()

//         await connectDb()

//         const res = await Product.insertOne(product)


//         return response.success({
//             data: res,
//             message: "product added successfully"
//         })

//     } catch (error: any) {

//         return response.error(
//             {
//                 message: "failed to create product",
//                 error: error.message
//             }
//         )
//     }
// }