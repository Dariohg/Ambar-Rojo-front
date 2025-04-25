import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <Router>
            <Flex direction="column" minH="100vh">
                <Header />
                <Box flex="1">
                    <AppRoutes />
                </Box>
                <Footer />
            </Flex>
        </Router>
    );
}

export default App;