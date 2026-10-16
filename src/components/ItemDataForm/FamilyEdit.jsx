
import useCatalog from "../../App/context/catalog/useCatalog";
import {
  TextField,
  Button,
  Card,
  Flex,
  Box,
  Text,
  Heading,
  Separator,
  Badge,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { itemsApi } from "../../api/itemsApi";
import {variantGroupApi} from "../../api/variantApi"
import FamilyCategorySelector from "./FamilyCategorySelector";
import VariantGroupSelector from "./VariantGroupSelector";
import VariantPicker from "./VariantPicker";
const FamilyEdit = () => {
  const navigate = useNavigate();

  const {
    addItem,
    items,
    categories,
    updateItem,
    variants,
    triggerUpdate,
  } = useCatalog();

  const [manualBarcode, setManualBarcode] = useState(false);
  const { itemId } = useParams();
  const [selectedGroups, setSelectedGroups] = useState([]);


  const isEditing = !!itemId;

  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    img_file: null,
    Category: [],
    variant_list: [],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedData = {
      ...formData,
      variant_list:selectedGroups
    };

   // if (isEditing) {
    //  await updateItem(Number(itemId), cleanedData);
   // } else {
    //  await addItem(cleanedData);
    //}

    triggerUpdate();
  };
  const handleDelete = async () => {
    await itemsApi.delete(itemId);
    triggerUpdate();
    navigate("/catalog");
  };

  useEffect(() => {
  if (!itemId) return;

  const initializeForm = async () => {
    const item = items.find(
      (item) => item.id === Number(itemId)
    );

    if (!item) return;

    try {
      const response = await variantGroupApi.getFamilyVariants(itemId);

      setFormData({
        ...item,
        variant_list: [...response],
      });

      setSelectedGroups([...response])


    } catch (error) {
      console.error("Failed to initialize form:", error);
    }
  };
  initializeForm();
}, [items, itemId]);

  return (
    <Box p="6" style={{ maxWidth: 600, margin: "0 auto" }}>

      {/*infor and navigation*/}
      <Flex align="center" gap="3" mb="5">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          Back
        </Button>

        <Heading size="5">
          {isEditing ? "Edit Item" : "New Item"}
        </Heading>

        {isEditing && <Badge color="amber">Editing</Badge>}
      </Flex>

      <Card variant="surface">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4" p="4">
            {/* Image preview */}
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!formData.image_url ? (
                <img
                  src="https://res.cloudinary.com/dz3iqsynp/image/upload/v1779125377/no-image_gkt5oj.webp"
                  alt=""
                  style={{ height: "20em", width: "20em" }}
                />
              ) : (
                <img
                  src={formData.image_url}
                  alt=""
                  style={{ height: "20em", width: "20em" }}
                />
              )}
            </Box>

            {/* Name field */}
            <Box>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="name"
              >
                Name
              </Text>

              <TextField.Root
                mt="1"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Item name"
              />
            </Box>

            {/* Image upload */}
            <Box>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="img_file"
              >
                Image Upload
              </Text>

              <input
                id="img_file"
                type="file"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    img_file: e.target.files[0],
                  }))
                }
              />
            </Box>

            <Separator size="4" />

            {/* Categories */}
            <FamilyCategorySelector
              categories={categories}
              selectedCategories={formData.Category}
              onChange={(Category) =>
                setFormData((prev) => ({
                  ...prev,
                  Category,
                }))
              }
            />

            {/* Variant group selector will go here */}
            <Separator size="4" />
            <VariantGroupSelector
            allGroups={variants}
            chosenGroups={selectedGroups}
            setChosenGroups={setSelectedGroups}
            />
            <Separator size="4" />

            {/* variant picker per group here */}
            <VariantPicker
            allGroups={variants}
            chosenGroups={selectedGroups}
            setChosenGroups={setSelectedGroups}
            />

            {/* Form actions */}
            <Flex justify="end" gap="3">
              <Button
                variant="outline"
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>

              {isEditing && (
                <Button
                  type="button"
                  color="red"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              )}

              <Button
                disabled={formData.name === ""}
                type="submit"
              >
                {isEditing ? "Update Item" : "Add Item"}
              </Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Box>
  );
};

export default FamilyEdit;