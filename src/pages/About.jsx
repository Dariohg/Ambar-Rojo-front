import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Image,
    VStack,
    HStack,
    Divider,
    Button,
    Icon,
    Badge,
    Grid,
    GridItem
} from '@chakra-ui/react';
import { FaCode, FaMobileAlt, FaGamepad, FaPalette, FaLaptopCode, FaDatabase, FaUnity, FaAngleRight } from 'react-icons/fa';

const About = () => {
    // Configuración de tema claro para todas las secciones
    const bgGradient = "linear-gradient(to right, rgba(252, 3, 65, 0.05), rgba(252, 3, 65, 0.02))";
    const sectionBg = "white"; // Fondo blanco para secciones principales
    const altSectionBg = "gray.50"; // Fondo gris muy claro para alternar secciones
    const accentColor = "#fc0341"; // Color de acento para elementos destacados

    const tools = [
        { name: "Titanium", icon: FaMobileAlt, description: "Desarrollo de aplicaciones móviles" },
        { name: "HTML5", icon: FaCode, description: "Desarrollo web frontend" },
        { name: "Java", icon: FaLaptopCode, description: "Desarrollo multiplataforma" },
        { name: "Unity", icon: FaUnity, description: "Desarrollo de videojuegos" },
        { name: ".NET", icon: FaLaptopCode, description: "Aplicaciones empresariales" },
        { name: "PHP", icon: FaCode, description: "Desarrollo web backend" },
        { name: "SQL Server", icon: FaDatabase, description: "Gestión de bases de datos" },
        { name: "PSP", icon: FaGamepad, description: "Procesos de desarrollo" }
    ];

    return (
        <Box>
            {/* Hero Section - Quiénes Somos */}
            <Box
                py={16}
                bg={sectionBg}
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgGradient={bgGradient}
                    zIndex="0"
                />

                <Container maxW="container.xl" position="relative" zIndex="1">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        <Box
                            data-aos="fade-right"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                w="300px"
                                h="300px"
                                borderRadius="full"
                                bg="rgba(252, 3, 65, 0.05)"
                                top="-40px"
                                left="-40px"
                                zIndex="0"
                            />
                            <Box
                                position="relative"
                                zIndex="1"
                                transform="rotate(-5deg)"
                                transition="all 0.3s"
                                _hover={{ transform: "rotate(0deg)" }}
                            >
                                <Image
                                    src="https://placehold.co/600x400/fc0341/white?text=Logo"
                                    alt="Ambar Rojo Logo"
                                    w="80%"
                                    mx="auto"
                                    borderRadius="xl"
                                    boxShadow="lg"
                                />
                            </Box>
                            <Box
                                position="absolute"
                                borderRadius="lg"
                                border="2px dashed"
                                borderColor={accentColor}
                                w="120px"
                                h="120px"
                                bottom="-20px"
                                right="20px"
                                opacity="0.4"
                                zIndex="0"
                            />
                        </Box>

                        <VStack align="flex-start" spacing={8} data-aos="fade-left">
                            <Badge
                                colorScheme="red"
                                fontSize="md"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                Nuestro equipo
                            </Badge>
                            <Heading
                                as="h1"
                                size="2xl"
                                position="relative"
                                color="gray.800"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '100px',
                                    height: '6px',
                                    bg: accentColor,
                                    marginTop: '16px',
                                    borderRadius: 'full'
                                }}
                            >
                                ¿Quiénes somos?
                            </Heading>
                            <Text fontSize="lg" color="gray.700" lineHeight="tall">
                                Ambar Rojo Studios, es una empresa cuyo objetivo es impulsar la industria creativa, como animación 2D, 3D, y
                                videojuegos, que a través de este espacio de encuentro se busca conjuntar el talento humano, dispuesto a intercambiar
                                conocimientos, ideas y técnicas.
                            </Text>
                            <Box>
                                <Button
                                    rightIcon={<FaAngleRight />}
                                    colorScheme="red"
                                    variant="outline"
                                    borderWidth="2px"
                                    size="lg"
                                    _hover={{
                                        bg: "rgba(252, 3, 65, 0.1)",
                                        transform: "translateY(-3px)"
                                    }}
                                    transition="all 0.3s"
                                >
                                    Conoce nuestra historia
                                </Button>
                            </Box>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Nuestras Herramientas - Con Grid Visual */}
            <Box
                py={20}
                bg={altSectionBg}
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top="50%"
                    right="-150px"
                    w="300px"
                    h="300px"
                    borderRadius="full"
                    bg="rgba(252, 3, 65, 0.03)"
                    zIndex="0"
                />

                <Container maxW="container.xl" position="relative" zIndex="1">
                    <VStack spacing={16} align="stretch">
                        <VStack spacing={4} align="center" data-aos="fade-up">
                            <Heading
                                as="h2"
                                size="xl"
                                textAlign="center"
                                position="relative"
                                color="gray.800"
                                display="inline-block"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '80px',
                                    height: '4px',
                                    bg: accentColor,
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderRadius: 'full'
                                }}
                            >
                                Nuestras herramientas
                            </Heading>
                            <Text fontSize="lg" color="gray.600" maxW="container.md" textAlign="center" mt={8}>
                                Utilizamos las tecnologías más avanzadas para ofrecer los mejores productos y servicios a nuestros clientes.
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8} mt={8}>
                            {tools.map((tool, index) => (
                                <Flex
                                    key={index}
                                    direction="column"
                                    align="center"
                                    p={6}
                                    bg={sectionBg}
                                    borderRadius="xl"
                                    boxShadow="sm"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "translateY(-5px)",
                                        boxShadow: "md"
                                    }}
                                    textAlign="center"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <Flex
                                        w="60px"
                                        h="60px"
                                        bg={accentColor}
                                        color="white"
                                        borderRadius="full"
                                        justify="center"
                                        align="center"
                                        mb={4}
                                    >
                                        <Icon as={tool.icon} fontSize="xl" />
                                    </Flex>
                                    <Heading as="h3" size="md" mb={2} color="gray.800">
                                        {tool.name}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.600">
                                        {tool.description}
                                    </Text>
                                </Flex>
                            ))}
                        </SimpleGrid>

                        <Flex justify="flex-end" mt={8}>
                            <Box
                                position="relative"
                                w="300px"
                                h="300px"
                                data-aos="fade-left"
                            >
                                <Box
                                    position="absolute"
                                    borderRadius="full"
                                    border="1px dashed gray"
                                    w="300px"
                                    h="300px"
                                />
                                <Flex
                                    position="absolute"
                                    borderRadius="full"
                                    bg="#333333"
                                    w="250px"
                                    h="250px"
                                    top="25px"
                                    left="25px"
                                    justifyContent="center"
                                    alignItems="center"
                                    boxShadow="lg"
                                    transition="all 0.5s"
                                    _hover={{
                                        transform: "scale(1.05)"
                                    }}
                                >
                                    <Image
                                        src="https://placehold.co/100x100/white/333?text=Unity"
                                        alt="Unity Logo"
                                        w="100px"
                                        h="100px"
                                    />
                                </Flex>
                            </Box>
                        </Flex>
                    </VStack>
                </Container>
            </Box>

            {/* Únete a Nosotros - Con diseño mejorado */}
            <Box
                py={16}
                bg={sectionBg}
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgGradient={bgGradient}
                    zIndex="0"
                />

                <Container maxW="container.xl" position="relative" zIndex="1">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        <Flex justify="center" data-aos="zoom-in">
                            <Box position="relative" w="300px" h="300px">
                                <Box
                                    position="absolute"
                                    borderRadius="full"
                                    border="2px dashed"
                                    borderColor={accentColor}
                                    opacity="0.3"
                                    w="300px"
                                    h="300px"
                                />
                                <Flex
                                    position="absolute"
                                    borderRadius="full"
                                    bg={accentColor}
                                    w="250px"
                                    h="250px"
                                    top="25px"
                                    left="25px"
                                    justifyContent="center"
                                    alignItems="center"
                                    boxShadow="lg"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "scale(1.05)"
                                    }}
                                >
                                    <Image
                                        src="https://placehold.co/100x100/white/fc0341?text=Join"
                                        alt="Join Us"
                                        w="100px"
                                        h="100px"
                                    />
                                </Flex>
                            </Box>
                        </Flex>

                        <VStack align="flex-start" spacing={8} data-aos="fade-left">
                            <Badge
                                colorScheme="red"
                                fontSize="md"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                Colabora con nosotros
                            </Badge>
                            <Heading
                                as="h2"
                                size="xl"
                                color="gray.800"
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '100px',
                                    height: '6px',
                                    bg: accentColor,
                                    marginTop: '16px',
                                    borderRadius: 'full'
                                }}
                            >
                                Únete a nosotros
                            </Heading>
                            <Text fontSize="lg" color="gray.700" lineHeight="tall">
                                Si estás interesado en participar y formar parte de esta gran iniciativa, contáctanos y aporta tus conocimientos en
                                Programación, Diseño, Animación, Creación, Edición de Audio, Guión, Modelado 3D, etc.
                            </Text>

                            <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full">
                                <GridItem>
                                    <HStack spacing={2}>
                                        <Icon as={FaCode} color={accentColor} />
                                        <Text>Programación</Text>
                                    </HStack>
                                </GridItem>
                                <GridItem>
                                    <HStack spacing={2}>
                                        <Icon as={FaPalette} color={accentColor} />
                                        <Text>Diseño</Text>
                                    </HStack>
                                </GridItem>
                                <GridItem>
                                    <HStack spacing={2}>
                                        <Icon as={FaGamepad} color={accentColor} />
                                        <Text>Animación</Text>
                                    </HStack>
                                </GridItem>
                                <GridItem>
                                    <HStack spacing={2}>
                                        <Icon as={FaLaptopCode} color={accentColor} />
                                        <Text>Modelado 3D</Text>
                                    </HStack>
                                </GridItem>
                            </Grid>

                            <Button
                                colorScheme="red"
                                size="lg"
                                _hover={{
                                    transform: "translateY(-3px)",
                                    boxShadow: "lg"
                                }}
                                transition="all 0.3s"
                            >
                                Contáctanos
                            </Button>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Misión y Visión - Diseño con tarjetas */}
            <Box
                py={20}
                bg={altSectionBg}
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    bottom="-100px"
                    left="-100px"
                    w="300px"
                    h="300px"
                    borderRadius="full"
                    bg="rgba(252, 3, 65, 0.03)"
                    zIndex="0"
                />

                <Container maxW="container.xl" position="relative" zIndex="1">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
                        <VStack align="stretch" spacing={10} data-aos="fade-right">
                            <Box
                                bg={sectionBg}
                                p={8}
                                borderRadius="xl"
                                boxShadow="md"
                                position="relative"
                                overflow="hidden"
                            >
                                <Box
                                    position="absolute"
                                    w="80px"
                                    h="80px"
                                    borderRadius="full"
                                    bg="rgba(252, 3, 65, 0.1)"
                                    top="-20px"
                                    right="-20px"
                                    zIndex="0"
                                />

                                <Heading
                                    as="h2"
                                    size="lg"
                                    mb={4}
                                    color={accentColor}
                                >
                                    Misión
                                </Heading>
                                <Divider w="60px" borderColor={accentColor} borderWidth="3px" mb={6} />
                                <Text fontSize="md" color="gray.700" lineHeight="tall" position="relative" zIndex="1">
                                    Desarrollar productos y servicios con calidad creativa en el área de medios interactivos, capacitación, desarrollo de
                                    software y aplicaciones móviles, procurando que la responsabilidad y la innovación sean factores clave que motiven a
                                    nuestro equipo de trabajo y a nuestros clientes a establecer lazos duraderos.
                                </Text>
                            </Box>

                            <Box
                                bg={sectionBg}
                                p={8}
                                borderRadius="xl"
                                boxShadow="md"
                                position="relative"
                                overflow="hidden"
                            >
                                <Box
                                    position="absolute"
                                    w="80px"
                                    h="80px"
                                    borderRadius="full"
                                    bg="rgba(252, 3, 65, 0.1)"
                                    bottom="-20px"
                                    left="-20px"
                                    zIndex="0"
                                />

                                <Heading
                                    as="h2"
                                    size="lg"
                                    mb={4}
                                    color={accentColor}
                                >
                                    Visión
                                </Heading>
                                <Divider w="60px" borderColor={accentColor} borderWidth="3px" mb={6} />
                                <Text fontSize="md" color="gray.700" lineHeight="tall" position="relative" zIndex="1">
                                    Lograr el liderazgo y reconocimiento regional en el desarrollo de medios interactivos, software y aplicaciones móviles,
                                    adaptándolos a los cambios continuos en base a la innovación, destacándonos por nuestra calidad y eficiencia en el
                                    diseño.
                                </Text>
                            </Box>
                        </VStack>

                        <Flex justify="center" data-aos="zoom-in">
                            <Box position="relative" w="350px" h="350px">
                                <Box
                                    position="absolute"
                                    borderRadius="full"
                                    border="2px dashed"
                                    borderColor="gray.300"
                                    w="350px"
                                    h="350px"
                                />
                                <Flex
                                    position="absolute"
                                    borderRadius="full"
                                    bg="#333333"
                                    w="300px"
                                    h="300px"
                                    top="25px"
                                    left="25px"
                                    justifyContent="center"
                                    alignItems="center"
                                    boxShadow="lg"
                                    transition="all 0.5s"
                                    _hover={{
                                        transform: "scale(1.05)"
                                    }}
                                >
                                    <Box
                                        borderRadius="full"
                                        border="3px solid white"
                                        w="170px"
                                        h="170px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        transition="all 0.5s"
                                        _hover={{
                                            borderWidth: "5px"
                                        }}
                                    >
                                        <Box
                                            borderRadius="full"
                                            bg="white"
                                            w="70px"
                                            h="70px"
                                            transition="all 0.5s"
                                            _hover={{
                                                transform: "scale(1.1)"
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
};

export default About;