import { Button, Image } from "antd";
import React from "react";
import { GoTrash } from "react-icons/go";

export default function CartItem() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://cdnv2.tgdd.vn/mwg-static/common/News/1569702/%E1%BB%8BPhone%2016%20Pro%20TCBC%201.jpg"
          />
          <p>Iphone 16 pro max</p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="small">-</Button>
          <span>10</span>
          <Button size="small">+</Button>
          <GoTrash size={20} />
        </div>
      </div>
    </>
  );
}
