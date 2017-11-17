import React, { Component } from 'react'
import { Input, ProductWrapper } from '../../Styles/createNewQuote';

class ProductsFields extends Component {
	render() {
		return (
			<div>
				<ProductWrapper>
					<Input placeholder="Begynd at skrive..." width="250px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" />
				</ProductWrapper>
			</div>
		);
	}
}
export default ProductsFields;