import React from 'react';
import { FilterLabel, FilterInput } from './filter.styled';
import PropTypes from 'prop-types';

class Filter extends React.Component {
    render() {
        return (
            <FilterLabel htmlFor="filter">
                Find name
                <FilterInput
                    type="text"
                    name="filter"
                    onChange={this.props.onChange}
                    value={this.props.filterString}
                ></FilterInput>
            </FilterLabel>
        );
    }
}

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};
