"use client"
import React from "react";
import Image from "next/image";
import { Trash2, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OrderItem {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    isGift?: boolean;
    isSelected?: boolean; // Matches the highlighted container styling in the design
}

interface OrderReviewCardProps {
    items?: OrderItem[];
    onQuantityChange?: (id: string, newQty: number) => void;
    onRemoveItem?: (id: string) => void;
}

// Mock data matching image_46b161.png converted to BDT
const defaultItems: OrderItem[] = [
    {
        id: "1",
        name: "Gawa Ghee 1kg",
        image: "/placeholder.svg", // Replace with your actual image paths
        quantity: 4,
        price: 7200,
    },
    {
        id: "2",
        name: "Gawa Ghee 1kg",
        image: "/placeholder.svg", // Replace with your actual image paths
        quantity: 4,
        price: 7200,
    },
];

export default function OrderReviewCard({
    items = defaultItems,
    onQuantityChange,
    onRemoveItem,
}: OrderReviewCardProps) {

    const formatBDT = (amount: number) => {
        return new Intl.NumberFormat("en-BD", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount) + " ৳";
    };

    return (
        <Card className="w-full bg-card text-card-foreground border border-border shadow-sm">
            <CardContent>
                {/* Header Title Accent */}
                <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h2 className="text-xl font-bold tracking-tight">Order Review</h2>
                </div>

                {/* Product Items List */}
                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center justify-between rounded-xl transition-all ${item.isSelected
                                ? "border border-border bg-muted/40"
                                : "border border-transparent bg-transparent"
                                }`}
                        >
                            {/* Product Info & Thumbnail */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border bg-muted shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover p-1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-sm md:text-base tracking-tight">
                                            {item.name}
                                        </h3>
                                        {item.isGift && (
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary/15 font-bold text-[10px] tracking-wider px-2 py-0.5 rounded-full"
                                            >
                                                GIFT
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Quantity Actions */}
                                    {item.isGift ? (
                                        <div className="inline-flex items-center px-3 py-1 bg-muted/50 border border-border/60 text-muted-foreground font-medium text-xs rounded-lg">
                                            Qty: {item.quantity}
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center border border-border/80 bg-muted/40 rounded-lg p-0.5">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-7 w-7 rounded-md font-semibold text-muted-foreground hover:bg-background"
                                                onClick={() => onQuantityChange?.(item.id, Math.max(1, item.quantity - 1))}
                                            >
                                                -
                                            </Button>
                                            <span className="w-8 text-center text-sm font-semibold text-foreground">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-7 w-7 rounded-md font-semibold text-muted-foreground hover:bg-background"
                                                onClick={() => onQuantityChange?.(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Price & Primary Action Buttons */}
                            <div className="text-right space-y-3">
                                <p
                                    className={`font-bold text-base md:text-lg tracking-tight ${item.isGift ? "text-muted-foreground/50 line-through" : "text-foreground"
                                        }`}
                                    style={{ fontFeatureSettings: '"tnum"' }} // Ensures uniform numeric width tabular-nums
                                >
                                    {formatBDT(item.price)}
                                </p>

                                <div className="flex justify-end">
                                    {item.isGift ? (
                                        <div className="p-1.5 text-muted-foreground/40 border border-muted bg-muted/20 rounded-md">
                                            <Gift className="w-4 h-4" />
                                        </div>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => onRemoveItem?.(item.id)}
                                            className="h-8 w-8 text-destructive/70 hover:text-destructive hover:bg-destructive/10 rounded-md"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}