import {  useEffect, useState } from "react";
import CatalogContext from "./catalog.context";
import { catalogApi } from "../../../api/catalogApi";
import { measureApi } from "../../../api/measureApi";
import { itemsApi } from "../../../api/itemsApi";
import { categoriesApi } from "../../../api/categoriesApi";
import { itemsFamilyApi } from "../../../api/itemFamily";
import { variantApi } from "../../../api/variantApi";
import { variantGroupApi } from "../../../api/variantApi";
const CatalogProvider=({children})=>{
    const [update, setUpdate] =useState(0)
    const [items,setItems]=  useState([])
    const [categories,setCategories]= useState([])
    const [measures, setMeasures] = useState([])
    const [variants, setVariants]= useState([])


    const triggerUpdate = () =>{
        setUpdate(prev=>prev+1)
    }

    
    const getItems =async ()=>{
        const data = await itemsFamilyApi.getAll()
        setItems(data)
    }



    const addItem =async (item)=>{
        const response= await itemsApi.add(item)
        getItems()
        console.log(response)

    }


    const updateItem= async (id,item)=>{
        const response= await itemsApi.update(id,item)
        getItems()
        console.log(response)

    }


    const getCategories =async ()=>{
        const data = await categoriesApi.getAll()
        setCategories(data)
    }


    const getMeasures =async ()=>{
        const data = await measureApi.getAll()
        setMeasures(data)
    }
    const getVariantGroups =async ()=>{
        const data = await variantGroupApi.getAll()
        setVariants(data)
    }

    const fetchAll = async () => {
        getVariantGroups()
        getMeasures()
        getItems()
        getCategories()
    }

    useEffect(()=>{
        getVariantGroups()
        getMeasures()
        getItems()
        getCategories()
    },[update])


    return (
    <CatalogContext.Provider value={{measures,items,categories,variants,triggerUpdate,fetchAll,addItem, updateItem}}>
        {children}
    </CatalogContext.Provider>
    )
}

export default CatalogProvider