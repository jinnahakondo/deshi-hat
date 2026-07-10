import { Skeleton } from "@/components/ui/skeleton";

export function CartItemSkeleton() {
    return (
        <div className="flex items-center gap-4 rounded-xl border bg-card p-2 shadow-sm max-w-md w-full">
            {/* Product Image Wrapper Skeleton */}
            <Skeleton className="h-14 w-14 shrink-0 rounded-lg" />

            {/* Content Area Skeleton */}
            <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                {/* Title Skeleton */}
                <Skeleton className="h-4 w-3/4 rounded" />

                {/* Pricing and Quantity Control Skeleton */}
                <div className="flex items-center gap-2 mt-0.5">
                    {/* Quantity Counter Pill Skeleton */}
                    <Skeleton className="h-7 w-16 rounded-full" />

                    {/* Math Text Skeletons */}
                    <Skeleton className="h-3 w-3 rounded" /> {/* x symbol */}
                    <Skeleton className="h-4 w-12 rounded" /> {/* Unit price */}
                    <Skeleton className="h-3 w-2 rounded" /> {/* = symbol */}
                    <Skeleton className="h-4 w-14 rounded" /> {/* Total price */}
                </div>
            </div>

            {/* Remove Button Skeleton */}
            <Skeleton className="h-8 w-8 rounded-full shrink-0" />
        </div>
    );
}