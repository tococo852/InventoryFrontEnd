
import { Button, Box, Flex, Select, Card, Text } from "@radix-ui/themes";
import { useState } from "react";

const VariantGroupSelector = ({
  allGroups = [],
  chosenGroups = [],
  setChosenGroups,
}) => {
  const [selectedGroupId, setSelectedGroupId] = useState("null");

  // Hide groups that have already been selected.
  const availableGroups = allGroups.filter(
    (group) =>
      !chosenGroups.some(
        (chosen) => chosen.id === group.id
      )
  );

  const handleAddGroup = () => {
    if (selectedGroupId === "null") return;

    const group = allGroups.find(
      (group) => String(group.id) === selectedGroupId
    );

    if (!group) return;

    setChosenGroups([
      ...chosenGroups,
      {
        id: group.id,
        name: group.name,
        Variant: []
      },
    ]);
    setSelectedGroupId("null");
  };

  const handleRemoveGroup = (groupId) => {
    setChosenGroups(
      chosenGroups.filter(
        (group) => group.id !== groupId
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
      <Text size="2" weight="medium" mb="2">
        Variant Groups
      </Text>

      <Flex gap="2" style={{ width: "100%" }}>
        <Select.Root
          value={selectedGroupId}
          onValueChange={setSelectedGroupId}
        >
          <Select.Trigger
            placeholder="Select a variant group"
            style={{ flex: 1 }}
          />

          <Select.Content>
            <Select.Group>
              <Select.Label>Variant Groups</Select.Label>

              <Select.Item value="null">None</Select.Item>

              {availableGroups.map((group) => (
                <Select.Item
                  key={group.id}
                  value={String(group.id)}
                >
                  {group.name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Button
          type="button"
          onClick={handleAddGroup}
          disabled={selectedGroupId === "null"}
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
        {chosenGroups.map((group) => (
          <Card key={group.id} size="1">
            <Flex align="center" justify="between" gap="2">
              <Text size="2">{group.name}</Text>

              <Button
                type="button"
                size="1"
                variant="ghost"
                color="red"
                onClick={() => handleRemoveGroup(group.id)}
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

export default VariantGroupSelector;
