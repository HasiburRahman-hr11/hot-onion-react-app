import { useEffect, useState } from "react";
import { getOldCart } from "../utils/cartHandler";

const useCarts = () =>{
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const getCart = () => {
          const myCart = getOldCart();
          setCarts(myCart);
        }
        getCart();
      }, []);

      return [carts , setCarts]
}

export default useCarts;


