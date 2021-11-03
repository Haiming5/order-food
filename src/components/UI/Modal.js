import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return <div onClick={props.onCloseCart} className={classes.backdrop}></div>;
};

const Overlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	const modal = document.getElementById("portal");
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onCloseCart={props.onCloseCart} />,
				modal
			)}
			{ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modal)}
		</Fragment>
	);
};

export default Modal;
