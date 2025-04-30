import React from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Link,
    Heading,
    HStack,
    Icon,
    Flex
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaRss, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box>
            {/* Footer principal con información */}
            <Box
                bg="#8c1c2b"
                color="white"
                pt={10}
                pb={8}
            >
                <Container maxW={'container.xl'}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        {/* Columna 1: ¿Qué es Ambar Studios? */}
                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                ¿Qué es Ambar Studios?
                            </Heading>
                            <Text fontSize="sm" lineHeight="tall" color="whiteAlpha.800">
                                Es una empresa certificada en desarrollo de Aplicaciones
                                Móviles (Titanium Appcelerator). Desarrollo de Software a
                                la medida, Animación y Videojuegos.
                            </Text>
                        </Box>

                        {/* Columna 2: Últimos Tweets */}
                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                Últimos Tweets
                            </Heading>
                            <Box fontSize="sm" color="whiteAlpha.800">
                                {/* Aquí podrían ir tweets dinámicos */}
                                <Text mb={2}>
                                    Síguenos en nuestras redes sociales para estar al día
                                    con nuestras últimas actualizaciones y proyectos.
                                </Text>
                            </Box>
                        </Box>

                        {/* Columna 3: Estamos en... */}
                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                Estamos en...
                            </Heading>
                            <HStack align="flex-start" spacing={2} mb={2}>
                                <Icon as={FaMapMarkerAlt} mt={1} />
                                <Text fontSize="sm" color="whiteAlpha.800">
                                    Avenida Platino 173, Colonia Rosario Poniente,
                                    Tuxtla Gutiérrez Chiapas, CP 29104
                                </Text>
                            </HStack>
                            <HStack align="center" spacing={2}>
                                <Icon as={FaPhone} />
                                <Text fontSize="sm" color="whiteAlpha.800">
                                    Tel. 9612261559 y 9612255126
                                </Text>
                            </HStack>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Footer secundario con copyright y redes sociales */}
            <Box
                bg="#52000e"
                color="whiteAlpha.700"
                py={4}
            >
                <Container maxW={'container.xl'}>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                        align={{ base: 'center', md: 'center' }}
                        spacing={{ base: 4, md: 0 }}
                    >
                        <Text fontSize="sm">
                            AMBAR ROJO STUDIOS derechos reservados {currentYear}.
                        </Text>

                        <HStack spacing={4}>
                            <Link href="https://twitter.com" isExternal>
                                <Icon as={FaTwitter} w={5} h={5} />
                            </Link>
                            <Link href="https://facebook.com" isExternal>
                                <Icon as={FaFacebook} w={5} h={5} />
                            </Link>
                            <Link href="/rss" isExternal>
                                <Icon as={FaRss} w={5} h={5} />
                            </Link>
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}