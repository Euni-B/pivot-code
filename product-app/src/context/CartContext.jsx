import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // ADD TO CART
    const addToCart = (product) => {
        setCart((prevCart) => {

            const existingItem = prevCart.find(
                (item) => item.id === product.id
            );

            // already exists
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            // add new item
            return [
                ...prevCart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    qty: 1,
                },
            ];
        });
    };

    // INCREASE QUANTITY
    const increaseQty = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    };

    // DECREASE QUANTITY
    const decreaseQty = (id) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    // REMOVE ITEM
    const removeItem = (id) => {
        setCart((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // TOTAL ITEM COUNT
    const cartCount = cart.reduce(
        (total, item) => total + item.qty,
        0
    );

    // TOTAL PRICE
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                increaseQty,
                decreaseQty,
                removeItem,
                cartCount,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}