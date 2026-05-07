import useCatalog from '../../../App/context/catalog/useCatalog'

import {
  Box,
  Flex,
  CheckboxGroup,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes'

const CategorySidebar = ({ categoryFilter, setCategoryFilter }) => {
  const { catalog } = useCatalog()

  return (
    <Box
      style={{
        width: '240px',
        padding: '1rem',
        borderRight: '1px solid var(--gray-6)',
      }}
    >
      <Text size="4" weight="bold">
        Categories
      </Text>

      <Separator my="3" size="4" />

      <CheckboxGroup.Root
        value={categoryFilter}
        onValueChange={setCategoryFilter}
      >
        <Flex direction="column" gap="2">
          {catalog.categories.map(category => (
            <Flex
              key={category.name}
              align="center"
              justify="between"
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
              }}
            >
              <CheckboxGroup.Item value={category.name}>
                <Text>{category.name}</Text>
              </CheckboxGroup.Item>

              <Button
                size="1"
                variant="soft"
              >
                Edit
              </Button>
            </Flex>
          ))}
        </Flex>
      </CheckboxGroup.Root>
    </Box>
  )
}

export default CategorySidebar