import {
  Flex,
  TextField,
} from "@radix-ui/themes";

import {
  Search
} from "@mynaui/icons-react";

const SearchBar =({searchFilter, setSearchFilter})=>{
    return <Flex justify="center" mb="4">
    <TextField.Root
        size="3"
        style={{
        width: "400px",
        }}
        placeholder="Search products..."
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
    >
        <TextField.Slot>
        <Search size={18} />
        </TextField.Slot>

    </TextField.Root>
    </Flex>
}

export default SearchBar