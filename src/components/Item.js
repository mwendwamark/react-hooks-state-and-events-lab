import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);

  return (
    <li className={inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={inCart ? "add" : "remove"}
        onClick={() => {
          setInCart(!inCart);
        }}
      >
        {inCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
