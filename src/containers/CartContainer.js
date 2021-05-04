import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import{ actAddToCart, actChangeMessage, actRemoveProductInCart, actUpdateProductInCart } from './../actions/index'

class CartContainer extends Component {
	render() {
		var { cart } = this.props;
		return (
			<div>
				<Cart>
					{this.showCartItem(cart)}
					{this.showToTalAmount(cart)}
				</Cart>
			</div>
		);
	}

	showCartItem = (cart) => {
		var result = Message.MSG_CART_EMPTY;
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return (
					<CartItem
						key={index}
						item={item}
						index={index}
						onDeleteProductInCart={this.props.onDeleteProductInCart }
						onChangeMessage={ this.props.onChangeMessage }
						onUpdateProductInCart={ this.props.onUpdateProductInCart }
					/>
				)
			})
		}
		return result;
	}

	showToTalAmount = (cart) => {
		var result = '';
		if (cart.length > 0) {
			result = <CartResult cart={cart} />;
			
		}
		return result;
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.string.isRequired,
			rating: PropTypes.string.isRequired
		}).isRequired
		, quantity: PropTypes.number.isRequired
	})
	).isRequired // isRequired là bắt buộc phải có
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteProductInCart: (product) => {
			dispatch(actRemoveProductInCart(product));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		},
		onUpdateProductInCart: (product, quantity) => {
			dispatch(actUpdateProductInCart(product, quantity));
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
