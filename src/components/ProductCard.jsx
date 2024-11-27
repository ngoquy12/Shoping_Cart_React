import { Button } from "antd";
import React, { useContext } from "react";
import { formatMoney } from "../utils/formatData";
import { CartContext } from "../providers/GlobalState";

export default function ProductCard({ product }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <>
      <li className="border rounded-md shadow-sm min-w-[200px]">
        <div className="max-h-[200px] min-h-[200px] bg-[url('https://hoanghamobile.com/Uploads/2021/01/15/a2.png')] bg-no-repeat bg-contain">
          {/* <img
                className="w-full h-full object-cover"
                src="https://hoanghamobile.com/Uploads/2021/01/15/a2.png"
                alt=""
              /> */}
        </div>

        <div className="p-5 flex flex-col gap-3 items-center">
          <h3 className="font-semibold">{product.productName}</h3>
          <p>{formatMoney(product.price)}</p>
          <Button
            onClick={() => handleAddToCart(product)}
            type="primary"
            className="w-full h-9 z-30"
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </li>
    </>
  );
}
