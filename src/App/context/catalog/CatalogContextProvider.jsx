import {  useEffect, useState } from "react";
import CatalogContext from "./catalog.context";
import { catalogApi } from "../../../api/catalogApi";
import { measureApi } from "../../../api/measureApi";


const CatalogProvider=({children})=>{
    const [catalog,setCatalog] = useState({ inventory: [], categories: [] })
    const [measures, setMeasures] = useState([])
    
    const getCatalog = async ()=>{
        const data= await catalogApi.getCatalog()
        setCatalog(data)
    }

    const addItem =async (item)=>{
        console.log(item)

    }

    const deleteItem=async ()=>{

    }

    const updateItem= async ()=>{

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
    },[])


    return (
    <CatalogContext.Provider value={{catalog,measures,addItem}}>
        {children}
    </CatalogContext.Provider>
    )
}

export default CatalogProvider