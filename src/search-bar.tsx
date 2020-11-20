import React from 'react';

type SearchBarProps = {

    filterText: string;
    filterInStockOnly: boolean;

    onFilterTextChange: (filterText: string) => void;
    onFilterInStockOnlyChange: (filterInStockOnly: boolean) => void;
};

export class SearchBar extends React.Component<SearchBarProps> {

    constructor(props: SearchBarProps) {

        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterInStockOnlyChange = this.handleFilterInStockOnlyChange.bind(this);
    }

    handleFilterTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onFilterTextChange(event.target.value);
    }

    handleFilterInStockOnlyChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onFilterInStockOnlyChange(event.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.filterInStockOnly}
                        onChange={this.handleFilterInStockOnlyChange}
                    />
                </p>
            </form>
        );
    }

}
