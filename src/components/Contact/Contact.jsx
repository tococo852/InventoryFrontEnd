import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';

import {
  Mail,
  Telephone,
  MapPin,
} from '@mynaui/icons-react';

const Contact = () => {
  return (
    <Flex  py="9" px="9" align={'center'} direction={'column'}
  style={{
    minHeight: '70vh',
    height:'100%',
    background: 'linear-gradient(to bottom, var(--gray-1), var(--gray-2))',
  }}>

        {/* Title */}
        <Flex direction="column" gap="2">
          <Heading size="7">
            Contacto
          </Heading>

          <Text color="gray" size={'5'}>
            Puedes comunicarte con nosotros
            mediante cualquiera de los
            siguientes medios.
          </Text>
        </Flex>

        <Separator my="5" size="4" />

        {/* Contact info */}
        <Flex direction="column" gap="5" width={'100%'} align={'center'}>
          {/* Email */}
          <Flex
            gap="5"
            align="center"
            style={{
                width: '100%',
                maxWidth: '700px',
                padding: '2rem',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow:
                '0 4px 20px rgba(0,0,0,0.06)',
            }}
            >
            <Box
              style={{
                backgroundColor:
                  'var(--orange-3)',
                padding: '0.75rem',
                borderRadius: '999px',
              }}
            >
              <Mail
                size={50}
                color="var(--orange-9)"
              />
            </Box>

            <Flex direction="column">
              <Text weight="bold" size="7">
                Correo
              </Text>

              <Text color="gray" size="5">
                exampleemail@email.com
              </Text>
            </Flex>
          </Flex>

          {/* Phone */}
          <Flex
            gap="5"
            align="center"
            style={{
                width: '100%',
                maxWidth: '700px',
                padding: '2rem',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow:
                '0 4px 20px rgba(0,0,0,0.06)',
            }}
            >
            <Box
              style={{
                backgroundColor:
                  'var(--orange-3)',
                padding: '0.75rem',
                borderRadius: '999px',
              }}
            >
              <Telephone
                size={50}
                color="var(--orange-9)"
              />
            </Box>

            <Flex direction="column">
              <Text weight="bold" size="7">
                teléfono
              </Text>

              <Text color="gray" size="5">
                +56 9 9000 0000
              </Text>
            </Flex>
          </Flex>

          {/* Address */}
          <Flex
            gap="5"
            align="center"
            style={{
                width: '100%',
                maxWidth: '700px',
                padding: '2rem',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow:
                '0 4px 20px rgba(0,0,0,0.06)',
            }}
            >
            <Box
              style={{
                backgroundColor:
                  'var(--orange-3)',
                padding: '0.75rem',
                borderRadius: '999px',
                cursor:'pointer',

              }}
              onClick={()=> window.open('https://maps.app.goo.gl/SWhK3KQuM38Pw8QZ8', '_blank', 'noopener,noreferrer')} 
            >
              <MapPin
                size={50}
                color="var(--orange-9)"
              />
            </Box>

            <Flex direction="column" >
              <Text weight="bold" size={'7'}>
                Encuéntranos en
              </Text>

              <Text  color="gray" size="5" style={{textDecoration:'underline'}}>
                Yungay 223, San Felipe
              </Text>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
  );
};

export default Contact;