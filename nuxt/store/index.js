const state = () => ({
  cartItems: [],
});

const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    };
    return state.cartItems.push(newCartItem);
  },
};

export { state, mutations };
