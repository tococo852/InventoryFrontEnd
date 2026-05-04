import styled from "styled-components"
import { Box, Section, Text } from "@radix-ui/themes"
import CartLink from "./components/cartLink"
import { Link } from "react-router"
import useAuth from "../../App/context/auth/useAuth"
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    opacity: 0.7;
  }
`;

const Header = () => {

  const {token,logout}= useAuth()

  return (
    <Box
      py="3"
      style={{
        backgroundColor: "papayawhip",
      }}
    >
      <Section
        size="1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"1rem 1rem 1rem 1rem"
        }}
      >
        {/* Logo */}
        <NavLink to="/home">
          <Text weight="bold" size="4">
            Logo
          </Text>
        </NavLink>

        {/* Navigation */}
        <Wrapper>
          <NavLink to="/home">
            <Text>Home</Text>
          </NavLink>

          <NavLink to="/catalog">
            <Text>Products</Text>
          </NavLink>
          {token?(
            <NavLink to="/login" onClick={logout}>
            <Text>Logout</Text>
          </NavLink>
          ):(
            <NavLink to="/login">
            <Text>Login</Text>
          </NavLink>
          )}

          <CartLink />
        </Wrapper>
      </Section>
    </Box>
  )
}

export default Header
