import { Button, Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import FamilyEdit  from "./FamilyEdit";
import VariantEdit  from "./VariantEdit";
import { useParams } from "react-router";

const ItemDataForm = () => {
  const [toggle, setToggle] = useState("family");
  const {itemId}= useParams()


  return (
    <Box p="6" style={{ maxWidth: 600, margin: "0 auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Flex gap="3" mb="5">
        <Button
          variant={toggle === "family" ? "solid" : "outline"}
          onClick={() => setToggle("family")}
        >
          Edit Family
        </Button>

        {itemId &&(<Button
          variant={toggle === "variant" ? "solid" : "outline"}
          onClick={() => setToggle("variant")}
        >
          Edit Variant
        </Button>)}

        
        
      </Flex>

      {toggle === "family" ? <FamilyEdit /> : <VariantEdit />}
    </Box>
  );
};

export default ItemDataForm;
