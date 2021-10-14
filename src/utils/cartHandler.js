
export const getOldCart = () => {
    const oldCart = JSON.parse(localStorage.getItem('hot-onion')) || [];
    return oldCart;
}

export const setNewCartToLs = (product, quantity) => {
    let cartItems = [];
    const cartInfo = {
        _id:product._id,
        quantity : quantity,
    }


    const oldCart = getOldCart();
    if (oldCart?.length > 0) {
        oldCart.forEach(item => {
            if (item._id === product._id) {
                cartInfo.quantity = item.quantity + quantity;
                const newCartItems = oldCart.filter(item => item._id !== product._id);
                cartItems = [...newCartItems, cartInfo]
            } else {
                const newCartItems = oldCart.filter(item => item._id !== product._id);
                cartItems = [...newCartItems, cartInfo]
            }
        });

    } else {
        cartItems.push(cartInfo)
    }



    localStorage.setItem('hot-onion', JSON.stringify(cartItems));
}

export const clearCart = () =>{
    localStorage.removeItem('hot-onion');
}
