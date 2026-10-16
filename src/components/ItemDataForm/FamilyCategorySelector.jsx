
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Select,
  Text,
} from "@radix-ui/themes";

const FamilyCategorySelector = ({
  categories = [],
  selectedCategories = [],
  onChange,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("null");

  // Hide categories that have already been selected.
  const availableCategories = categories.filter(
    (category) =>
      !selectedCategories.some(
        (selected) => selected.id === category.id
      )
  );

  const handleAddCategory = () => {
    if (selectedCategoryId === "null") return;

    const category = categories.find(
      (category) => String(category.id) === selectedCategoryId
    );

    if (!category) return;

    onChange([
      ...selectedCategories,
      { id: category.id, name: category.name },
    ]);

    setSelectedCategoryId("null");
  };

  const handleRemoveCategory = (categoryId) => {
    onChange(
      selectedCategories.filter(
        (category) => category.id !== categoryId
      )
    );
  };

  return (
    <Box>
      <Text size="2" weight="medium" mb="1">
        Category
      </Text>

      <Flex gap="2">
        <Select.Root
          value={selectedCategoryId}
          onValueChange={setSelectedCategoryId}
        >
          <Select.Trigger
            placeholder="Select a category"
            style={{ flex: 1 }}
          />

          <Select.Content>
            <Select.Group>
              <Select.Label>Categories</Select.Label>

              <Select.Item value="null">None</Select.Item>

              {availableCategories.map((category) => (
                <Select.Item
                  key={category.id}
                  value={String(category.id)}
                >
                  {category.name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Button
          type="button"
          onClick={handleAddCategory}
          disabled={selectedCategoryId === "null"}
        >
          Add
        </Button>
      </Flex>

      <Flex direction="column" gap="2" mt="3">
        {selectedCategories.map((category) => (
          <Card key={category.id} size="1">
            <Flex align="center" justify="between" gap="2">
              <Text size="2">{category.name}</Text>

              <Button
                type="button"
                size="1"
                variant="ghost"
                color="red"
                onClick={() => handleRemoveCategory(category.id)}
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

export default FamilyCategorySelector;