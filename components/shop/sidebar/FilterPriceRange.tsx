import { Slider } from "@/components/ui/slider"
import { FaBangladeshiTakaSign } from "react-icons/fa6";

interface Props {
    priceRange: number[]
    setPriceRange: (value: number[]) => void
    onPriceFilter: () => void
}

export default function FilterPriceRange({
    priceRange,
    setPriceRange,
    onPriceFilter
}: Props
) {

    return (
        <div
            onPointerUp={onPriceFilter}
            className="pt-2 cursor-pointer">
            <Slider
                value={priceRange}
                min={0}
                max={2000}
                step={10}
                onValueChange={setPriceRange}
            />
            <div className="flex justify-between items-center text-sm font-medium text-foreground pt-1">
                <span className="flex items-center"><FaBangladeshiTakaSign size={14} />{priceRange[0]}</span>
                <span className="flex items-center"><FaBangladeshiTakaSign size={14} />{priceRange[1]}</span>
            </div>
        </div>
    )
}
