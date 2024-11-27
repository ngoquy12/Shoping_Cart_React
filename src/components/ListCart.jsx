import React from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function ListCart() {
  return (
    <>
      <div className="z-50 absolute border w-[550px] max-h-[600px]  right-0 rounded-md bg-slate-800 p-5 shadow-md top-11">
        {/* Cart header start */}
        <CartHeader />
        {/* Cart header end */}

        {/* Danh sách sản phẩm trong giỏ hàng */}
        <div className="py-3 flex flex-col gap-6 min-h-[450px] max-h-[450px] overflow-auto mt-3">
          {/* <CartItem /> */}
          <p className="text-center text-[16px]">
            Chưa có sản phẩm trong giỏ hàng
          </p>
        </div>

        {/* Cart Footer */}
        <CartFooter />
      </div>
    </>
  );
}
