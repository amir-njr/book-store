const shourter = (title) => {
  const newTitle = title.split(" ");
  return `${newTitle[0]} ${newTitle[1]} ${newTitle[2]}`;
};

const sumPrudocts = (product) => {
  const itemsCounter = product.reduce((acc, cur) => acc + cur.qty, 0);
  const total = product
    .reduce((acc, cur) => acc + cur.price.split("$")[1] * cur.qty, 0)
    .toFixed(2);

  return { itemsCounter, total };
};

const productQty = (state, id) => {
  const index = state.selectedItems.findIndex((i) => i.isbn13 === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].qty;
  }
};


export { shourter, sumPrudocts, productQty };
