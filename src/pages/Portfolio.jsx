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
    Grid,
    Link,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';
import { FaArrowRight, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    // Configuración de tema claro
    const sectionBg = "white";
    const altSectionBg = "gray.50";
    const accentColor = "#fc0341";
    const textColor = "gray.700";
    const headingColor = "gray.800";

    // Proyectos por categoría
    const projects = {
        software: [
            {
                id: 1,
                title: "Construlópolis",
                image: "https://placehold.co/600x400/333/teal?text=Construlopolis",
                description: "Sistema de gestión para empresas constructoras",
                link: "#"
            }
        ],
        apps: [
            {
                id: 2,
                title: "Guía Turística de Chiapas",
                image: "https://placehold.co/600x400/eee/green?text=Chiapas",
                description: "Aplicación móvil con información turística de Chiapas",
                link: "#"
            }
        ],
        games: [
            {
                id: 3,
                title: "En construcción",
                image: "https://placehold.co/600x400/f4f4f4/orange?text=Game",
                description: "Videojuego en desarrollo",
                link: "#"
            }
        ]
    };

    // Categorías
    const categories = [
        { id: "todos", label: "Todo" },
        { id: "software", label: "Software" },
        { id: "apps", label: "Apps" },
        { id: "games", label: "Games" }
    ];

    // Componente de tarjeta de proyecto
    const ProjectCard = ({ project }) => {
        return (
            <Box
                borderRadius="md"
                overflow="hidden"
                bg="white"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                    transform: "translateY(-10px)",
                    boxShadow: "xl"
                }}
            >
                <Box position="relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        w="100%"
                        h="220px"
                        objectFit="cover"
                    />
                    <Flex
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bg="blackAlpha.600"
                        opacity="0"
                        transition="all 0.3s"
                        justifyContent="center"
                        alignItems="center"
                        _groupHover={{ opacity: 1 }}
                    >
                        <Button
                            colorScheme="red"
                            rightIcon={<FaSearch />}
                            size="md"
                        >
                            Ver detalles
                        </Button>
                    </Flex>
                </Box>
                <Box p={4}>
                    <Heading as="h3" size="md" mb={2}>
                        {project.title}
                    </Heading>
                    <Text color={textColor} mb={3} fontSize="sm">
                        {project.description}
                    </Text>
                    <Link
                        href={project.link}
                        color={accentColor}
                        fontWeight="medium"
                        fontSize="sm"
                        display="flex"
                        alignItems="center"
                    >
                        Ver proyecto <FaExternalLinkAlt size="12" style={{ marginLeft: '6px' }} />
                    </Link>
                </Box>
            </Box>
        );
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box
                py={16}
                bg={sectionBg}
                position="relative"
                backgroundImage="url('https://placehold.co/1600x400/f7f7f7/ccc?text=Portfolio')"
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.400"
                />
                <Container maxW="container.xl" position="relative" zIndex="1">
                    <VStack spacing={4} textAlign="center" color="white">
                        <Heading
                            as="h1"
                            size="2xl"
                            fontWeight="bold"
                            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                        >
                            Nuestro Portafolio
                        </Heading>
                        <Text fontSize="xl" maxW="container.md" mx="auto">
                            Conoce algunos de nuestros trabajos más destacados
                        </Text>
                        <Divider width="100px" borderColor="white" borderWidth="4px" opacity="1" my={4} />
                    </VStack>
                </Container>
            </Box>

            {/* Últimos Proyectos */}
            <Box py={16} bg={sectionBg}>
                <Container maxW="container.xl">
                    <VStack spacing={8} mb={10}>
                        <HStack justifyContent="space-between" w="full">
                            <Heading as="h2" size="xl" color={headingColor}>
                                Últimos Proyectos
                            </Heading>
                            <HStack spacing={4}>
                                {categories.slice(1).map(category => (
                                    <Link
                                        key={category.id}
                                        href="#"
                                        fontWeight="medium"
                                        color="gray.600"
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                        _hover={{ textDecoration: 'none', color: accentColor }}
                                    >
                                        {category.label}
                                    </Link>
                                ))}
                                <Link
                                    href="#"
                                    fontWeight="medium"
                                    color="gray.600"
                                    _hover={{ textDecoration: 'none', color: accentColor }}
                                >
                                    Todo
                                </Link>
                            </HStack>
                        </HStack>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" alignSelf="flex-start" />

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="full">
                            {[...projects.software, ...projects.apps].map(project => (
                                <Box key={project.id} role="group">
                                    <ProjectCard project={project} />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* Sección Software */}
            <Box py={12} bg={altSectionBg}>
                <Container maxW="container.xl">
                    <VStack spacing={8} mb={10} align="flex-start">
                        <Heading as="h2" size="xl" color={headingColor}>
                            Software
                        </Heading>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" />

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="full">
                            {projects.software.map(project => (
                                <Box key={project.id} role="group">
                                    <ProjectCard project={project} />
                                </Box>
                            ))}
                        </SimpleGrid>

                        <Box alignSelf="flex-end">
                            <Link
                                href="#"
                                color={accentColor}
                                fontWeight="bold"
                                display="flex"
                                alignItems="center"
                            >
                                ver Todo <FaArrowRight style={{ marginLeft: '6px' }} />
                            </Link>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* Sección Apps */}
            <Box py={12} bg={sectionBg}>
                <Container maxW="container.xl">
                    <VStack spacing={8} mb={10} align="flex-start">
                        <Heading as="h2" size="xl" color={headingColor}>
                            Apps
                        </Heading>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" />

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="full">
                            {projects.apps.map(project => (
                                <Box key={project.id} role="group">
                                    <ProjectCard project={project} />
                                </Box>
                            ))}
                        </SimpleGrid>

                        <Box alignSelf="flex-end">
                            <Link
                                href="#"
                                color={accentColor}
                                fontWeight="bold"
                                display="flex"
                                alignItems="center"
                            >
                                ver Todo <FaArrowRight style={{ marginLeft: '6px' }} />
                            </Link>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* Sección Games */}
            <Box py={12} bg={altSectionBg}>
                <Container maxW="container.xl">
                    <VStack spacing={8} mb={10} align="flex-start">
                        <Heading as="h2" size="xl" color={headingColor}>
                            Games
                        </Heading>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" />

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} w="full">
                            {projects.games.map(project => (
                                <Box key={project.id} role="group">
                                    <ProjectCard project={project} />
                                </Box>
                            ))}
                        </SimpleGrid>

                        <Box alignSelf="flex-end">
                            <Link
                                href="#"
                                color={accentColor}
                                fontWeight="bold"
                                display="flex"
                                alignItems="center"
                            >
                                ver Todo <FaArrowRight style={{ marginLeft: '6px' }} />
                            </Link>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box py={14} bg={accentColor} color="white">
                <Container maxW="container.xl" textAlign="center">
                    <VStack spacing={6}>
                        <Heading as="h2" size="xl">
                            ¿Quieres un proyecto personalizado?
                        </Heading>
                        <Text fontSize="lg" maxW="container.md" mx="auto">
                            Contáctanos para discutir cómo podemos ayudarte a hacer realidad tu proyecto.
                        </Text>
                        <Button
                            bg="white"
                            color={accentColor}
                            size="lg"
                            px={8}
                            mt={4}
                            _hover={{ bg: 'gray.100' }}
                        >
                            Solicitar cotización
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default Portfolio;