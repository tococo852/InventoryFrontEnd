import useCatalog from "../../App/context/catalog/useCatalog";
import { Select, Switch, TextField, TextArea, Button, Card, Flex, Box, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const ItemDataForm = () => {
  const navigate = useNavigate()
  const { addItem, measures, items, categories, updateItem } = useCatalog()
  const [manualBarcode, setManualBarcode] = useState(false)
  const { itemId } = useParams()
  const isEditing = !!itemId

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    measure_id: '1',
    barcode: '',
    description: '',
    image_url: '',
    quantity: 0,
    stock: 0,
    category_id: 'null'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleanedData = {
      ...formData,
      category_id: formData.category_id === 'null' ? null : Number(formData.category_id),
      measure_id: formData.measure_id === 'null' ? null : Number(formData.measure_id),
      barcode: formData.barcode === '' ? null : formData.barcode,
      quantity: Number(formData.quantity),
      stock: Number(formData.stock),
      price: Number(formData.price)
    }
    if (isEditing) updateItem(Number(itemId), cleanedData)
    else addItem(cleanedData)
  }

  useEffect(() => {
    if (itemId) {
      const data = items.find(item => item.id === Number(itemId))
      if (data) setFormData({
        ...data,
        category_id: data.category_id ? String(data.category_id) : 'null',
        measure_id: data.measure_id ? String(data.measure_id) : '1',
      })
    }
  }, [items, itemId])

  return (
    <Box p="6" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Flex align="center" gap="3" mb="5">
        <Button variant="ghost" onClick={() => navigate(-1)}>
           Back
        </Button>
        <Heading size="5">
          {isEditing ? 'Edit Item' : 'New Item'}
        </Heading>
        {isEditing && <Badge color="amber">Editing</Badge>}
      </Flex>

      <Card variant="surface">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4" p="4">

            {/* Name */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="name">Name</Text>
              <TextField.Root mt="1" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Item name" />
            </Box>

            {/* Price */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="price">Price</Text>
              <TextField.Root mt="1" id="price" type="number" name="price" value={formData.price} onChange={handleChange} placeholder="0" />
            </Box>

            {/* Barcode */}
            <Box>
              <Flex align="center" justify="between" mb="1">
                <Text size="2" weight="medium">Barcode</Text>
                <Flex align="center" gap="2">
                  <Text size="1" color="gray">Manual entry</Text>
                  <Switch
                    size="1"
                    checked={manualBarcode}
                    onCheckedChange={(checked) => {
                      setManualBarcode(checked)
                      if (!checked) setFormData(prev => ({ ...prev, barcode: '' }))
                    }}
                  />
                </Flex>
              </Flex>
              <TextField.Root
                name="barcode"
                value={formData.barcode}
                onChange={handleChange}
                disabled={!manualBarcode}
                placeholder={manualBarcode ? 'Enter barcode' : 'Auto generated'}
              />
            </Box>

            {/* Description */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="description">Description</Text>
              <TextArea mt="1" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Item description" />
            </Box>

            {/* Image URL */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="image_url">Image URL</Text>
              <TextField.Root mt="1" id="image_url" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="https://..." />
            </Box>

            <Separator size="4" />

            {/* Quantity + Stock */}
            <Flex gap="4">
              <Box style={{ flex: 1 }}>
                <Text as="label" size="2" weight="medium" htmlFor="quantity">Quantity</Text>
                <TextField.Root mt="1" id="quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
              </Box>
              <Box style={{ flex: 1 }}>
                <Text as="label" size="2" weight="medium" htmlFor="stock">Stock</Text>
                <TextField.Root mt="1" id="stock" type="number" name="stock" value={formData.stock} onChange={handleChange} />
              </Box>
            </Flex>

            {/* Measure + Category */}
            <Flex gap="4">
              <Box style={{ flex: 1 }}>
                <Text size="2" weight="medium" mb="1">Measure</Text>
                <Select.Root value={String(formData.measure_id)} onValueChange={(val) => setFormData(prev => ({ ...prev, measure_id: val }))}>
                  <Select.Trigger style={{ width: '100%' }} />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Measurements</Select.Label>
                      {measures.map(measure => (
                        <Select.Item key={measure.id} value={String(measure.id)}>{measure.measure}</Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Box>

              <Box style={{ flex: 1 }}>
                <Text size="2" weight="medium" mb="1">Category</Text>
                <Select.Root value={String(formData.category_id)} onValueChange={(val) => setFormData(prev => ({ ...prev, category_id: val }))}>
                  <Select.Trigger style={{ width: '100%' }} />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Categories</Select.Label>
                      <Select.Item value="null">None</Select.Item>
                      {categories.map(category => (
                        <Select.Item key={category.id} value={String(category.id)}>{category.name}</Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Box>
            </Flex>

            <Separator size="4" />

            <Flex justify="end" gap="3">
              <Button variant="outline" type="button" onClick={() => navigate(-1)}>Cancel</Button>
              <Button type="submit">{isEditing ? 'Update Item' : 'Add Item'}</Button>
            </Flex>

          </Flex>
        </form>
      </Card>
    </Box>
  )
}

export default ItemDataForm