import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import catalog from '../assets/catalog.json'
import { Button, Grid } from "@radix-ui/themes"
import { useState } from "react"
import styled from "styled-components"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

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
    const itemsPerPage=12
    const [currentPage, setCurrentPage] = useState(1)
    const start= (currentPage-1) * itemsPerPage
    const end= start + itemsPerPage
    const filteredInventory=catalog.inventory.filter(
        (item)=>{
            let searchMatch=item.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
            let catMatch=categoryFilter.length>0?(matchCategories(item.category, categoryFilter)):(true)
            return (searchMatch && catMatch)
            
        })
    const pageItems=filteredInventory.slice(start,end)
    console.log(currentPage)
    return <Wrapper>
        <div>
            <input type="text" name="" id="" placeholder="Search Bar" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>

        </div>
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
            <ProductCard key= {item.ID} itemInfo={item}/>
        ))
            ):(
                <div>
                    no item found with those parameters
                </div>
            )
        }
       
        </Grid>

    <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
        <button onClick={()=>setCurrentPage((prev)=> Math.max(prev-1,1))}>
        &lt;
    </button>
    {Array.from({length :Math.ceil(filteredInventory.length/itemsPerPage)}).map((_,i)=>(
         <button style={{color:(i+1)==currentPage?"blue":"inherit"}}key={i} onClick={()=>{setCurrentPage(i+1)}}>{i+1}</button>
    ))}
    <button onClick={()=>setCurrentPage((prev)=> Math.min(prev+1, Math.ceil(filteredInventory.length/itemsPerPage)))}>
        &gt;
    </button>
    </div>
    </Wrapper>
}
// (page)=> setCurrentPage(page)

export default ProductDisplay