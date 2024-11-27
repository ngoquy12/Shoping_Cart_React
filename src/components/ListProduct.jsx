import React from "react";
import ProductCard from "./ProductCard";

export default function ListProduct() {
  return (
    <>
      <main className="container m-auto max-w-[1360px] px-[60px] pt-[24px]">
        <h3 className="text-center text-[32px] font-semibold">List Product</h3>
        {/* Danh sách sản phẩm */}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </main>
    </>
  );
}
