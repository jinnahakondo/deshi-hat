import { connectDb } from "@/lib/db/db";
import { response } from "@/lib/helperFunction";
import Category from "@/schemas/category.schema";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
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
            message:"Failed to fetch category",
            error: error.message
        })
    }
}