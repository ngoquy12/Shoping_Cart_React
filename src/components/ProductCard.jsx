import { Button } from "antd";
import React from "react";

export default function ProductCard() {
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
          <h3 className="font-semibold">Điện thoại Samsung Galaxy S21</h3>
          <p>20.000.000 đ</p>
          <Button type="primary" className="w-full h-9 z-30">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </li>
    </>
  );
}
