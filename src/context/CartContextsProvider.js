import CartContext from "./cart-contexts";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
	// console.log("state: ", state);
	if (action.type === "ADD") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingItemIndex = state.items.findIndex((item) => {
			item.id === action.item.id;
		});

		const existingItem = state.items[existingItemIndex];
		let updatedItem;
		let updatedItems;
		if (existingItem) {
			updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = [...state.items];
			updatedItem = { ...action.item };
		}

		// console.log("updated total amount: ", updatedTotalAmount);
		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	// if (action.type === "REMOVE") {
	// 	const updatedItems = state.items.filter((id) => action.item.id != id);
	// 	const updatedTotalAmount =
	// 		state.totalAmount - action.item.price * action.item.amount;
	// }
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

	const addItem = (item) => {
		cartDispatch({ type: "ADD", item: item });
	};

	const removeItem = (id) => {
		cartDispatch({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItem,
		removeItem: removeItem,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
