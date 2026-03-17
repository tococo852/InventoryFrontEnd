import styled from "styled-components"
import useCart from "../../../App/context/cart/useCart"
import { Link } from "react-router"
const CartLink=()=>{
    const CartWrap=styled.div`
        position: absolute;
        top: -10px;
        right: -14px;

        background: #18d618;

        color: white;
        font-size: 12px;
        font-weight: bold;

        width: 18px;
        height: 18px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        
    `
    const CartNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

    //`${cartQuantity?'#18d618':'inherit'}`
    const {cartQuantity} = useCart()
    return <div style={{position:"relative", display:"inline-block"}}>
            <CartNavLink to={`/checkout`}>
                    cart
            </CartNavLink>
            {cartQuantity>0 && (
                <CartWrap >
                    {cartQuantity}
                </CartWrap>
            )
            
            }

        </div>
}

export default CartLink