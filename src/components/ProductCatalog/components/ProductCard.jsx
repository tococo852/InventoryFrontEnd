import { Card, IconButton, Inset, Text} from "@radix-ui/themes"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router"
import useAuth from "../../../App/context/auth/useAuth"
const ProductCard=({itemInfo})=>{
	const {token} = useAuth()

    return <>
        <Card variant="surface" style={{padding:"1.5rem"}}>
        <Text as="div" size="2" weight="bold">
			{itemInfo.name}
		</Text>  
		<Link to={
					(!token)?(`/catalog/${itemInfo.id}`):(`/itemForm/${itemInfo.id}`)
				}
				    style={{ color: "inherit", textDecoration: "none" }}
					>

			{!itemInfo.image_url?(
				<img src="https://res.cloudinary.com/dz3iqsynp/image/upload/v1779125377/no-image_gkt5oj.webp" alt="" style={{height:"8em", width:"8em"}} />

			):(
				<img src={`${itemInfo.image_url}`} alt="" style={{height:"8em", width:"8em"}} />

			)}
		</Link>	
		
		<Text as="div" color="gray" size="2">
			price ${itemInfo.price}
		</Text>
		<Text as="div" color="gray" size="2">
			contains {itemInfo.quantity} {itemInfo.measure} 
		</Text>

		<div style={{
			display:"flex",
			gap:"5px",
			justifyContent:"center"
		}}>
			
			<Button size="2" variant="outline">
			
				<Link to={
					(!token)?(`/catalog/${itemInfo.id}`):(`/itemForm/${itemInfo.id}`)
				}
				    style={{ color: "inherit", textDecoration: "none" }}
					>

					Details
				</Link>
			</Button>
		</div>

			
	    </Card>
        </>
}
export default ProductCard