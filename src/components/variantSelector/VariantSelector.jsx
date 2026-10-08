

import { useParams } from "react-router";
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
import { useEffect, useState } from "react";
import useCatalog from '../../App/context/catalog/useCatalog'



// Turns an item's Variant list into { [groupId]: variantId }
const getSelection = (item) =>
  Object.fromEntries(item.Variant.map((v) => [v.variant_group_id, v.id]));

const VariantSelector = ({productId,variantGroups,selectedItemId, setSelectedItemId,loading}) => {
  const { items } = useCatalog();
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState(null);

  // The item family (contains Item[] with their Variant[])
  const family = items.find((item) => item.id === Number(productId));
  const familyItems = family?.Item ?? [];

  // sets the first item of the family list for diisplay
  useEffect(() => {
    setSelectedItemId(familyItems[0]?.id ?? null);
    setNotice(null);

  }, [productId]);

  const selectedItem =
    familyItems.find((i) => i.id === selectedItemId) ?? familyItems[0];
  const selection = selectedItem ? getSelection(selectedItem) : {};

  const getVariantName = (groupId, variantId) =>
    variantGroups
      .find((g) => g.id === groupId)
      ?.Variant.find((v) => v.id === variantId)?.name ?? "none";

  // Checks is the items that is being looked for is a valid combiination
  const isCompatible = (groupId, variantId) =>
    familyItems.some((item) => {
      return (
        item[groupId] === variantId &&
        Object.entries(selection).every(
          ([g, v]) => Number(g) === groupId || item[g] === v
        )
      );
    });

  // Pick an option. If the exact combination doesn't exist, jump to the item
  // that has this option and keeps as many of the other choices as possible.
  const handleSelect = (groupId, variantId) => {
    const candidates = familyItems.filter(
      (item) => getSelection(item)[groupId] === variantId
    );
    if (!candidates.length) return;

    const score = (item) => {
      const s = getSelection(item);
      return Object.entries(selection).filter(
        ([g, v]) => Number(g) !== groupId && s[g] === v
      ).length;
    };

    const best = candidates.reduce((a, b) => (score(b) > score(a) ? b : a));

    // Work out which OTHER groups had to change so we can tell the user
    const newSelection = getSelection(best);
    const groupIds = new Set([
      ...Object.keys(selection),
      ...Object.keys(newSelection),
    ]);

    const changes = [...groupIds]
      .filter(
        (g) => Number(g) !== groupId && selection[g] !== newSelection[g]
      )
      .map((g) => ({
        group: variantGroups.find((vg) => vg.id === Number(g))?.name,
        from: getVariantName(Number(g), selection[g]),
        to: getVariantName(Number(g), newSelection[g]),
      }));

    if (changes.length) {
      const clickedName = getVariantName(groupId, variantId);
      const previous = changes.map((c) => c.from).join(" + ");
      const changed = changes
        .map((c) => `${c.group}: ${c.from} → ${c.to}`)
        .join(", ");
      setNotice(`"${clickedName}" isn't available with ${previous}. Changed ${changed}.`);
    } else {
      setNotice(null);
    }

    setSelectedItemId(best.id);
  };

  if (error) return <p>Could not load the product options.</p>;
  if (!family || loading || !selectedItem) return <p>loading</p>;

  return (
          <Flex direction="column" gap="4" style={{ flex: "1.2", minWidth: "260px" }}>
            {/* Variant groups */}

            {variantGroups.map((group) => (
              
              <Flex key={group.id} direction="column" gap="2">
                <Text size="2" weight="medium" style={{ textTransform: "capitalize" }}>
                  {group.name}
                </Text>
                <Flex gap="2" wrap="wrap">
                  {group.Variant.map((variant) => {
                    const isSelected = selection[group.id] === variant.id;
                    const compatible = isCompatible(group.id, variant.id);

                    return (
                      <Button
                        key={variant.id}
                        size="2"
                        variant={isSelected ? "solid" : "outline"}
                        color={isSelected || compatible ? undefined : "gray"}
                        style={{ opacity: isSelected || compatible ? 1 : 0.55 }}
                        aria-pressed={isSelected}
                        onClick={() => handleSelect(group.id, variant.id)}
                      >
                        {variant.name}
                      </Button>
                    );
                  })}
                </Flex>
              </Flex>
            ))}

            {/* Shown when picking an option forced other options to change */}
            {notice && (
              <Callout.Root size="1" color="amber" role="status">
                <Callout.Text>{notice}</Callout.Text>
              </Callout.Root>
            )}
          </Flex>
  );
};

export default VariantSelector;
