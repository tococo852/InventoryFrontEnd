import { Button, Box, Flex, Text} from "@radix-ui/themes";
import { useState } from "react";
import FamilyEdit  from "./FamilyEdit";
import VariantEdit  from "./VariantEdit";
import { useParams } from "react-router";
import VariantPickerSelector from "./VariantPickerSelector";
const VariantPicker = ({
    allGroups,
    chosenGroups,
    setChosenGroups
}) => {



  return (
    <Box p="6" style={{ maxWidth: 600, margin: "0 auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Text size="2" weight="medium" mb="2">
        Variants avalible
      </Text>

      {chosenGroups.map(group=>(
        <VariantPickerSelector group={group} AllGroups={allGroups} chosenGroup={chosenGroups} setChosenGroup={setChosenGroups}/>
      ))}
    </Box>
  );
};

export default VariantPicker;
