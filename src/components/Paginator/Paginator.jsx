import {
  Flex,
  IconButton,
  Button,
} from "@radix-ui/themes";

import {
  ChevronLeft,
  ChevronRight,
} from "@mynaui/icons-react";

const Paginator =({currentPage, setCurrentPage,itemsPerPage, filteredInventory})=>{
    return <Flex
        justify="center"
        align="center"
        gap="2"
        mt="4"
        >
            <IconButton
                variant="soft"
                disabled={currentPage === 1}
                onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
                }>

                <ChevronLeft size={18} />
            </IconButton>

            {Array.from({
                    length: Math.ceil(
                    filteredInventory.length / itemsPerPage
                    ),
                }).map((_, i) => (
                    <Button
                    key={i}
                    variant={currentPage === i + 1 ? "solid" : "soft"}
                    onClick={() => setCurrentPage(i + 1)}
                    >
                    {i + 1}
                    </Button>
                ))}

        <IconButton
            variant="soft"
            disabled={
            currentPage ===
            Math.ceil(filteredInventory.length / itemsPerPage)
            }
            onClick={() =>
            setCurrentPage((prev) =>
                Math.min(
                prev + 1,
                Math.ceil(
                    filteredInventory.length / itemsPerPage
                )
                )
            )
            }>
            <ChevronRight size={18} />
        </IconButton>
    </Flex>
}
export default Paginator