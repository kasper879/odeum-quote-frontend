import React, { Component } from 'react';
import { LinkWrapper, Link } from '../../Styles/dropdown';

class ProductDropdown extends Component {
    render() {
        return (
            <LinkWrapper onClick={this.props.setProduct}>
                <Link>
                    {this.props.name}
                </Link>
            </LinkWrapper>
        )
    }
}

export default ProductDropdown