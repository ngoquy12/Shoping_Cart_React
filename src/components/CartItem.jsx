import { Button, Image, Modal } from "antd";
import React, { useContext, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CartContext } from "../providers/GlobalState";

export default function CartItem({ cart }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [id, setId] = useState(null);
  const { handleRemoveCart, handleUpdateQuantity } = useContext(CartContext);

  const handleShowModal = (id) => {
    setIsShowModal(true);

    setId(id);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleConfirmDelete = () => {
    handleRemoveCart(id);

    handleCloseModal();
  };

  return (
    <>
      <Modal
        onCancel={handleCloseModal}
        onOk={handleConfirmDelete}
        title="Xác nhận"
        open={isShowModal}
        okText="Xóa"
        cancelText="Hủy"
      >
        Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng?
      </Modal>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src={cart?.image}
          />
          <p>{cart?.productName}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleUpdateQuantity("down", cart.id)}
            size="small"
          >
            -
          </Button>
          <span>{cart?.quantity}</span>
          <Button
            onClick={() => handleUpdateQuantity("up", cart.id)}
            size="small"
          >
            +
          </Button>
          <GoTrash onClick={() => handleShowModal(cart.id)} size={20} />
        </div>
      </div>
    </>
  );
}
