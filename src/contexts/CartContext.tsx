import { useContext, createContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

type CartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    removeAll: () => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext);

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}: CartProviderProps){

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "cart",
        []
    );

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number){
        setCartItems(items => {
            if(items.find(item => item.id === id) == null)
                return [...items, {id, quantity: 1}]
            else 
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                })
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(items => {
            if(items.find(item => item.id === id)?.quantity === 1)
                return items.filter(item => item.id !== id)
            else 
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }
                })
        })
    }

    function removeFromCart(id: number) {
        setCartItems(items => {
            return items.filter(item => item.id !== id)
        })
    }

    function removeAll(){
        if(cartItems.length !== 0){
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <CartContext.Provider value={{
            getItemQuantity,
            cartQuantity,
            cartItems,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            removeAll,
        }}>
            {children}
        </CartContext.Provider>
    );
}