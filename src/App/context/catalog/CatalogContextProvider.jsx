import {  useEffect, useState } from "react";
import CatalogContext from "./catalog.context";
import { catalogApi } from "../../../api/catalogApi";
import { measureApi } from "../../../api/measureApi";
import { itemsApi } from "../../../api/itemsApi";
import { categoriesApi } from "../../../api/categoriesApi";
const CatalogProvider=({children})=>{
    const [catalog,setCatalog] = useState({ inventory: [], categories: [] })
    const [update, setUpdate] =useState(0)
    const [items,setItems]=  useState([])
    const [categories,setCategories]= useState([])
    const [measures, setMeasures] = useState([])


    const triggerUpdate = () =>{
        setUpdate(prev=>prev+1)
    }
    const getCatalog = async ()=>{
        const data= await catalogApi.get()
        setCatalog(data)
    }

    
    const getItems =async ()=>{
        const data = await itemsApi.getAll()
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

    const fetchAll = async () => {
        getCatalog()
        getMeasures()
        getItems()
        getCategories()
    }

    useEffect(()=>{
        getCatalog()
        getMeasures()
        getItems()
        getCategories()
    },[update])


    return (
    <CatalogContext.Provider value={{catalog,measures,items,categories,triggerUpdate,fetchAll,addItem, updateItem}}>
        {children}
    </CatalogContext.Provider>
    )
}

export default CatalogProvider