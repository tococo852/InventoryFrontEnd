import styled from "styled-components";
import { Box, Section} from "@radix-ui/themes";

import { Link } from "react-router";

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
gap: 3rem;
padding-right: 1rem;

`;

const Header =()=>{
    return <Box
            py="3"
            style={{ backgroundColor: "papayawhip", borderRadius: "var(--radius-3)" }}>

                <Section size="1" 
                style={{ display: "flex", justifyContent:"space-between"}}
                > 
                 <div>
                    <Link to={`/home`}> 
                        <>logo</>

                    </Link>
                </div>
                <Wrapper>
                    <div>
                        <Link to={`/home`}>
                        <>home</>
                        </Link>
                </div>
                <div>
                    <Link to={`/catalog`}>
                    products
                    </Link>
                    
                </div>
                <div>
                    <Link to={`/checkout`}>
                    cart
                    </Link>
                </div>

                </Wrapper>
                
                </Section>

        </Box>
               
}

export default Header