import React from "react";

// We have items and totalItem inside our cart contexts.
// We also have two functions, addItem: which add the item to our items,
// removeItem removes the item from items

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	// addItem: (item) => {},
	// removeItem: (id) => {},
});

export default CartContext;
