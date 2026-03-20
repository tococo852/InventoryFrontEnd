import useCatalog from "../../App/context/catalog/useCatalog";
import { Select } from "@radix-ui/themes";
import { useState } from "react";
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
    const {addItem,measures}=useCatalog()
    const [formData, setFormData] = useState({
    name: '',
    price: 0,
    measure_id: 1, //needs selects
    barcode: '',
    description: '',
    image_url: '',
    quantity: 0,
    stock: 0
    }) 

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()


        //await addItem(formData)
        console.log(measures)
    }
    return <div>
            <button onClick={() => navigate(-1)}>back</button>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
                
                <label>Barcode</label>
                <input type="text" name="barcode" value={formData.barcode} onChange={handleChange} />
                
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

                <button type="submit">Submit</button>
            </form>

            <button onClick={()=>{console.log(formData)}}>display</button>
            </div>
    
    
}
export default ItemDataForm