import React, {useState} from "react";
import ProductDB from './ProductDB';
import Count from './Count';

export default function Product() {
  const [products] = useState(ProductDB)
  const productItems = products.map(item => 
    (
      <div>
      <h3>{item.name}</h3>
      <p>
        {item.price.toLocaleString("en-US", {
            style: 'currency',
            currency: 'USD',
        })}
        - {item.description}
      </p>
      </div>
    )
  )

  return (
    <div>
      <Count />
      <hr/>
      {productItems}
    </div>
  )
}