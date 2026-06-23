
import { Checkbox } from '../ui/checkbox'
import { categoryType } from '@/types/category'
import { Field, FieldLabel } from '../ui/field';
import { useState } from 'react';

interface Props extends categoryType {
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
