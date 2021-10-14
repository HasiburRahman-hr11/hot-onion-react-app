import { useContext, useEffect, useState } from "react";
import {CartContext} from "../context/CartContext";
import {foods} from '../fakedata'

const useCartFoods = () => {

    const { carts } = useContext(CartContext);
    const [cartFoods, setCartFoods] = useState([])

    useEffect(() => {
        const getCartFoods = () => {
            const cartFoods = [];

            carts.forEach(item => {
                const cartProduct = foods.find(p => p._id === item._id)
                if (cartProduct) {
                    cartProduct.quantity = item.quantity;
                    cartFoods.push(cartProduct)
                }
            })
            setCartFoods(cartFoods);
        }
        getCartFoods();

    }, [carts]);

    return [cartFoods]
}

export default useCartFoods;