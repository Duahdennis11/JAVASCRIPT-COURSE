export const cart = [];

export function addToCart(productsId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productsId === cartItem.productsId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  }
  else {
    cart.push({
      productsId: productsId,
      quantity: 1
    });
  }
}