import React, { useState } from "react";
import Header from "../components/Header";
import ListProduct from "../components/ListProduct";
import products from "../data.json";

const ACT_UP = "up";
const ACT_DOWN = "down";

// B1: Tạo ngữ cảnh
export const CartContext = React.createContext();

export default function GlobalState() {
  const [carts, setCarts] = useState(() => {
    const cartLocal = JSON.parse(localStorage.getItem("carts")) || [];

    return cartLocal;
  });

  //   Hàm lưu dữ liệu vào state và local
  const saveData = (key, value) => {
    setCarts(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    // B1: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const findProductById = carts.find((pro) => pro.id === product.id);

    if (findProductById) {
      // B1.1: Nếu có thì tiến hành tăng số lượng lên 1
      const updateProducts = carts.map((pro) => {
        // if (pro.id === product.id) {
        //   return { ...pro, quantity: pro.quantity + 1 };
        // }
        // return pro;

        return pro.id === product.id
          ? { ...pro, quantity: pro.quantity + 1 }
          : pro;
      });

      saveData("carts", updateProducts);
    } else {
      // B1.1: Nếu chưa thì thêm vào
      const newProducts = [...carts, { ...product, quantity: 1 }];

      saveData("carts", newProducts);
    }
  };

  //   Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveCart = (id) => {
    // Lọc ra các sản phẩm có id khác với id cần xóa
    const filterProducts = carts.filter((pro) => pro.id !== id);

    saveData("carts", filterProducts);
  };

  const handleUpdateQuantity = (type, id) => {
    if (type === ACT_UP) {
      const updateProducts = carts.map((pro) => {
        return pro.id === id
          ? {
              ...pro,
              quantity:
                pro.quantity + 1 > pro.stock ? pro.stock : pro.quantity + 1,
            }
          : pro;
      });

      saveData("carts", updateProducts);
    } else {
      const updateProducts = carts.map((pro) => {
        return pro.id === id
          ? {
              ...pro,
              quantity: pro.quantity - 1 < 1 ? 1 : pro.quantity - 1,
            }
          : pro;
      });

      saveData("carts", updateProducts);
    }
  };

  return (
    <>
      <CartContext.Provider
        value={{
          products,
          handleAddToCart,
          carts,
          handleRemoveCart,
          handleUpdateQuantity,
        }}
      >
        <Header />

        <ListProduct />
      </CartContext.Provider>
    </>
  );
}
