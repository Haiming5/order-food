import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-contexts";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
		console.log("we are looking at: ", item);
		// console.log("curNum: ", curNum);
		// console.log("item amount: ", item.amount);

		return curNum + 2;
	}, 0);

	// const numberOfCartItems = cartCtx.totalAmount;
	return (
		<button onClick={props.onClick} className={classes.button}>
			<span className={classes["cart-icon"]}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
