import React from "react";
import { Product } from "./product";

type ProductRowProps = {
    product: Product;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => (
    <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
);
