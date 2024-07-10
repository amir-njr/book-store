const sumPrudocts = (product) => {
  const itemsCounter = product.reduce((acc, cur) => acc + cur.qty, 0);
  const total = product.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return { itemsCounter, total };
};

const productQty = (state, id) => {
  const index = state.selectedItems.findIndex((i) => i._id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].qty;
  }
};

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export { sumPrudocts, productQty, sp };
