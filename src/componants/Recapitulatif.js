import React from "react";

const Recapitulatif = ({ items, total }) => {
  const cartItems = items.map((item) => {
    return (
      <div>
        {item.attributes.name} - {item.attributes.price}€
      </div>
    );
  });

  return (
    <div>
      {cartItems}
      <div className="App-cart-total">Soit un total de {total}€</div>
    </div>
  );
};

export default Recapitulatif;
