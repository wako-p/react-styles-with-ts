import React from "react";

type ProductCategoryRowProps = {
    category: string;
}

export const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({ category }) => (
    <tr>
        <th colSpan={2}>{category}</th>
    </tr>
);
