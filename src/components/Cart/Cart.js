import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../context/cart-contexts";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const itemExist = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {};

	const cartItemAddHandler = (item) => {};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					onRemove={cartItemRemoveHandler}
					onAdd={cartItemAddHandler}
					amount={item.amount}
					key={item.id}
					name={item.name}
					price={item.price}
				></CartItem>
			))}
		</ul>
	);

	return (
		<Modal onCloseCart={props.onCloseCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{cartCtx.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onCloseCart} className={classes["close-button"]}>
					Close
				</button>
				{itemExist && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
