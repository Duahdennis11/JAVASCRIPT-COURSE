export const deliveryOption = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2', 
  deliveryDays: 3,
  priceCents: 499
  },{
  id: '3',
  deliveryDays: 5,
  priceCents: 654
  }
];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOption.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
  
  return deliveryOption || deliveryOption[0];
}