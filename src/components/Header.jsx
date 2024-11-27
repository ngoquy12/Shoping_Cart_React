import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ListCart from "./ListCart";

export default function Header() {
  const [isShowCart, setIsShowCart] = useState(false);

  //   Ẩn hiện component ListCart
  const handleToggle = () => {
    setIsShowCart(!isShowCart);
  };
  return (
    <>
      <header className="sticky z-50 top-0 w-full h-[64px] bg-orange-600 flex justify-between items-center text-white px-6">
        <ul className="flex items-center gap-5">
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
        </ul>
        <div className="relative">
          <FaCartShopping
            onClick={handleToggle}
            size={24}
            className="cursor-pointer hover:text-gray-300 transition-all"
          />
          <div className="absolute -top-2 -right-2 bg-red-700 text-[12px] px-1 rounded-lg">
            10
          </div>

          {/* Component ListCart */}
          {isShowCart && <ListCart />}
        </div>
      </header>
    </>
  );
}
