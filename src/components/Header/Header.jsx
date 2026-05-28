import styled from "styled-components";
import { Box, Container, Flex, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router";
import useAuth from "../../App/context/auth/useAuth";

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(
    to right,
    var(--blue-10),
    var(--blue-9)
  );

  border-bottom: 1px solid var(--blue-8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

const Logo = styled(Text)`
  letter-spacing: 0.5px;
`;

const Header = () => {
  const { token, logout } = useAuth();

  return (
    <HeaderWrapper>
      <Box py="3">
        <Container size="4">
          <Flex
            justify="between"
            align="center"
            style={{
              minHeight: "64px",
            }}
          >
            {/* Logo */}
            <NavLink to="/home">
              <Logo weight="bold" size="5" style={{ color: "white" }}>
                Logo
              </Logo>
            </NavLink>

            {/* Navigation */}
            <Flex align="center" gap="5">
              <NavLink to="/home">
                <Text
                  size="4"
                  weight="bold"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  Home
                </Text>
              </NavLink>

              <NavLink to="/contact">
                <Text
                  size="4"
                  weight="bold"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  Contacto
                </Text>
              </NavLink>

              <NavLink to="/about">
                <Text
                  size="4"
                  weight="bold"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  Nosotros
                </Text>
              </NavLink>

              <NavLink to="/catalog">
                <Text
                  size="4"
                  weight="bold"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  Products
                </Text>
              </NavLink>

              {token && (
                <Button
                  size="2"
                  color="orange"
                  variant="solid"
                  onClick={logout}
                  asChild
                >
                  <Link to="/login">Logout</Link>
                </Button>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;