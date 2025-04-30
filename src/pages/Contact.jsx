import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Select,
    Divider,
    Icon,
    useToast,
    Flex,
    Image
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    // Color scheme
    const accentColor = "#fc0341";
    const sectionBg = "white";
    const altSectionBg = "gray.50";

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        state: 'Chiapas',
        phone: '',
        message: ''
    });

    // Form validation state
    const [errors, setErrors] = useState({});

    // Toast for form submission
    const toast = useToast();

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
        if (!formData.email.trim()) {
            newErrors.email = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Correo electrónico inválido";
        }
        if (!formData.city.trim()) newErrors.city = "La ciudad es requerida";
        if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Here you would typically send the form data to a server
            console.log("Form data submitted:", formData);

            // Show success message
            toast({
                title: "Mensaje enviado",
                description: "Nos pondremos en contacto contigo pronto.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                city: '',
                state: 'Chiapas',
                phone: '',
                message: ''
            });
        } else {
            // Show error message
            toast({
                title: "Error en el formulario",
                description: "Por favor completa todos los campos requeridos.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    // List of Mexican states
    const mexicanStates = [
        "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
        "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
        "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
        "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
        "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                py={16}
                bg={accentColor}
                color="white"
                position="relative"
                backgroundImage="url('https://placehold.co/1600x400/fc0341/white?text=Contacto')"
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg={`${accentColor}CC`}
                />
                <Container maxW="container.xl" position="relative" zIndex="1">
                    <VStack spacing={4} textAlign="center">
                        <Heading
                            as="h1"
                            size="2xl"
                            fontWeight="bold"
                            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                        >
                            Contáctanos
                        </Heading>
                        <Text fontSize="xl" maxW="container.md" mx="auto">
                            Estamos listos para responder a tus preguntas y ayudarte con tu próximo proyecto
                        </Text>
                        <Divider width="100px" borderColor="white" borderWidth="4px" opacity="1" my={4} />
                    </VStack>
                </Container>
            </Box>

            {/* Contact Form Section */}
            <Box py={16} bg={sectionBg}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
                        {/* Contact Form */}
                        <Box
                            p={8}
                            borderRadius="lg"
                            boxShadow="md"
                            bg="white"
                            borderWidth="1px"
                            borderColor="gray.200"
                        >
                            <VStack spacing={6} align="flex-start" w="full">
                                <Heading as="h2" size="xl" color="gray.800">
                                    Información de Contacto
                                </Heading>
                                <Divider w="100px" borderColor={accentColor} borderWidth="4px" />

                                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                    <VStack spacing={4} align="flex-start" w="full">
                                        <FormControl isRequired isInvalid={errors.name}>
                                            <FormLabel htmlFor="name">Nombre</FormLabel>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Tu nombre completo"
                                                value={formData.name}
                                                onChange={handleChange}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            />
                                        </FormControl>

                                        <FormControl isRequired isInvalid={errors.email}>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Tu correo electrónico"
                                                value={formData.email}
                                                onChange={handleChange}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            />
                                        </FormControl>

                                        <FormControl isRequired isInvalid={errors.city}>
                                            <FormLabel htmlFor="city">Ciudad</FormLabel>
                                            <Input
                                                id="city"
                                                name="city"
                                                placeholder="Tu ciudad"
                                                value={formData.city}
                                                onChange={handleChange}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel htmlFor="state">Estado</FormLabel>
                                            <Select
                                                id="state"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            >
                                                {mexicanStates.map(state => (
                                                    <option key={state} value={state}>{state}</option>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel htmlFor="phone">Teléfono</FormLabel>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                placeholder="Tu número de teléfono"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            />
                                        </FormControl>

                                        <FormControl isRequired isInvalid={errors.message}>
                                            <FormLabel htmlFor="message">Mensaje</FormLabel>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="¿Cómo podemos ayudarte?"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                borderColor="gray.300"
                                                _hover={{ borderColor: accentColor }}
                                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                            />
                                        </FormControl>

                                        <Button
                                            type="submit"
                                            colorScheme="red"
                                            bg={accentColor}
                                            size="lg"
                                            width={{ base: "full", md: "auto" }}
                                            px={10}
                                            _hover={{ bg: 'red.700' }}
                                            _active={{ bg: 'red.800' }}
                                        >
                                            Enviar
                                        </Button>
                                    </VStack>
                                </form>
                            </VStack>
                        </Box>

                        {/* Contact Information */}
                        <VStack spacing={10} align="flex-start">
                            {/* Contact details */}
                            <Box>
                                <Heading as="h2" size="xl" color="gray.800" mb={6}>
                                    Datos de Contacto
                                </Heading>
                                <Divider w="100px" borderColor={accentColor} borderWidth="4px" mb={8} />

                                <VStack spacing={6} align="flex-start">
                                    <HStack spacing={4}>
                                        <Flex
                                            w="50px"
                                            h="50px"
                                            bg={accentColor}
                                            color="white"
                                            borderRadius="full"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Icon as={FaMapMarkerAlt} boxSize={5} />
                                        </Flex>
                                        <VStack align="flex-start" spacing={1}>
                                            <Text fontWeight="bold" fontSize="lg">Dirección</Text>
                                            <Text color="gray.600">Av. Principal #123, Col. Centro</Text>
                                            <Text color="gray.600">Tuxtla Gutiérrez, Chiapas, México</Text>
                                        </VStack>
                                    </HStack>

                                    <HStack spacing={4}>
                                        <Flex
                                            w="50px"
                                            h="50px"
                                            bg={accentColor}
                                            color="white"
                                            borderRadius="full"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Icon as={FaPhone} boxSize={5} />
                                        </Flex>
                                        <VStack align="flex-start" spacing={1}>
                                            <Text fontWeight="bold" fontSize="lg">Teléfono</Text>
                                            <Text color="gray.600">+52 (961) 123-4567</Text>
                                            <Text color="gray.600">Lun - Vie: 9:00 AM - 6:00 PM</Text>
                                        </VStack>
                                    </HStack>

                                    <HStack spacing={4}>
                                        <Flex
                                            w="50px"
                                            h="50px"
                                            bg={accentColor}
                                            color="white"
                                            borderRadius="full"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Icon as={FaEnvelope} boxSize={5} />
                                        </Flex>
                                        <VStack align="flex-start" spacing={1}>
                                            <Text fontWeight="bold" fontSize="lg">Email</Text>
                                            <Text color="gray.600">contacto@ambarrojostudios.com</Text>
                                            <Text color="gray.600">soporte@ambarrojostudios.com</Text>
                                        </VStack>
                                    </HStack>

                                    <HStack spacing={4}>
                                        <Flex
                                            w="50px"
                                            h="50px"
                                            bg={accentColor}
                                            color="white"
                                            borderRadius="full"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Icon as={FaClock} boxSize={5} />
                                        </Flex>
                                        <VStack align="flex-start" spacing={1}>
                                            <Text fontWeight="bold" fontSize="lg">Horario de Atención</Text>
                                            <Text color="gray.600">Lunes a Viernes: 9:00 AM - 6:00 PM</Text>
                                            <Text color="gray.600">Sábados: 9:00 AM - 1:00 PM</Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </Box>

                            {/* Email contact image */}
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                w="full"
                                mt={8}
                                p={6}
                                bg="gray.50"
                                borderRadius="lg"
                                direction="column"
                            >
                                <Box
                                    position="relative"
                                    width="200px"
                                    height="200px"
                                    mb={4}
                                >
                                    <Box
                                        position="absolute"
                                        width="200px"
                                        height="200px"
                                        borderRadius="full"
                                        bg={`${accentColor}20`}
                                    />
                                    <Flex
                                        position="absolute"
                                        width="180px"
                                        height="180px"
                                        borderRadius="full"
                                        bg={accentColor}
                                        top="10px"
                                        left="10px"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Icon as={FaEnvelope} boxSize={16} color="white" />
                                    </Flex>
                                </Box>

                                <Text textAlign="center" fontSize="lg" mt={4} color="gray.600">
                                    Nos interesa saber lo que piensas, cuando estés listo da clic en...
                                </Text>
                            </Flex>

                            {/* Social Media */}
                            <Box w="full" mt={6}>
                                <Text fontWeight="bold" fontSize="lg" mb={4}>
                                    Síguenos en redes sociales
                                </Text>
                                <HStack spacing={4}>
                                    <Button
                                        leftIcon={<FaFacebook />}
                                        colorScheme="facebook"
                                        variant="outline"
                                        borderRadius="full"
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        leftIcon={<FaTwitter />}
                                        colorScheme="twitter"
                                        variant="outline"
                                        borderRadius="full"
                                    >
                                        Twitter
                                    </Button>
                                    <Button
                                        leftIcon={<FaInstagram />}
                                        colorScheme="pink"
                                        variant="outline"
                                        borderRadius="full"
                                    >
                                        Instagram
                                    </Button>
                                </HStack>
                            </Box>
                        </VStack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Map Section */}
            <Box py={12} bg={altSectionBg}>
                <Container maxW="container.xl">
                    <VStack spacing={8} mb={10}>
                        <Heading as="h2" size="xl" textAlign="center" color="gray.800">
                            Nuestra Ubicación
                        </Heading>
                        <Divider w="100px" borderColor={accentColor} borderWidth="4px" />

                        <Box
                            w="full"
                            h={{ base: "300px", md: "450px" }}
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7639.997590212399!2d-93.13188031467386!3d16.77673555566202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8dbf6eb8e77%3A0xd575a052d4d93c8d!2sAMBAR%20ROJO%20STUDIOS!5e0!3m2!1ses!2smx!4v1745982427005!5m2!1ses!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Ambar Rojo Studios"
                            ></iframe>
                        </Box>
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box py={14} bg={accentColor} color="white">
                <Container maxW="container.xl" textAlign="center">
                    <VStack spacing={6}>
                        <Heading as="h2" size="xl">
                            ¿Listo para empezar tu próximo proyecto?
                        </Heading>
                        <Text fontSize="lg" maxW="container.md" mx="auto">
                            Contáctanos hoy mismo y deja que nuestro equipo de expertos haga realidad tu visión.
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

export default Contact;