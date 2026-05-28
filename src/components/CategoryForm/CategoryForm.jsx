import { Select, Switch, TextField, TextArea, Button, Card, Flex, Box, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { categoriesApi } from "../../api/categoriesApi";
import useCatalog from "../../App/context/catalog/useCatalog";

const CategoryForm = () => {
  const navigate = useNavigate()
  const { categoryId,Name } = useParams()
  const isEditing = !!categoryId
  const {triggerUpdate}= useCatalog()

  const [formData, setFormData] = useState({
    name: Name || '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isEditing) categoriesApi.update(Number(categoryId), formData.name)
    else categoriesApi.add(formData.name)
    triggerUpdate()
    navigate('/catalog')
  }
  const handleDelete = async (e) =>{

    categoriesApi.delete(Number(categoryId))
    triggerUpdate()
    navigate('/catalog')

  }


  return (
    <Box p="6" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Flex align="center" gap="3" mb="5">
        <Button variant="ghost" onClick={() => navigate(-1)}>
           Back
        </Button>
        <Heading size="5">
          {isEditing ? 'Edit Category' : 'New Category'}
        </Heading>
        {isEditing && <Badge color="amber">Editing</Badge>}
      </Flex>

      <Card variant="surface">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4" p="4">
            {/* category Name */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="name">Name</Text>
              <TextField.Root mt="1" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="category name" />
            </Box>

            
            <Flex justify="end" gap="3">
              <Button variant="outline" type="button" onClick={() => navigate(-1)}>Cancel</Button>
              <Button disabled={formData.name===''} type="submit">{isEditing ? 'Update category' : 'Add category'}</Button>
              {categoryId && <Button  color="red" onClick={()=>handleDelete()}>Delete</Button>}
            </Flex>

          </Flex>
        </form>
      </Card>
    </Box>
  )
}

export default CategoryForm