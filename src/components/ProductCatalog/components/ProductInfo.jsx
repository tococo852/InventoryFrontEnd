import { useParams } from "react-router";
import catalog from "../assets/catalog.json";
import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";
import { useNavigate } from "react-router";

import CartAddPopUp from "../../CartAddPopUp/CartAddPopUP";
import { useState } from "react";
const ProductInfo = () => {
  const navigate=useNavigate()
  const { productId } = useParams();
  const product = catalog.inventory.find(
    item => item.ID === Number(productId)
  );
  
  const [displayCartPopUp,setDisplayCartPopUp] = useState()

  return (
    <Container size="3" style={{ marginTop: "3rem"}}>
      <Flex justify="start">
    <Button onClick={() => navigate(-1)}>
      Back
    </Button>
  </Flex>
      <Card size="5" style={{height:"55vh"}}>
        
        <Flex gap="6" align="start">
          
          {/* Image */}
          <Box style={{ flex: "1" }}>
            <img
              src={product.image_url}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "var(--radius-3)",
                objectFit: "cover"
              }}
            />
          </Box>

          {/* Info */}
          <Flex direction="column" gap="4" style={{ flex: "1.2" }}>
            <Heading size="6">{product.name}</Heading>

            <Text size="5" weight="bold">
              ${product.price}
            </Text>

            <Text color="gray">
              Contains: {product.quantity} {product.measure}
            </Text>
            <Box
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid var(--gray-a5)"
              }}
            >
              <Text>
                Description
              </Text>
            </Box>
            <Box
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid var(--gray-a5)"
              }}
            >
              <Button size="3" onClick={()=>setDisplayCartPopUp(true)}>
                Add to cart
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Card>
      {displayCartPopUp && <CartAddPopUp ProductInfo={product} setDisplay={setDisplayCartPopUp}/>}
    </Container>

  );
};

export default ProductInfo;
