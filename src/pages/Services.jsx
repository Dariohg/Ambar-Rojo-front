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
    Link
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
    // Configuración de tema claro
    const sectionBg = "white";
    const altSectionBg = "gray.50";
    const accentColor = "#fc0341";
    const textColor = "gray.700";
    const headingColor = "gray.800";

    return (
        <Box>
            {/* Sección Apps Multiplataforma */}
            <Box py={16} bg={sectionBg}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        <Image
                            src="https://placehold.co/600x400/eee/ccc?text=Apps"
                            alt="Apps Móviles"
                            borderRadius="xl"
                            boxShadow="lg"
                            transition="all 0.3s"
                            _hover={{ transform: "scale(1.02)" }}
                        />
                        <VStack align="flex-start" spacing={6}>
                            <Heading
                                as="h1"
                                size="xl"
                                color={headingColor}
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '80px',
                                    height: '4px',
                                    bg: accentColor,
                                    marginTop: '16px',
                                    borderRadius: 'full'
                                }}
                            >
                                APPS MULTIPLATAFORMA
                            </Heading>
                            <Text fontSize="md" color={textColor}>
                                En informática, multi-plataforma, es un atributo conferido a los programas informáticos o los métodos de cálculo y los
                                conceptos que se ejecutan e interoperan en múltiples plataformas informáticas.
                            </Text>
                            <Text fontSize="md" color={textColor}>
                                Software multiplataforma puede dividirse en dos tipos: requiere una compilación individual para cada plataforma que le da
                                soporte, y el otro se puede ejecutar directamente en cualquier plataforma sin preparación especial.
                            </Text>
                            <Button
                                colorScheme="red"
                                variant="outline"
                                borderWidth="2px"
                                rightIcon={<FaArrowRight />}
                                _hover={{
                                    bg: "rgba(252, 3, 65, 0.1)",
                                }}
                                transition="all 0.3s"
                            >
                                Solicitar información
                            </Button>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Sección Videojuegos */}
            <Box py={16} bg={altSectionBg}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        <VStack align="flex-start" spacing={6}>
                            <Heading
                                as="h2"
                                size="xl"
                                color={headingColor}
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '80px',
                                    height: '4px',
                                    bg: accentColor,
                                    marginTop: '16px',
                                    borderRadius: 'full'
                                }}
                            >
                                VIDEOJUEGOS
                            </Heading>
                            <Text fontSize="md" color={textColor}>
                                Un videojuego o juego de videos es un conjunto de obras artísticas, literarias y científicas creadas por un autor o en
                                colaboración por varios autores o colectivamente bajo la dirección de una persona natural o jurídica.
                            </Text>
                            <Text fontSize="md" color={textColor}>
                                Dichas obras son programadas posteriormente y compiladas gracias al software sin ser considerado videojuego como un
                                programa de ordenador ni como una obra visual, teniendo un tratamiento diferenciado.
                            </Text>
                            <Button
                                colorScheme="red"
                                variant="outline"
                                borderWidth="2px"
                                rightIcon={<FaArrowRight />}
                                _hover={{
                                    bg: "rgba(252, 3, 65, 0.1)",
                                }}
                                transition="all 0.3s"
                            >
                                Solicitar información
                            </Button>
                        </VStack>
                        <Flex justify="flex-end">
                            <Image
                                src="https://placehold.co/600x400/eee/ccc?text=Videojuegos"
                                alt="Videojuegos"
                                borderRadius="xl"
                                boxShadow="lg"
                                transition="all 0.3s"
                                _hover={{ transform: "scale(1.02)" }}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Sección Software */}
            <Box py={16} bg={sectionBg}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
                        <Image
                            src="https://placehold.co/600x400/eee/ccc?text=Software"
                            alt="Software"
                            borderRadius="xl"
                            boxShadow="lg"
                            transition="all 0.3s"
                            _hover={{ transform: "scale(1.02)" }}
                        />
                        <VStack align="flex-start" spacing={6}>
                            <Heading
                                as="h2"
                                size="xl"
                                color={headingColor}
                                position="relative"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    width: '80px',
                                    height: '4px',
                                    bg: accentColor,
                                    marginTop: '16px',
                                    borderRadius: 'full'
                                }}
                            >
                                SOFTWARE
                            </Heading>
                            <Text fontSize="md" color={textColor}>
                                Se conoce como software al equipamiento lógico o soporte lógico de un sistema informático, que comprende el conjunto
                                de los componentes lógicos necesarios que hacen posible la realización de tareas específicas, en contraposición a los
                                componentes físicos que son llamados hardware.
                            </Text>
                            <Text fontSize="md" color={textColor}>
                                Es el conjunto de los programas de cómputo, procedimientos, reglas, documentación y datos asociados, que forman parte
                                de las operaciones de un sistema de computación.
                            </Text>
                            <Button
                                colorScheme="red"
                                variant="outline"
                                borderWidth="2px"
                                rightIcon={<FaArrowRight />}
                                _hover={{
                                    bg: "rgba(252, 3, 65, 0.1)",
                                }}
                                transition="all 0.3s"
                            >
                                Solicitar información
                            </Button>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Sección Nuestras Ofertas - MEJORADA */}
            <Box py={16} bg={altSectionBg}>
                <Container maxW="container.xl">
                    {/* Encabezado */}
                    <VStack mb={12} spacing={4}>
                        <Heading
                            as="h2"
                            size="xl"
                            textAlign="center"
                            color="gray.800"
                        >
                            ¡ NUESTRAS OFERTAS !
                        </Heading>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" borderRadius="full" />
                    </VStack>

                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                        gap={6}
                    >
                        {/* Tarjeta 1 */}
                        <Box
                            width={{ base: '100%', md: '32%' }}
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                            overflow="hidden"
                            border="1px"
                            borderColor="gray.200"
                            display="flex"
                            flexDirection="column"
                        >
                            <Box
                                bg={accentColor}
                                py={4}
                                px={4}
                                color="white"
                                textAlign="center"
                            >
                                <Heading as="h3" fontSize="lg" fontWeight="bold">
                                    Paquetes de punto de venta y administración de inventarios
                                </Heading>
                            </Box>

                            <Box p={6} flex="1" display="flex" flexDirection="column">
                                <VStack align="flex-start" spacing={4} flex="1">
                                    <Text fontWeight="semibold">
                                        Punto de Venta Básico con equipo
                                    </Text>

                                    <Text fontWeight="semibold">
                                        Punto de Venta con Facturación Electrónica, sin equipo
                                    </Text>
                                </VStack>

                                <Box mt={4}>
                                    <Button
                                        w="100%"
                                        colorScheme="red"
                                        rightIcon={<FaArrowRight />}
                                        size="md"
                                        borderRadius="md"
                                    >
                                        Solicitar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        {/* Tarjeta 2 */}
                        <Box
                            width={{ base: '100%', md: '32%' }}
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                            overflow="hidden"
                            border="1px"
                            borderColor="gray.200"
                            display="flex"
                            flexDirection="column"
                        >
                            <Box
                                bg={accentColor}
                                py={4}
                                px={4}
                                color="white"
                                textAlign="center"
                            >
                                <Heading as="h3" fontSize="lg" fontWeight="bold">
                                    Paquete de Página Web y Capacitación de Interacción Web
                                </Heading>
                            </Box>

                            <Box p={6} flex="1" display="flex" flexDirection="column">
                                <VStack align="flex-start" spacing={3} flex="1">
                                    <Text fontWeight="semibold">
                                        Incluye:
                                    </Text>
                                    <Text pl={2}>- Consultoría (5 horas)</Text>
                                    <Text pl={2}>- Página Web (Diseño, desarrollo, dominio y hosting por 1 año)</Text>
                                    <Text pl={2}>- Asistencia técnica (3 meses)</Text>
                                    <Text pl={2}>- Curso de Interacción Web (Manejo de redes sociales 16 hrs)</Text>
                                </VStack>

                                <Box mt={4}>
                                    <Button
                                        w="100%"
                                        colorScheme="red"
                                        rightIcon={<FaArrowRight />}
                                        size="md"
                                        borderRadius="md"
                                    >
                                        Solicitar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        {/* Tarjeta 3 */}
                        <Box
                            width={{ base: '100%', md: '32%' }}
                            bg="white"
                            borderRadius="md"
                            boxShadow="sm"
                            overflow="hidden"
                            border="1px"
                            borderColor="gray.200"
                            display="flex"
                            flexDirection="column"
                        >
                            <Box
                                bg={accentColor}
                                py={4}
                                px={4}
                                color="white"
                                textAlign="center"
                            >
                                <Heading as="h3" fontSize="lg" fontWeight="bold">
                                    Paquete Curso de Desarrollo de Aplicaciones Móviles en Titanium
                                </Heading>
                            </Box>

                            <Box p={6} flex="1" display="flex" flexDirection="column">
                                <VStack align="flex-start" spacing={3} flex="1">
                                    <Text fontWeight="semibold">
                                        Incluye:
                                    </Text>
                                    <Text pl={2}>- Curso de 40 horas</Text>
                                    <Text pl={2}>- Asistencia técnica de 3 meses</Text>
                                </VStack>

                                <Box mt={4}>
                                    <Button
                                        w="100%"
                                        colorScheme="red"
                                        rightIcon={<FaArrowRight />}
                                        size="md"
                                        borderRadius="md"
                                    >
                                        Solicitar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>

                    {/* Enlace PDF */}
                    <Box
                        mt={10}
                        textAlign="center"
                    >
                        <Link
                            href="https://ambarrojostudios.com/resources/PaginasWebAmbarRojo.pdf"
                            color={accentColor}
                            fontWeight="medium"
                            isExternal
                        >
                            https://ambarrojostudios.com/resources/PaginasWebAmbarRojo.pdf
                        </Link>
                    </Box>
                </Container>
            </Box>

            {/* Sección CTA */}
            <Box py={14} bg={accentColor} color="white">
                <Container maxW="container.xl" textAlign="center">
                    <VStack spacing={6}>
                        <Heading as="h2" size="xl">
                            ¿Interesado en alguno de nuestros servicios?
                        </Heading>
                        <Text fontSize="lg" maxW="container.md" mx="auto">
                            Contáctanos para obtener más información o solicitar una cotización personalizada.
                        </Text>
                        <Button
                            bg="white"
                            color={accentColor}
                            size="lg"
                            px={8}
                            mt={4}
                            _hover={{ bg: 'gray.100' }}
                        >
                            Contáctanos
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default Services;