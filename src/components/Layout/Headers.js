import React from "react";
import classes from "./Headers.module.css";
import foodTable from "../../assets/japanese.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Headers = (props) => {
	const cartButtonHandler = () => {
		props.clickCartButton();
	};
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
			</header>
			<div className={classes["main-image"]}>
				<img src={foodTable} alt="A table of food" />
			</div>
		</React.Fragment>
	);
};

export default Headers;
