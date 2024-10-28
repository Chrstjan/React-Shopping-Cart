import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {

  const [products, setProducts] = useState([]);

  const {cartData, addToCart} = useContext(CartContext);

  console.log("Cart data", cartData);
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
    
  }, [])

  console.log(products);
  return (
    <div>
      <h2>Products:</h2>
      {products?.products?.map((item) => {
        return (
            <figure key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>
                <p>{item.category}</p>
                <button onClick={() => addToCart(item)}>Add to cart</button>
            </figure>
        )
    })}</div>
  )
}