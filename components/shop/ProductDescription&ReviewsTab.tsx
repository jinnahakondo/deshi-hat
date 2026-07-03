import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export default function ProductDescriptionReviewsTab({ description, productId }: { description: string, productId: string }) {
    return (
        <Tabs defaultValue='description'>
            <TabsList variant={"line"}>
                <TabsTrigger value='description'>Description</TabsTrigger>
                <TabsTrigger value='customer-reviews'>Customer Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value='description'>
                {description}
            </TabsContent>
            <TabsContent value='customer-reviews'>
                Reviews
            </TabsContent>
        </Tabs>
    )
}
