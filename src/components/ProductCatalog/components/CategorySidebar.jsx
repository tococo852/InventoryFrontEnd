import catalog from '../assets/catalog.json'
import { CheckboxGroup } from '@radix-ui/themes'

const CategorySidebar = ({ categoryFilter, setCategoryFilter }) => {
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
          key={category}
          value={category}
        >
          {category}
        </CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  );
};

export default CategorySidebar;
