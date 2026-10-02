import useCatalog from "../../App/context/catalog/useCatalog";
import { Select, Switch, TextField, TextArea, Button, Card, Flex, Box, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { itemsApi } from "../../api/itemsApi";

const ItemDataForm = () => {
  const navigate = useNavigate()
  const {toggle, setToggle}= useState()
  const handleToggle =()=>{
    setToggle()
  }

  return (
    <Box p="6" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Button
      >
        Edit Family</Button> 

      
      <Button onToggle={false}
      >
        Edit variant</Button>

    </Box>
  )
}

export default ItemDataForm