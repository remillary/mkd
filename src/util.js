export const getSessionById = (id, sessions) => {
  return sessions.find(t => Number(t.id) === Number(id));
};

export const getTotalPrice = (cart, sessions) => {
  let total = 0;
  Object.entries(cart).forEach(([id, count]) => {
    const price = getSessionById(id, sessions).price;
    total += (price).toFixed(2) * count;
  });
  return total;
}
