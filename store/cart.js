export const state = () => ({
  totalProducts: 0,
  totalPrice: 0,
  products: [],
});

export const mutations = {
  addProduct(state, payload) {
    state.products.push(payload);
    state.totalPrice += payload.price;
    state.totalProducts += 1;
  },
};
