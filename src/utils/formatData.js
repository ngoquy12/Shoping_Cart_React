/**
 *  Hàm .....
 * @param {*} money
 * @returns
 */
export const formatMoney = (money) => {
  const moneyFomated = money.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return moneyFomated;
};
