import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Button,
    useDisclosure,
    IconButton,
    Stack,
    Link
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ children, to }) => (
    <Link
        as={RouterLink}
        to={to}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            color: 'brand.primary',
        }}
        fontWeight="medium"
    >
        {children}
    </Link>
);

const Links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="white" px={4} boxShadow="sm">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box fontWeight="bold" fontSize="xl" color="brand.primary">
                        Ambar Rojo
                    </Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.name} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Button
                        as={RouterLink}
                        to="/contacto"
                        variant={'solid'}
                        colorScheme={'red'}
                        size={'sm'}
                        mr={4}
                        leftIcon={<EmailIcon />}
                    >
                        Contacto
                    </Button>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link.name} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contacto">Contacto</NavLink>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}