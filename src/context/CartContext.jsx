import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartData, setCartData] = useState([]);

    const addToCart = (product) => {
        //Creates a clone of the cartData array to modify
        const productsArray = [...cartData]

        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            //If the product exist then i uses the index of the product to select the product and updates the quantity key value
            productsArray[foundIndex].quantity += 1;
            setCartData(productsArray);
        }

        else {
            //if the product does not exist then i creates a clone of the cart clone 
            //and then makes a clone of the product that gets pushed to the array and gives it the quantity key value
            setCartData([...productsArray, {...product, quantity: 1}]);
        }
    }

    const removeFromCart = (product) => {
        const productsArray = [...cartData];
        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);
        //Removes the product from the array with the index of the product
        productsArray.splice(foundIndex, 1);
        setCartData(productsArray);
    }
    
    const subtractCartItem = (product) => {
        const productsArray = [...cartData]

        //Checks if the id of the product that gets added to the cart exist if it does i returns the index in the array
        let foundIndex = productsArray.findIndex((item) => item.id === product.id);

        if (foundIndex !== -1) {
            //Uses the index of the product to subtract the quantity
            productsArray[foundIndex].quantity -= 1;
            //Checks if the quantity is equal or lower than 0 the i removes the product from the array
            if (productsArray[foundIndex].quantity <= 0) {
                removeFromCart(product);
            }
            else {
                //If the quantity is not qual or lower than 0 then it updates the array with the subtracted quantity
                setCartData(productsArray);
            }
        }
    }

    const clearCart = () => {
        //Removes everything from the cart
        setCartData([]);
    }

    return (
        <CartContext.Provider value={{cartData, addToCart, removeFromCart, subtractCartItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}