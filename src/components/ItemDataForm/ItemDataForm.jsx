import useCatalog from "../../App/context/catalog/useCatalog";
import { Select } from "@radix-ui/themes";
import { Switch } from '@radix-ui/themes'
import { useEffect, useState } from "react";
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
const ItemDataForm=()=>{
    const navigate=useNavigate()
    const {addItem,measures,items,categories,updateItem}=useCatalog()
    const [manualBarcode, setManualBarcode] = useState(false)
    const {itemId}=useParams()
    const [formData, setFormData] = useState({
    name: '',
    price: 0,
    measure_id: 1, //needs selects
    barcode: '',
    description: '',
    image_url: '',
    quantity: 0,
    stock: 0,
    category_id: 'null'
    }) 


    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const cleanedData = {
        ...formData,
            category_id: formData.category_id === 'null' ? null : Number(formData.category_id),
            measure_id: formData.measure_id === 'null' ? null : Number(formData.measure_id),
            barcode: formData.barcode === '' ? null : Number(formData.barcode),
            quantity: Number(formData.quantity),
            stock: Number(formData.stock)

        }       

        

        if (itemId){
            updateItem(Number(itemId), cleanedData)
        }
        else{
            addItem(cleanedData)
        }
        console.log(cleanedData)
        console.log('submit sent')


        //await addItem(formData)
    }

    useEffect(()=>{

        if (itemId){
            const data = items.find(item =>(item.id===Number(itemId)))
            if (data) setFormData(data)
        }
    },[items,itemId])
    return <div>
            <button onClick={() => navigate(-1)}>back</button>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
                
                <label>Barcode</label>
                <Switch checked={manualBarcode} onCheckedChange={(checked) => {
                setManualBarcode(checked)
                if (!checked) setFormData(prev => ({ ...prev, barcode: '' }))
                }} />
                <input 
                type="text" 
                name="barcode" 
                value={formData.barcode} 
                onChange={handleChange} 
                disabled={!manualBarcode}
                title={!manualBarcode ? 'Barcode is automatically generated' : ''}
                />
                
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                
                <label>Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                
                <label>Stock</label>
                <input type="number" name="stock" value={formData.stock} onChange={handleChange} />

                <label>Measure</label>
                <Select.Root 
                value={String(formData.measure_id)}
                onValueChange={(val) => setFormData(prev => ({ ...prev, measure_id: val }))}
                >
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                    <Select.Label>Measurements</Select.Label>
                    {measures.map(measure => (
                        <Select.Item key={measure.id} value={String(measure.id)}>
                        {measure.measure}
                        </Select.Item>
                    ))}
                    </Select.Group>
                </Select.Content>
                </Select.Root>

                
                <Select.Root 
                value={String(formData.category_id)}
                onValueChange={(val) => setFormData(prev => ({ ...prev, category_id: val }))}
                >
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                    <Select.Label>Categories</Select.Label>
                    <Select.Item key='null' value='null'>
                        none
                        </Select.Item>
                    {categories.map(category => (
                        <Select.Item key={category.id} value={String(category.id)}>
                        {category.name}
                        </Select.Item>
                    ))}
                    </Select.Group>
                </Select.Content>
                </Select.Root>
                <button type="submit">Submit</button>
            </form>

            <button onClick={()=>{console.log(formData)}}>display</button>
            </div>
    
    
}
export default ItemDataForm