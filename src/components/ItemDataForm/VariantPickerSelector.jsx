
import { Button, Box, Flex, Select, Text, Card } from "@radix-ui/themes";
import { useState } from "react";

const VariantPickerSelector = ({
  group,
  AllGroups,
  setChosenGroup,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState("null");

  // Find all variants belonging to this group.
  const allVariants =
    AllGroups.find((vgroup) => vgroup.id === group.id)?.Variant ?? [];

  // Exclude variants that have already been selected.
  const availableVariants = allVariants.filter(
    (variant) =>
      !group.Variant.some(
        (selected) => selected.id === variant.id
      )
  );

  const handleAddVariant = () => {
    if (selectedVariantId === "null") return;

    const pickedVariant = availableVariants.find(
      (variant) => String(variant.id) === selectedVariantId
    );

    if (!pickedVariant) return;

    setChosenGroup((prevGroups) =>
      prevGroups.map((originalGroup) =>
        originalGroup.id === group.id
          ? {
              ...originalGroup,
              Variant: [...originalGroup.Variant, pickedVariant],
            }
          : originalGroup
      )
    );

    setSelectedVariantId("null");
  };

  const handleRemoveVariant = (variantId) => {
    setChosenGroup((prevGroups) =>
      prevGroups.map((originalGroup) =>
        originalGroup.id === group.id
          ? {
              ...originalGroup,
              Variant: originalGroup.Variant.filter(
                (variant) => variant.id !== variantId
              ),
            }
          : originalGroup
      )
    );
  };

  return (
    <Box
      p="6"
      style={{
        maxWidth: 600,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Text>Variants available for:</Text>

      <Text weight="medium">{group.name}</Text>

      <Flex gap="2" style={{ width: "100%" }}>
        <Select.Root
          value={selectedVariantId}
          onValueChange={setSelectedVariantId}
        >
          <Select.Trigger
            placeholder="Select a variant"
            style={{ flex: 1 }}
          />

          <Select.Content>
            <Select.Group>
              <Select.Label>Variants</Select.Label>

              <Select.Item value="null">None</Select.Item>

              {availableVariants.map((variant) => (
                <Select.Item
                  key={variant.id}
                  value={String(variant.id)}
                >
                  {variant.name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Button
          type="button"
          onClick={handleAddVariant}
          disabled={
            selectedVariantId === "null" ||
            !availableVariants.some(
              (variant) => String(variant.id) === selectedVariantId
            )
          }
        >
          Add
        </Button>
      </Flex>

      <Flex
        direction="column"
        gap="2"
        mt="3"
        style={{ width: "100%" }}
      >
        {group.Variant.map((variant) => (
          <Card key={variant.id} size="1">
            <Flex align="center" justify="between" gap="2">
              <Text size="2">{variant.name}</Text>

              <Button
                type="button"
                size="1"
                variant="ghost"
                color="red"
                onClick={() => handleRemoveVariant(variant.id)}
              >
                Remove
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default VariantPickerSelector;
