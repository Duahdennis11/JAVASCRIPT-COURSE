export let cart = [{
  productsId:
    'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 3,
}, {
  productsId:
    '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2,
}];

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

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartIte.productId != productId) {
      newCart.push(cartItem)
    }
  });

  cart = newCart;
}