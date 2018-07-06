const calculateTotal = (items) => {
  const total = items.reduce((acc, i) => acc + i.item_price * i.quantity, 0);
  return total.toFixed(2);
};

export default calculateTotal;