import { Card, IconButton, Inset, Text} from "@radix-ui/themes"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router"
import useAuth from "../../../App/context/auth/useAuth"
const ProductCard=({itemInfo})=>{
	const {token} = useAuth()
	const placeholder= "https://res.cloudinary.com/dz3iqsynp/image/upload/v1779125377/no-image_gkt5oj.webp"

    return <>
        <Card variant="surface" style={{padding:"1.5rem", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Text as="div" size="2" weight="bold">
			{itemInfo.name}
		</Text>  
		<Link to={(`/catalog/${itemInfo.id}`)} style={{ color: "inherit", textDecoration: "none" }}>

				<img loading="lazy" 
				src={itemInfo.image_url?(`${itemInfo.image_url}`):(placeholder)} 
				alt="" 
				style={{height:"8em", width:"8em"}} 
				/>

		</Link>	

		
		{/*
		<Text as="div" color="gray" size="2">
			price ${itemInfo.price}
		</Text>
		<Text as="div" color="gray" size="2">
			contains {itemInfo.quantity} {itemInfo.measure} 
		</Text>*/}

		<div style={{
			display:"flex",
			gap:"5px",
			justifyContent:"center"
		}}>
			<Button size="2" variant="outline">
			
				<Link to={
					(`/catalog/${itemInfo.id}`)
				}
				    style={{ color: "inherit", textDecoration: "none" }}
					>

					Detalles
				</Link>
			</Button>

			{
			(token) &&(<Button size="2" variant="outline">
			
				<Link to={
					`/itemForm/${itemInfo.id}`
				}
				    style={{ color: "inherit", textDecoration: "none" }}
					>

					Editar
				</Link>
			</Button>	)
			}
		</div>

			
	    </Card>
        </>
}
export default ProductCard