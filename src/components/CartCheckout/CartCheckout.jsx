import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import useCart from "../../App/context/cart/useCart"

const CartCheckout = () => {
  const { emptyCart, cartValue } = useCart()

  return (
    <Container size="4">
      <Heading mb="4">Checkout</Heading>

      <Flex gap="6" align="start" justify="between">
        {/* Left: Cart Items */}
        <Box style={{ flex: 1, maxWidth: "700px", width:"60%" }}>
          <ShoppingCart />
        </Box>

        {/* Right: Summary */}
        <Box style={{ flex: 1, minWidth: "280px", maxWidth:"400px"}}>
          <Card>
            <Flex direction="column" gap="4">
              <Heading size="3">Order Summary</Heading>

              <Flex justify="between">
                <Text>Total</Text>
                <Text weight="bold">$ {cartValue()}</Text>
              </Flex>

              <Button size="3" onClick={emptyCart}>
                Checkout
              </Button>
            </Flex>
          </Card>
        </Box>
      </Flex>
    </Container>
  )
}

export default CartCheckout
