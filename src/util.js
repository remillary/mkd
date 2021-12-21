export const getTariffById = (id, tariffs) => {
  return tariffs.find(t => Number(t.id) === Number(id));
};

export const getTotalPrice = (cart, tariffs) => {
  let total = 0;
  Object.entries(cart).forEach(([id, count]) => {
    const price = getTariffById(id, tariffs).price;
    total += (price).toFixed(2) * count;
  });
  return total;
}
