import React, { useContext } from "react";
import { CartContext } from "../providers/GlobalState";
import { formatMoney } from "../utils/formatData";

export default function CartFooter() {
  const { carts } = useContext(CartContext);

  const cartTotal = carts.reduce(
    (prev, current) => prev + current.quantity * current.price,
    0
  );

  return (
    <>
      <footer className="border-t mt-3">
        <p className="mt-3">Tổng tiền: {formatMoney(cartTotal)}</p>
      </footer>
    </>
  );
}
