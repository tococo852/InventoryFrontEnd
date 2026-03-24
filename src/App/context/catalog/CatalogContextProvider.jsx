import {  useEffect, useState } from "react";
import CatalogContext from "./catalog.context";
import { catalogApi } from "../../../api/catalogApi";
import { measureApi } from "../../../api/measureApi";
import { itemsApi } from "../../../api/itemsApi";
import { categoriesApi } from "../../../api/categoriesApi";
const CatalogProvider=({children})=>{
    const [catalog,setCatalog] = useState({ inventory: [], categories: [] })
    const [items,setItems]=  useState([])
    const [categories,setCategories]= useState([])
    const [measures, setMeasures] = useState([])
    
    const getCatalog = async ()=>{
        const data= await catalogApi.getCatalog()
        setCatalog(data)
    }

    
    const getItems =async ()=>{
        const data = await itemsApi.getItems()
        setItems(data)
    }

    const addItem =async (item)=>{
        const response= await itemsApi.add(item)
        getItems()
        console.log(response)

    }

    const deleteItem=async ()=>{

    }

    const updateItem= async (id,item)=>{
        const response= await itemsApi.update(id,item)
        getItems()
        console.log(response)

    }


    const getCategories =async ()=>{
        const data = await categoriesApi.getCategories()
        setCategories(data)
    }

    const addCategory =async ()=>{

    }

    const deleteCategory=async ()=>{

    }

    const updateCategory= async ()=>{
        
    }

    const getMeasures =async ()=>{
        const data = await measureApi.getMeasures()
        setMeasures(data)
    }

    useEffect(()=>{
        getCatalog()
        getMeasures()
        getItems()
        getCategories()
    },[])


    return (
    <CatalogContext.Provider value={{catalog,measures,items,categories,addItem, updateItem}}>
        {children}
    </CatalogContext.Provider>
    )
}

export default CatalogProvider