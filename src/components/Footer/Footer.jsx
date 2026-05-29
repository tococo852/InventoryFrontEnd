import styled from 'styled-components';
import { useNavigate } from 'react-router';
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Link,
} from '@radix-ui/themes';


import { MapPin, Clock2, Map } from "@mynaui/icons-react";
const FooterWrapper = styled.footer`
  background: linear-gradient(
    to bottom,
    var(--gray-3),
    var(--gray-2)
  );

  border-top: 1px solid var(--gray-5);
`;

const SectionTitle = styled(Text)`
  margin-bottom: 1rem;
  display: block;
`;

const FooterLink = styled(Link)`
  color: var(--gray-11);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const SocialButton = styled.a`
  width: 36px;
  height: 36px;

  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-4);
  color: var(--orange-10);

  transition: all 0.2s ease;

  &:hover {
    background-color: var(--orange-4);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterWrapper>
      <Box py="8">
        <Container size="4">
          <Grid
            columns={{ initial: '1', sm: '3' }}
            gap="8"
            align="start"
          >
            {/* Logo + Socials */}
            <Flex direction="column" gap="4">
              <Text size="6" weight="bold">
                Logo
              </Text>
              <Flex gap="3">
                {/*<div>redes</div>*/}
              </Flex>
            </Flex>

            {/* Navegacion */}
            <Flex direction="column" gap="3">
              <SectionTitle size="4" weight="bold">
                Navegación
              </SectionTitle>

              <FooterLink onClick={()=>navigate('/catalog')} >Productos</FooterLink>
              <FooterLink onClick={()=>navigate('/about')}>Sobre Nosotros</FooterLink>
              <FooterLink onClick={()=>navigate('/contact')}>Contacto</FooterLink>
            </Flex>

            {/* informacion */}
            <Flex direction="column" gap="3" align={'center'}>
              <SectionTitle size="4" weight="bold">
                Información
              </SectionTitle>

            <Flex onClick={()=> window.open('https://maps.app.goo.gl/SWhK3KQuM38Pw8QZ8', '_blank', 'noopener,noreferrer')}  align={'center'} style={{cursor:'pointer', textDecoration:'underline', width:'100%'}} gap={"5"} justify={'start'}>

                  <MapPin size={18} color="var(--orange-9)" />
                <Text color="gray">
                  Yungay 223, San Felipe, V region
                </Text>
                
              </Flex>

              <Flex gap="2" align="center" justify={"center"}>
                <Clock2 size={18} color="var(--orange-9)" />

                <Text color="gray">
                  Lunes - Viernes / 9:30 - 19:00
                </Text>
                <Text color="gray">
                  Sabado / 9:30 - 14:00
                </Text>
              </Flex>
            </Flex>
          </Grid>

          <Box
            mt="8"
            pt="5"
            style={{
              borderTop: '1px solid var(--gray-5)',
            }}
          >
            <Text
              size="2"
              color="gray"
              style={{
                textAlign: 'center',
              }}
            >
              © 2026 Plasticos Martel.
            </Text>
          </Box>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
