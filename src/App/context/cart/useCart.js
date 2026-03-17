import { useContext } from "react";
import CartContext from "./cart.context";

const useCart=()=>{
    const cart= useContext(CartContext)
    if (!cart) {
        throw new Error("useCart must be used inside CartContext");
        
        
    }
    return cart
}

export default useCart