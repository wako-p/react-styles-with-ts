import React from 'react';
import { Product } from './product';
import { ProductCategoryRow } from './product-category-row';
import { ProductRow } from './product-row';

type ProductTableProps = {
    products: Product[];
}

export const ProductTable: React.FC<ProductTableProps> = ({products}) => {

    let lastCategory = ``;
    const rows: JSX.Element[] = [];

    products.forEach((product) => {

        if(lastCategory !== product.category) {
            rows.push(
                <ProductCategoryRow
                    key={product.category}
                    category={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                key={product.name}
                product={product}
            />
        );

        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};