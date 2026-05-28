import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from '@radix-ui/themes';

const AboutUs = () => {
  return (
    <Box
      pt="9"
      px="9"
      style={{
        minHeight: '80vh',
    

      }}
    >
        <Grid
          columns={{ initial: '1', md: '2' }}
          gap="8"
          align="center"
        >
          {/* Image section */}
          <Box
            style={{
              width: '100%',
              height: '450px',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'var(--gray-4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '0 8px 30px rgba(0,0,0,0.08)',
            }}
          >
            <Text color="gray" size="5">
              Big Store Image
            </Text>

            {/* Replace later with:
            
            <img
              src="/your-image.jpg"
              alt="Store"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            
            */}
          </Box>

          {/* Text section */}
          <Flex
            direction="column"
            gap="6"
          >
            <Box>
              <Text
                size="3"
                weight="bold"
                color="orange"
              >
                Sobre Nosotros
              </Text>

              <Heading
                size="8"
                mt="2"
              >
                Una tienda Original de san Felipe
              </Heading>
            </Box>

            <Text
              size="4"
              color="gray"
              style={{
                lineHeight: '1.8',
              }}
            >
              Plasticos Martel a acompañado a la
              comunidad de San Felipe desde ya mas de 30 años,
              con un servicio de atencion personalizado, para ayudarte a
              encontrar lo que tu necesites.
            </Text>

            <Text
              size="4"
              color="gray"
              style={{
                lineHeight: '1.8',
              }}
            >
              Trabajamos gran variedad
              de productos, Bolsas plasticas y de papel,
              envases desechables para alimento, plastico y malla para cubrir y potejer areas
            </Text>
          </Flex>
        </Grid>
    </Box>
  );
};

export default AboutUs;