import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {

  const [products, setProducts] = useState([]);

  const {cartData} = useContext(CartContext);

  console.log(`Cart data: ${cartData}`);
  
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
    <div>{products?.products?.map((item) => {
        return (
            <figure key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.price} $</p>
                <p>{item.category}</p>
                <button>Add to cart</button>
            </figure>
        )
    })}</div>
  )
}