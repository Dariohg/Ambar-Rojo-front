import React, { useState, useRef } from 'react';
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
    Checkbox,
    Stack,
    useToast,
    FormErrorMessage,
    Flex,
    Image
} from '@chakra-ui/react';
import { FaUpload, FaUserGraduate } from 'react-icons/fa';

const Practicantes = () => {
    // Color scheme - usando el color principal de Ambar Rojo
    const accentColor = "#fc0341";
    // Ya no usamos el azul, solo el color rojo corporativo

    // Toast para notificaciones
    const toast = useToast();

    // Referencia para el input de archivo
    const fileInputRef = useRef(null);

    // Estado del formulario
    const [formData, setFormData] = useState({
        id: '',
        nombreCompleto: '',
        telefono: '',
        correo: '',
        tieneWhatsapp: false,
        domicilio: '',
        universidad: '',
        tipoSemestre: '',
        semestre: '',
        especialidad: '',
        aptitudes: [], // Mantener como array para selección múltiple
        hobbies: '',
        github: '',
        perfilSocial: '',
        foto: null,
        proyectoAsignado: false,
        documentacionSubida: false
    });

    // Estado para nombre de archivo
    const [fileName, setFileName] = useState('Sin archivos seleccionados');

    // Estado para errores
    const [errors, setErrors] = useState({});

    // Opciones para aptitudes
    const aptitudesOptions = [
        'Trabajo en equipo',
        'Comunicación',
        'Resolución de problemas',
        'Liderazgo',
        'Adaptabilidad',
        'Pensamiento crítico',
        'Creatividad',
        'Programación',
        'Diseño',
        'Análisis de datos'
    ];

    // Opciones para tipo de semestre
    const tiposSemestre = [
        'Semestral',
        'Cuatrimestral',
        'Trimestral'
    ];

    // Manejo de cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Limpiar error al modificar
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Manejo de cambios en checkbox
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    // Manejo de cambios en aptitudes (múltiple selección)
    const handleAptitudesChange = (selectedAptitudes) => {
        setFormData({
            ...formData,
            aptitudes: selectedAptitudes
        });
    };

    // Manejo de carga de foto
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validar tipo de archivo y tamaño
            if (!file.type.includes('image/')) {
                setErrors({
                    ...errors,
                    foto: 'El archivo debe ser una imagen (JPG, PNG)'
                });
                return;
            }

            if (file.size > 5 * 1024 * 1024) { // 5MB en bytes
                setErrors({
                    ...errors,
                    foto: 'La imagen debe ser menor a 5MB'
                });
                return;
            }

            setFormData({
                ...formData,
                foto: file
            });
            setFileName(file.name);

            // Limpiar error
            if (errors.foto) {
                setErrors({
                    ...errors,
                    foto: null
                });
            }
        }
    };

    // Validación del formulario
    const validateForm = () => {
        const newErrors = {};

        // Validar campos requeridos
        if (!formData.id.trim()) newErrors.id = "El ID es requerido";
        if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = "El nombre completo es requerido";
        if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
        if (!formData.correo.trim()) {
            newErrors.correo = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            newErrors.correo = "Formato de correo inválido";
        }
        if (!formData.universidad.trim()) newErrors.universidad = "La universidad es requerida";
        if (!formData.especialidad.trim()) newErrors.especialidad = "La especialidad es requerida";
        if (!formData.foto) newErrors.foto = "La foto es requerida";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Aquí iría la lógica para enviar datos al servidor
            console.log('Datos del formulario:', formData);

            // Mostrar mensaje de éxito
            toast({
                title: "Registro exitoso",
                description: "Tu solicitud ha sido enviada correctamente.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            // Resetear formulario o redirigir
        } else {
            // Mostrar mensaje de error
            toast({
                title: "Error en el formulario",
                description: "Por favor completa todos los campos requeridos.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });

            // Desplazar al primer error
            const firstErrorField = Object.keys(errors)[0];
            const element = document.querySelector(`[name="${firstErrorField}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <Box>
            {/* Sección Header - usando el color rojo de Ambar Rojo */}
            <Box py={8} bg={accentColor} color="white">
                <Container maxW="container.xl">
                    <VStack spacing={3} textAlign="left" alignItems="flex-start">
                        <Heading as="h1" size="xl">
                            Registro de Practicantes
                        </Heading>
                        <Text fontSize="lg">
                            Complete el formulario con los datos del nuevo practicante
                        </Text>
                    </VStack>
                </Container>
            </Box>

            {/* Formulario de Registro */}
            <Box py={8}>
                <Container maxW="container.xl">
                    <form onSubmit={handleSubmit}>
                        {/* Sección Información Personal */}
                        <Box mb={8}>
                            <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                Información Personal
                            </Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <Box>
                                    <FormControl isRequired isInvalid={errors.nombreCompleto} mb={4}>
                                        <FormLabel htmlFor="nombreCompleto">Nombre Completo</FormLabel>
                                        <Input
                                            id="nombreCompleto"
                                            name="nombreCompleto"
                                            placeholder="Ej: Juan Pérez Rodríguez"
                                            value={formData.nombreCompleto}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.nombreCompleto && (
                                            <FormErrorMessage>{errors.nombreCompleto}</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors.correo} mb={4}>
                                        <FormLabel htmlFor="correo">Correo Electrónico</FormLabel>
                                        <Input
                                            id="correo"
                                            name="correo"
                                            type="email"
                                            placeholder="Ej: ejemplo@correo.com"
                                            value={formData.correo}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.correo && (
                                            <FormErrorMessage>{errors.correo}</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel htmlFor="domicilio">Domicilio</FormLabel>
                                        <Input
                                            id="domicilio"
                                            name="domicilio"
                                            placeholder="Calle, Número, Colonia, CP, Ciudad"
                                            value={formData.domicilio}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl isRequired isInvalid={errors.id} mb={4}>
                                        <FormLabel htmlFor="id">ID del Practicante</FormLabel>
                                        <Input
                                            id="id"
                                            name="id"
                                            placeholder="Ej: P2025-001"
                                            value={formData.id}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.id && (
                                            <FormErrorMessage>{errors.id}</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors.telefono} mb={4}>
                                        <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                                        <Input
                                            id="telefono"
                                            name="telefono"
                                            placeholder="Ej: 5512345678"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.telefono && (
                                            <FormErrorMessage>{errors.telefono}</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <Box mt={2} ml={1}>
                                        <Checkbox
                                            name="tieneWhatsapp"
                                            isChecked={formData.tieneWhatsapp}
                                            onChange={handleCheckboxChange}
                                            colorScheme="green"
                                        >
                                            Tiene WhatsApp
                                        </Checkbox>
                                    </Box>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Sección Información Académica */}
                        <Box mb={8}>
                            <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                Información Académica
                            </Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Box>
                                    <FormControl isRequired isInvalid={errors.universidad} mb={4}>
                                        <FormLabel htmlFor="universidad">Universidad</FormLabel>
                                        <Input
                                            id="universidad"
                                            name="universidad"
                                            placeholder="Ej: Universidad Autónoma de México"
                                            value={formData.universidad}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.universidad && (
                                            <FormErrorMessage>{errors.universidad}</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors.semestre} mb={4}>
                                        <FormLabel htmlFor="semestre">Semestre/Período</FormLabel>
                                        <Input
                                            id="semestre"
                                            name="semestre"
                                            placeholder="Ej: 6to"
                                            value={formData.semestre}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.semestre && (
                                            <FormErrorMessage>{errors.semestre}</FormErrorMessage>
                                        )}
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl mb={4}>
                                        <FormLabel htmlFor="tipoSemestre">Tipo de Semestre</FormLabel>
                                        <Select
                                            id="tipoSemestre"
                                            name="tipoSemestre"
                                            placeholder="Seleccionar..."
                                            value={formData.tipoSemestre}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        >
                                            {tiposSemestre.map((tipo) => (
                                                <option key={tipo} value={tipo}>
                                                    {tipo}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors.especialidad} mb={4}>
                                        <FormLabel htmlFor="especialidad">Especialidad</FormLabel>
                                        <Input
                                            id="especialidad"
                                            name="especialidad"
                                            placeholder="Ej: Desarrollo de Software"
                                            value={formData.especialidad}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        {errors.especialidad && (
                                            <FormErrorMessage>{errors.especialidad}</FormErrorMessage>
                                        )}
                                    </FormControl>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Sección Aptitudes e Intereses */}
                        <Box mb={8}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Box>
                                    <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                        Aptitudes
                                    </Heading>

                                    <FormControl mb={4}>
                                        <Input
                                            name="aptitudes"
                                            placeholder="Ej: Trabajo en equipo, Comunicación, Programación"
                                            value={formData.aptitudes.join(', ')}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const aptitudes = value.split(',').map(aptitud => aptitud.trim()).filter(Boolean);
                                                handleAptitudesChange(aptitudes);
                                            }}
                                            size="md"
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                        <Text fontSize="xs" mt={2} color="gray.500">
                                            Separa las aptitudes con comas
                                        </Text>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                        Hobbies e Intereses
                                    </Heading>

                                    <FormControl mb={4}>
                                        <Textarea
                                            id="hobbies"
                                            name="hobbies"
                                            placeholder="Describe brevemente tus hobbies e intereses..."
                                            value={formData.hobbies}
                                            onChange={handleInputChange}
                                            height="180px"
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                    </FormControl>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Sección Perfiles y Documentación */}
                        <Box mb={8}>
                            <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                Perfiles y Documentación
                            </Heading>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Box>
                                    <FormControl mb={4}>
                                        <FormLabel htmlFor="perfilSocial">Perfil de Red Social</FormLabel>
                                        <Input
                                            id="perfilSocial"
                                            name="perfilSocial"
                                            placeholder="Ej: LinkedIn, Twitter, etc."
                                            value={formData.perfilSocial}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                    </FormControl>

                                    <FormControl mb={4}>
                                        <FormLabel htmlFor="github">GitHub</FormLabel>
                                        <Input
                                            id="github"
                                            name="github"
                                            placeholder="https://github.com/username"
                                            value={formData.github}
                                            onChange={handleInputChange}
                                            bg="white"
                                            border="1px solid"
                                            borderColor="gray.300"
                                            _hover={{ borderColor: accentColor }}
                                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        />
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl isRequired isInvalid={errors.foto} mb={4}>
                                        <FormLabel htmlFor="foto">Foto</FormLabel>
                                        <Flex alignItems="center">
                                            <Box
                                                w="70px"
                                                h="70px"
                                                borderRadius="full"
                                                bg="gray.200"
                                                mr={4}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                                overflow="hidden"
                                            >
                                                {formData.foto ? (
                                                    <Image
                                                        src={URL.createObjectURL(formData.foto)}
                                                        alt="Preview"
                                                        objectFit="cover"
                                                        w="full"
                                                        h="full"
                                                    />
                                                ) : (
                                                    <Box
                                                        as={FaUserGraduate}
                                                        size="30px"
                                                        color="gray.400"
                                                    />
                                                )}
                                            </Box>

                                            <VStack align="flex-start" spacing={1}>
                                                <Button
                                                    leftIcon={<FaUpload />}
                                                    onClick={() => fileInputRef.current.click()}
                                                    colorScheme="blue"
                                                    size="sm"
                                                    fontWeight="normal"
                                                >
                                                    Seleccionar archivo
                                                </Button>
                                                <Input
                                                    type="file"
                                                    id="foto"
                                                    name="foto"
                                                    accept="image/jpeg, image/png"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    display="none"
                                                />
                                                <Text fontSize="sm" color="gray.500">
                                                    {fileName}
                                                </Text>
                                                <Text fontSize="xs" color="gray.500">
                                                    JPG, PNG. Máximo 5MB
                                                </Text>
                                            </VStack>
                                        </Flex>
                                        {errors.foto && (
                                            <FormErrorMessage>{errors.foto}</FormErrorMessage>
                                        )}
                                    </FormControl>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Sección Estado de la Práctica */}
                        <Box mb={8}>
                            <Heading as="h2" size="md" mb={4} pb={2} borderBottomWidth="1px" color="gray.700">
                                Estado de la Práctica
                            </Heading>

                            <VStack align="flex-start" spacing={3}>
                                <Checkbox
                                    name="proyectoAsignado"
                                    isChecked={formData.proyectoAsignado}
                                    onChange={handleCheckboxChange}
                                    colorScheme="red"
                                >
                                    Proyecto Asignado
                                </Checkbox>
                                <Checkbox
                                    name="documentacionSubida"
                                    isChecked={formData.documentacionSubida}
                                    onChange={handleCheckboxChange}
                                    colorScheme="red"
                                >
                                    Documentación Subida
                                </Checkbox>
                            </VStack>
                        </Box>

                        {/* Botones de acción */}
                        <Flex justify="flex-end" mt={6}>
                            <Button
                                variant="outline"
                                mr={4}
                                borderRadius="md"
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                colorScheme="red"
                                bg={accentColor}
                                borderRadius="md"
                                _hover={{
                                    bg: "#d0032f"
                                }}
                            >
                                Registrar Practicante
                            </Button>
                        </Flex>
                    </form>
                </Container>
            </Box>
        </Box>
    );
};

export default Practicantes;