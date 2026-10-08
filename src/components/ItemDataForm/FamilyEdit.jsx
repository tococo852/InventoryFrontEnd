import useCatalog from "../../App/context/catalog/useCatalog";
import { Select, Switch, TextField, TextArea, Button, Card, Flex, Box, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import {  useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { itemsApi } from "../../api/itemsApi";
import { all } from "axios";

const FamilyEdit = () => {
  const navigate = useNavigate()
  const { addItem, items, categories, updateItem, triggerUpdate } = useCatalog()
  const [manualBarcode, setManualBarcode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({id:'null',name:''});
  const { itemId } = useParams()
  const [categoryList, setCategoryList]= useState([])
  const isEditing = !!itemId

  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    category_id: 'null',
    img_file:null,
    category:[],
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleanedData = {
      ...formData,
      category_id: formData.category_id === 'null' ? null : Number(formData.category_id),
    }
    if (isEditing) updateItem(Number(itemId), cleanedData)
    else addItem(cleanedData)

    triggerUpdate()
  }

  const getName = (id) => {
  const category = categoryList.find(c => String(c.id) === String(id));
  return category?.name ?? '';
};
  const handleDelete = async (e) =>{
      itemsApi.delete(itemId)
      triggerUpdate()
      navigate('/catalog')
  
    }

  const handleAddCategory= async (e)=>{
    if (selectedCategory.id==='null') return
    setFormData({...formData, category: formData.Category.push({...selectedCategory, id:Number(selectedCategory.id)})})
    setSelectedCategory({id:'null', name:''})
  }

  
  useEffect(() => {
    if (itemId) {
      const data = items.find(item => item.id === Number(itemId))

      if (data) setFormData({
        ...data,
        category_id: data.category_id ? String(data.category_id) : 'null',
      })


    }
  }, [items, itemId])


  
  const updateCategoryList = (data) => {
  const availableCategories = categories.filter(
    category =>
      !data.Category?.some(selected => selected.id === category.id)
  );

  setCategoryList(availableCategories);
};

useEffect(() => {
  updateCategoryList(formData);
}, [formData]);





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

            {/* image */}
            <Box style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {!formData.image_url?(
				      <img src="https://res.cloudinary.com/dz3iqsynp/image/upload/v1779125377/no-image_gkt5oj.webp" alt="" style={{height:"20em", width:"20em"}} />

              ):(
                <img src={`${formData.image_url}`} alt="" style={{height:"20em", width:"20em"}} />

              )}
            </Box>

            {/* Name */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="name">Name</Text>
              <TextField.Root mt="1" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Item name" />
            </Box>

            {/* Image URL */}
            <Box>
              <Text as="label" size="2" weight="medium" htmlFor="img_file">Image Upload</Text>
              <input type="file" onChange={(e)=>setFormData(prev=>({...prev, img_file:e.target.files[0]}))}/>
            </Box>

            <Separator size="4" />


            {/* Measure + Category */}
            <Flex gap="4" style={{display:"flex", flexDirection:"column"}}>
            
              <Box style={{ flex: 1 }}>
                <Text size="2" weight="medium" mb="1">Category</Text>
                <Box style={{display:"flex"}}>
                  <Select.Root value={String(selectedCategory.id)} onValueChange={(val) => setSelectedCategory(prev => ({ ...prev,id:val, name: getName(val) }))}>
                  <Select.Trigger style={{ width: '50%' }} />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Categories</Select.Label>
                      <Select.Item value="null">None</Select.Item>
                      {categoryList.map(category => (
                        <Select.Item key={category.id} value={String(category.id)}>{category.name}</Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
                <Button type="button" onClick={()=>handleAddCategory()}>Add</Button>


                </Box>
              </Box>

              <Box>
                
                { formData.Category?.map((category)=>(
                  <Card key={category.id}>{category.name}</Card>))
                  }     
 
              </Box>
            </Flex>


            <Separator size="4" />

            <Flex justify="end" gap="3">
              <Button variant="outline" type="button" onClick={() => navigate(-1)}>Cancel</Button>
              {itemId && <Button type="button"  color="red" onClick={()=>handleDelete()}>Delete</Button>}
              <Button disabled={formData.name===''} type="submit">{isEditing ? 'Update Item' : 'Add Item'}</Button>
            </Flex>

          </Flex>
        </form>
      </Card>
    </Box>
  )
}

export default FamilyEdit