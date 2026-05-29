//import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import useCatalog from '../../../App/context/catalog/useCatalog'
import Paginator from "../../Paginator/Paginator"
import SearchBar from "../../SearchBar/SearchBar"
import { useState } from "react"
import styled from "styled-components"
import {
  Flex,
  TextField,
  IconButton,
  Button,
  Text,
  Grid
} from "@radix-ui/themes";

import {
  Search,
  ChevronLeft,
  ChevronRight,
} from "@mynaui/icons-react";
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 1rem;

`
const matchCategories=(arr1,arr2)=>{
    //arr1 item categories, arr2 filter categories
    let totalTruth=false
    arr1.map(item=>{
        totalTruth=arr2.includes(item) || totalTruth
    })
    return totalTruth
}

const ProductDisplay=({searchFilter, setSearchFilter,categoryFilter })=>{
    const { catalog, loading } = useCatalog()
    const itemsPerPage=12
    const [currentPage, setCurrentPage] = useState(1)
    const start= (currentPage-1) * itemsPerPage
    const end= start + itemsPerPage
    if (loading) return <p>loading</p>

    const filteredInventory=catalog.inventory.filter(
        (item)=>{
            let searchMatch=item.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
            let catMatch=categoryFilter.length>0?(matchCategories(item.category, categoryFilter)):(true)
            return (searchMatch && catMatch)
            
        })
    const pageItems=filteredInventory.slice(start,end)
    console.log(currentPage)
    return <Wrapper>

    <SearchBar setSearchFilter={setSearchFilter} searchFilter={searchFilter}/>

    <Grid gap="3" columns="repeat(4, max-content)" rows="repeat(3, max-content)"
    overflowY={'scroll'}
    style={{
        flex: "1 0 70%",
        justifyContent: "center",
        alignContent: "center",
        padding:"1rem"
    }}>
        {
            pageItems.length>0?(
                 pageItems.map(item=>(
            <ProductCard key= {item.id} itemInfo={item}/>
        ))
            ):(
                <div>
                    Cargando Productos
                </div>
            )
        }
       
        </Grid>

    <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} filteredInventory={filteredInventory}/>
    </Wrapper>
}
// (page)=> setCurrentPage(page)

export default ProductDisplay