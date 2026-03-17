import styled from "styled-components"
import { Box, Section, Text } from "@radix-ui/themes"

const FooterWrapper = styled.footer`
  height: 80px;
  background: papayawhip;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Box style={{ width: "100%" }}>
        <Section
          size="1"
          p="0"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
          }}
        >
          <Box>
            <Text size="1" weight="bold">
              Contact
            </Text>
            <Text size="1">+56 9 0000 0000</Text>
          </Box>

          <Box>
            <Text size="1" weight="bold">
              Location
            </Text>
            <Text size="1">—</Text>
          </Box>

          <Box>
            <Text size="1" weight="bold">
              By:
            </Text>
            <Text size="1" >
               Luciano
            </Text>
          </Box>

          <Box>
    
            <Text size="1">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                My Github
              </a>
            </Text>
          </Box>
        </Section>
      </Box>
    </FooterWrapper>
  )
}

export default Footer
