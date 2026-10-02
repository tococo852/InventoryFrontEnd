import { useParams } from "react-router";
import useCatalog from '../../../App/context/catalog/useCatalog'
import { variantGroupApi } from "../../../api/variantApi";
import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";
import { useNavigate } from "react-router";

import CartAddPopUp from "../../CartAddPopUp/CartAddPopUP";
import { useEffect, useState } from "react";
import VariantSelector from "../../variantSelector/VariantSelector";


const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dz3iqsynp/image/upload/v1779125377/no-image_gkt5oj.webp";

// Turns an item's Variant list into { [groupId]: variantId }
const getSelection = (item) =>
  Object.fromEntries(item.Variant.map((v) => [v.variant_group_id, v.id]));

const ProductInfo = () => {
  const { items } = useCatalog();
  const navigate = useNavigate();
  const { productId } = useParams();

  const [variantGroups, setVariantGroups] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCartPopUp, setDisplayCartPopUp] = useState(false);

  // The item family (contains Item[] with their Variant[])
  const family = items.find((item) => item.id === Number(productId));
  const familyItems = family?.Item ?? [];

  // Variant groups that exist in this family (only the options that are actually used)
  useEffect(() => {
    const fetchVariants = async () => {
      try {
        setLoading(true);
        const data = await variantGroupApi.getFamilyVariants(productId);
        setVariantGroups(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVariants();
  }, [productId]);


  const selectedItem =
    familyItems.find((i) => i.id === selectedItemId) ?? familyItems[0];

  if (error) return <p>Could not load the product options.</p>;
  if (!family || loading || !selectedItem) return <p>loading</p>;

  const image = selectedItem.image_url || family.image_url || FALLBACK_IMAGE;

  return (
    <Container size="3" style={{ marginTop: "3rem" }}>
      <Flex justify="start" mb="3">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Flex>

      <Card size="5" style={{ minHeight: "55vh" }}>
        <Flex gap="6" align="start" wrap="wrap">
          {/* Image */}
          <Box style={{ flex: "1", minWidth: "260px" }}>
            <img
              src={image}
              alt={selectedItem.name}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: "var(--radius-3)",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Info */}
          <Flex direction="column" gap="4" style={{ flex: "1.2", minWidth: "260px" }}>
            <Box>
              <Text size="2" color="gray">
                {family.name}
              </Text>
              <Heading size="6">{selectedItem.name}</Heading>
            </Box>

            <Text size="5" weight="bold">
              ${Number(selectedItem.price).toLocaleString("es-CL")}
            </Text>

            {/* Variant groups */}

              <VariantSelector
              productId={productId}
              variantGroups={variantGroups}
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
              loading={loading}
              />

            
            {/* Selected item details */}
            <Box
              style={{
                paddingTop: "1rem",
                borderTop: "1px solid var(--gray-a5)",
              }}
            >
              <Flex direction="column" gap="2">
                {selectedItem.description && (
                  <Text>{selectedItem.description}</Text>
                )}
                {selectedItem.barcode && (
                  <Text size="2" color="gray">
                    Código: {selectedItem.barcode}
                  </Text>
                )}
              </Flex>
            </Box>

            {/*
            <Box style={{ paddingTop: "1rem", borderTop: "1px solid var(--gray-a5)" }}>
              <Button size="3" onClick={() => setDisplayCartPopUp(true)}>
                Add to cart
              </Button>
            </Box>
            */}
          </Flex>
        </Flex>
      </Card>

      {displayCartPopUp && (
        <CartAddPopUp ProductInfo={selectedItem} setDisplay={setDisplayCartPopUp} />
      )}
    </Container>
  );
};

export default ProductInfo;
