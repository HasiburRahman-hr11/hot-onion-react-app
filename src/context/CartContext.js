import { createContext } from 'react'
import useCarts from '../hooks/useCarts';

export const CartContext = createContext();



const CartContextProvider = ({ children }) => {
    const [carts, setCarts] = useCarts();
    return (
        <CartContext.Provider value={{ carts, setCarts }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;