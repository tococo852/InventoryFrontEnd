import { Container, Box, Flex, Button, Text } from "@radix-ui/themes"
import { useNavigate } from "react-router"
import useCart from "../../App/context/cart/useCart"
import { useState } from "react"

const CartAddPopUp = ({ ProductInfo, setDisplay }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  return (
    <Box
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Popup Card */}
      <Box
        style={{
          backgroundColor: "white",
          width: "360px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <Flex direction="column" gap="4">
          {/* Product Info */}
          <Flex align="center" gap="3">
            <Box
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={ProductInfo.image_url}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Text weight="bold">{ProductInfo.name}</Text>
          </Flex>

          {/* Quantity Controls */}
          <Flex align="center" justify="center" gap="2">
            <Button
              variant="soft"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            >
              -
            </Button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              style={{
                width: "60px",
                textAlign: "center",
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <Button
              variant="soft"
              onClick={() => setQuantity(prev => prev + 1)}
            >
              +
            </Button>
          </Flex>

          {/* Action Buttons */}
          <Flex direction="column" gap="2">
            <Button
              onClick={() => {
                addToCart(ProductInfo, quantity)
                setDisplay(false)
              }}
            >
              Add and Continue Buying
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                addToCart(ProductInfo, quantity)
                navigate("/checkout")
              }}
            >
              Add and Go to Checkout
            </Button>

            <Button
              color="gray"
              variant="ghost"
              onClick={() => setDisplay(false)}
            >
              Close
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default CartAddPopUp
