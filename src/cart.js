import { useState, useEffect } from "react";
import ProductList from "./productlist";

function Cart({ cart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, product) => sum + product.price, 0);
    setTotal(newTotal)
  }, [cart]);
}

export default Cart;
