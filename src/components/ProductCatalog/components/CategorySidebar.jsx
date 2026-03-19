import useCatalog from '../../../App/context/catalog/useCatalog'

import { CheckboxGroup } from '@radix-ui/themes'

const CategorySidebar = ({ categoryFilter, setCategoryFilter }) => {
  const { catalog } = useCatalog()
  return (
    <CheckboxGroup.Root
      value={categoryFilter}
      onValueChange={setCategoryFilter}
      style={{
        display:"flex",
        gap:"1rem"

      }}
    >
      <div>Categories</div>

      {catalog.categories.map(category => (
        <CheckboxGroup.Item
          key={category.name}
          value={category.name}
        >
          {category.name}
        </CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  );
};

export default CategorySidebar;
