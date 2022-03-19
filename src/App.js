import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardhandler = () => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardhandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
