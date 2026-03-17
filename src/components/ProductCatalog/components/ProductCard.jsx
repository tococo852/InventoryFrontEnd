import { Card, IconButton, Inset, Text} from "@radix-ui/themes"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router"
import 	CartIcon from "../../../shared-assets/cart.svg?react"


const ProductCard=({itemInfo})=>{
    //console.log(itemInfo)
    return <>
        <Card variant="surface" style={{padding:"1.5rem"}}>
        <Text as="div" size="2" weight="bold">
			{itemInfo.name}
		</Text>  
		<Link to={`/catalog/${itemInfo.ID}`}>
			<img src="" alt="" style={{height:"8em", width:"8em"}} />
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
			justifyContent:"space-between"
		}}>
			

			<IconButton variant="soft">
				<CartIcon width={"1.2rem"}/>
			</IconButton>

			<Button size="2" variant="outline">
				<Link to={`/catalog/${itemInfo.ID}`}
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