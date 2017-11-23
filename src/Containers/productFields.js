import React, { Component } from 'react'
import { Input, ProductWrapper } from '../Styles/createNewQuote';
import { LinkPosition } from '../Styles/dropdown';
import { connect } from 'react-redux';
import { fetchProducts, saveProducts } from '../Actions/productAction';
import ProductDropdown from '../Components/CreateNewQuote/productDropdown';
//import onClickOutside from "react-onclickoutside";

class ProductsFields extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productValue: '',
			productVisibility: false,
			totalPrice: 0,
			amount: 0,
			discount:0
		}
	}

	componentDidMount(){
		this.props.fetchProducts();
	}

	setProduct = (e, product) => {
		console.log('container', product)
        this.props.saveProducts(product);
		this.setState({
			productValue: product.name,
			productVisibility: false,
			totalPrice: product.price, 
			amount: 1, 
			discount: 0
		})
	}

	handleChange = (evt) => {
		this.setState({productValue: evt.target.value})
        if (evt.target.value === '') {
            this.setState({productVisibility: false})
        } else {
			this.setState({productVisibility: true})
        }
	}
	
/* 	printProducts = () => {
        const { saveProduct } = this.props
        console.log('saveProduct', saveProduct.arr)
        saveProduct.arr.map((item, index) => {
            console.log('saveProduct from store', item)
            return item
        })
    } */

	renderProducts = () => {
		var productValue = this.state.productValue
		return this.props.product.map((item) => {
			return item.product.map((product, key) => {
				if (product.name.toLowerCase().includes(productValue.toLowerCase())) {
					return <ProductDropdown key={key} name={product.name} setProduct={(e) => this.setProduct(e, product)}/>
				} else {
					return null;
				}
			})
		})
	}

	render() {
		return (
			<div>
				<ProductWrapper>
					<LinkPosition>
						<Input
							placeholder="Begynd at skrive..."
							width="206px"
							marginRight="4px"
							marginTop="0px"
							marginBottom="0px"
							type="text"
							onChange={this.handleChange}
							value={this.state.productValue}
						/>
						{this.state.productVisibility ? this.renderProducts() : null}
					</LinkPosition>
					<Input value={this.state.amount} width="65px"  marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input value={this.state.discount} width="65px" marginRight="4px" marginTop="0px" marginBottom="0px" />
					<Input readOnly width="65px" marginTop="0px" marginBottom="0px" value={this.state.totalPrice} />
				</ProductWrapper>
			</div>
		);
	}
}

function mapStateToProps(state, prop){
	return{
		product: state.product,
		saveProduct: state.saveProduct
	}
}
//var commponnt = onClickOutside(ProductsFields);

export default connect(mapStateToProps, {fetchProducts, saveProducts})(ProductsFields)



    /*handleClickOutside = () => {
        this.setState({ productVisibility: false })
    }*/