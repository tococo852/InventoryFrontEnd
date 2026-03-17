import styled from "styled-components";
import { Box, Section } from "@radix-ui/themes";

const FooterWrapper = styled.footer`
  height: 80px; /* fixed height */
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
          p='0'
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            fontSize: "0.8rem",
          }}
        >
          <div>
            <p>contact:</p>
            <p>+5690000000</p>
          </div>
          <div>
            <p>Location:</p>
            <p>Next to REDACTED</p>
          </div>
          <div>
            <p>by</p>
            <p>luciano gitlink</p>
          </div>
        </Section>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
