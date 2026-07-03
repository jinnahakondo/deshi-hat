import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { CategoryType } from "@/types/types";




interface Props extends CategoryType {
    isChecked: boolean
    onFilterChange: (slug: string) => void;
}

export default function FilterCategory({ slug, name, onFilterChange, isChecked }: Props) {

    return (

        <Field orientation="horizontal">
            <Checkbox id={slug} checked={isChecked} name={slug} onCheckedChange={() => onFilterChange(slug)} />
            <FieldLabel htmlFor={slug}>
                {name}
            </FieldLabel>
        </Field>
    )
}
