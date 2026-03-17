import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";

const ItemDisplay = ({ itemInfo, quantity, add, clear, reduce }) => {
  return (
    <Card>
      <Flex align="center" gap="4">
        {/* Image */}
        <Box
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#f4f4f4",
            flexShrink: 0,
          }}
        >
          <img
            src={itemInfo.image_url}
            alt={itemInfo.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Main content */}
        <Flex
          direction="column"
          style={{ flex: 1 }}
          gap="2"
        >
          <Text weight="bold">{itemInfo.name}</Text>

          {/* Controls */}
          <Flex align="center" gap="2">
            <Button size="1" variant="soft" onClick={reduce}>
              −
            </Button>

            <Text>{quantity}</Text>

            <Button size="1" variant="soft" onClick={add}>
              +
            </Button>

            <Button
              size="1"
              color="red"
              variant="ghost"
              onClick={clear}
            >
              Remove
            </Button>
          </Flex>
        </Flex>

        {/* Price */}
        <Text weight="bold">
          $ {(itemInfo.price * quantity).toFixed(2)}
        </Text>
      </Flex>
    </Card>
  )
}

export default ItemDisplay