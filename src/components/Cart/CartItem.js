import React from "react";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../context/cart-contexts";

const CartItem = (props) => {
	const price = `$${props.price}`;
	const cartContx = useContext(CartContext);

	return (
		<li className={classes.item}>
			<div className={classes["item-info"]}>
				<div className={classes["item-name"]}>{props.name}</div>
				<div className={classes.count}>
					<div className={classes["item-price"]}>{price}</div>
					<div className={classes["item-amount"]}>{`x${props.amount}`}</div>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onRemove}>+</button>
				<button onClick={props.onAdd}>-</button>
			</div>
		</li>
	);
};

export default CartItem;
