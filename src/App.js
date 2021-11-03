import React from "react";

import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./context/CartContextsProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<CartProvider>
			{cartIsShown && <Cart onCloseCart={hideCartHandler} />}
			<Headers onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
