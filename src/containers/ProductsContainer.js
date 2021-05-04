import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import{ actAddToCart, actChangeMessage } from './../actions/index'
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
	render() {
		var { products } = this.props;
		return (
			<Products>
				{ this.showProducts(products)}
			</Products>
		);
	}

	showProducts(products) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product 
							key={index} 
							product={product} 
							onAddToCart = { this.props.onAddToCart }
							onChangeMessage = { this.props.onChangeMessage }
						/>
			})
		}
		return result;
	}
}

ProductsContainer.propTypes = {
	product: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.string.isRequired,
			rating: PropTypes.string.isRequired
			
		})
	).isRequired,
	onChangeMessage: PropTypes.func.isRequired // isRequired là bắt buộc phải có
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(actAddToCart(product, 1));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
