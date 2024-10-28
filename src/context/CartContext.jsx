import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartData, setCartData] = useState([]);

    const addToCart = (product) => {
        const productsArray = [...cartData]

        let foundIndex = productsArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            productsArray[foundIndex].quantity += 1;
            setCartData(productsArray);
        }

        else {
            setCartData([...productsArray, {...product, quantity: 1}]);
        }
    }

    const removeFromCart = (product) => {
        const productsArray = [...cartData];
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);
        productsArray.splice(foundIndex, 1);
        setCartData(productsArray);
    }
    
    const subtractCartItem = (product) => {
        const productsArray = [...cartData]

        let foundIndex = productsArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            productsArray[foundIndex].quantity -= 1;
            if (productsArray[foundIndex].quantity <= 0) {
                removeFromCart(product);
            }
            else {
                setCartData(productsArray);
            }
        }
    }

    const clearCart = () => {
        setCartData([]);
    }

    return (
        <CartContext.Provider value={{cartData, addToCart, removeFromCart, subtractCartItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}