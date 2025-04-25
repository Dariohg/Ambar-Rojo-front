import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Button,
    Center,
    VStack,
    HStack,
    Icon,
    Divider
} from '@chakra-ui/react';
import { FaDesktop, FaMobile, FaGamepad, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    // Servicios
    const services = [
        {
            icon: FaDesktop,
            title: "Desarrollo de Software",
            description: "Desarrollo de Software a la medida, plataformas .Net, PHP. Metodología PSP.",
        },
        {
            icon: FaMobile,
            title: "Apps Móviles",
            description: "Desarrollo de Apps nativas para iOS & Android con Titanium Appcelerator.",
        },
        {
            icon: FaGamepad,
            title: "Videojuegos",
            description: "Próximamente, empresa incubada en el programa de Playstation.",
        }
    ];

    // Noticias
    const newsItems = [
        {
            category: "SOFTWARE",
            title: "Cómo cifrar los archivos que almacenamos en nuestra computadora",
        },
        {
            category: "SOFTWARE",
            title: "Mozilla lanzará preview de la versión Metro de Firefox en diciembre",
        },
        {
            category: "APP",
            title: "Google bloquea la aplicación de YouTube para Windows Phone",
        },
        {
            category: "GAME",
            title: "PlayStation Vita reduce su precio a 199 dólares/euros",
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                bg="linear-gradient(135deg, #181818 0%, #2d2d2d 100%)"
                color="white"
                py={20}
            >
                <Container maxW="container.xl">
                    <Box maxW="container.md">
                        <Heading
                            as="h1"
                            size="3xl"
                            fontWeight="bold"
                            lineHeight="1.2"
                            mb={6}
                        >
                            Transformamos ideas en{' '}
                            <Box as="span" color="#fc0341">
                                experiencias digitales
                            </Box>
                        </Heading>
                        <Text fontSize="xl" mb={8} color="gray.300">
                            Empresa certificada en desarrollo de aplicaciones móviles, software a medida,
                            animación y videojuegos con calidad y profesionalismo.
                        </Text>
                        <HStack spacing={4}>
                            <Button
                                bg="#fc0341"
                                color="white"
                                size="lg"
                                px={8}
                                _hover={{ bg: '#d0032f' }}
                            >
                                Nuestros Servicios
                            </Button>
                            <Button
                                variant="outline"
                                color="white"
                                borderColor="white"
                                size="lg"
                                px={8}
                                _hover={{ bg: 'whiteAlpha.200' }}
                            >
                                Contáctanos
                            </Button>
                        </HStack>
                    </Box>
                </Container>
            </Box>

            {/* Sección de Servicios - MEJORADA */}
            <Box py={10} bg="white">
                <Container maxW="container.xl">
                    <Center>
                        <Heading as="h2" size="xl" mb={8} textAlign="center">
                            Soluciones digitales para todo tipo de necesidades
                        </Heading>
                    </Center>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                p={8}
                                textAlign="center"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="lg"
                                bg="white"
                                boxShadow="sm"
                                transition="all 0.3s"
                                _hover={{ boxShadow: "md" }}
                            >
                                <Center mb={5}>
                                    <Flex
                                        w="80px"
                                        h="80px"
                                        bg="#fc0341"
                                        borderRadius="full"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Icon as={service.icon} color="white" fontSize="2xl" />
                                    </Flex>
                                </Center>
                                <Heading as="h3" size="lg" mb={4}>
                                    {service.title}
                                </Heading>
                                <Text color="gray.600" mb={6}>
                                    {service.description}
                                </Text>
                                <Button
                                    variant="outline"
                                    colorScheme="red"
                                    rightIcon={<FaArrowRight />}
                                    borderColor="#fc0341"
                                    color="#fc0341"
                                    _hover={{
                                        bg: "transparent",
                                        transform: "translateX(5px)"
                                    }}
                                >
                                    Leer más
                                </Button>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Sección de Noticias - MEJORADA */}
            <Box py={16} bg="gray.50">
                <Container maxW="container.xl">
                    <VStack spacing={2} mb={10} textAlign="center">
                        <Text color="#fc0341" fontWeight="bold" textTransform="uppercase">
                            ACTUALIDAD
                        </Text>
                        <Heading as="h2" size="2xl" mb={2}>
                            Últimas Noticias
                        </Heading>
                        <Text color="gray.600" fontSize="lg" maxW="container.md" mx="auto">
                            Mantente al día con nuestras actualizaciones
                        </Text>
                        <Box w="50px" h="4px" bg="#fc0341" mt={4} />
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mt={10}>
                        {newsItems.map((item, index) => (
                            <Box
                                key={index}
                                bg="white"
                                p={0}
                                borderRadius="md"
                                overflow="hidden"
                                boxShadow="sm"
                                transition="all 0.3s"
                                _hover={{ transform: "translateY(-5px)", boxShadow: "md" }}
                            >
                                <Box
                                    bg="#fc0341"
                                    color="white"
                                    p={5}
                                    textAlign="center"
                                >
                                    <Text fontWeight="bold">{item.category}</Text>
                                </Box>
                                <Box p={6}>
                                    <Text fontWeight="medium" mb={4}>
                                        {item.title}
                                    </Text>
                                    <HStack>
                                        <Button
                                            variant="link"
                                            color="#fc0341"
                                            rightIcon={<FaArrowRight />}
                                            fontWeight="bold"
                                            fontSize="sm"
                                            _hover={{ textDecoration: "none" }}
                                        >
                                            Leer más
                                        </Button>
                                    </HStack>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* About Section */}
            <Box py={16}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
                        <VStack align="flex-start" spacing={6}>
                            <Heading as="h2" size="xl">
                                ¿Qué es Ambar Rojo?
                            </Heading>
                            <Divider w="50px" borderColor="#fc0341" borderWidth="2px" alignSelf="flex-start" />
                            <Text color="gray.600">
                                El ámbar, árabe o succino (del latín succinum) es una piedra preciosa hecha de resina vegetal fosilizada
                                proveniente principalmente de restos de coníferas y algunas angiospermas. De entre todos los colores
                                del ámbar, el ámbar rojo es de los más raros, cotizados y apreciados, también de los más hermosos.
                                El ámbar rojo sólamente se encuentra en 2 lugares del mundo, uno de ellos es Chiapas.
                            </Text>
                            <Button
                                bg="#fc0341"
                                color="white"
                                _hover={{ bg: '#d0032f' }}
                            >
                                Conócenos más
                            </Button>
                        </VStack>
                        <Flex justifyContent="center" alignItems="center">
                            <Box
                                w="full"
                                h="300px"
                                bg="gray.200"
                                borderRadius="lg"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                boxShadow="lg"
                            >
                                <Text fontWeight="bold" color="gray.400">Imagen Corporativa</Text>
                            </Box>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Call to Action */}
            <Box py={14} bg="#fc0341" color="white">
                <Container maxW="container.xl" textAlign="center">
                    <VStack spacing={6}>
                        <Heading as="h2" size="xl">
                            ¿Te interesa nuestros servicios?
                        </Heading>
                        <Text fontSize="lg" maxW="container.md" mx="auto">
                            Contáctanos hoy mismo y cuéntanos sobre tu proyecto. Estaremos encantados de ayudarte a llevarlo al siguiente nivel.
                        </Text>
                        <Button
                            bg="white"
                            color="#fc0341"
                            size="lg"
                            px={8}
                            mt={4}
                            _hover={{ bg: 'gray.100' }}
                        >
                            Escríbenos
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;