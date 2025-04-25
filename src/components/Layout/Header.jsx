import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <Box as="header">
            <Navbar />
        </Box>
    );
}