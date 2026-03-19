import { useContext } from "react";
import CatalogContext from "./catalog.context";

const useCatalog=()=>{
    const catalog= useContext(CatalogContext)
    if (!catalog) {
        throw new Error("useCart must be used inside CartContext");
        
        
    }
    return catalog
}

export default useCatalog