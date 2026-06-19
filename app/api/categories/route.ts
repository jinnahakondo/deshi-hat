import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Category from "@/schemas/category.schema";
import { NextRequest } from "next/server";

export async function GET() {
    try {

        await connectDb()

        const categories = await Category.find()

        if (categories.length === 0) {
            return response.error({
                message: "Categories not found",
                status: 404
            })
        }

        return response.success({
            data: categories,
            message: "Category fetched successfully"
        })
    } catch (error: any) {
        return response.error({
            message: "Failed to fetch category",
            error: error.message
        })
    }
}

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json()

        await connectDb()

        const result = await Category.create(payload)

        if (!result || !result._id) {
            return response.error({
                message: "failed to create category. No document ID was generated",
                status: 400
            })
        }

        return response.success({
            message: "category created successfully",
            data: result,
        })
    } catch (error: any) {
        return response.error({
            message: "failed to create category",
            error: error.message
        })
    }
}