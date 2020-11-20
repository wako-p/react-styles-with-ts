import React from 'react';
import { Product } from './product';
import { ProductTable } from './product-table';
import { SearchBar } from './search-bar';

type FilterableProductTableProps = {
    products: Product[];
};

type FilterableProductTableState = {
    filterText:        string;
    filterInStockOnly: boolean;
}

export class FilterableProductTable
    extends React.Component<FilterableProductTableProps, FilterableProductTableState> {

    constructor(props: FilterableProductTableProps) {

        super(props);

        this.state = {
            filterText: ``,
            filterInStockOnly: false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterInStockOnlyChange = this.handleFilterInStockOnlyChange.bind(this);
    }


    handleFilterTextChange(text: string) {
        this.setState({ filterText: text });
    }

    handleFilterInStockOnlyChange(checked: boolean) {
        this.setState({ filterInStockOnly: checked });
    }

    filterProducts() {

        return this.props.products.filter((product) => {

            if (this.state.filterInStockOnly) {
                return product.stocked &&
                      (product.name.indexOf(this.state.filterText) >= 0);
            } else {
                return product.name.indexOf(this.state.filterText) >= 0;
            }
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    filterInStockOnly={this.state.filterInStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onFilterInStockOnlyChange={this.handleFilterInStockOnlyChange}
                />
                <ProductTable
                    products={this.filterProducts()}
                />
            </div>
        );
    }
}
