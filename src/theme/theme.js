import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            primary: '#fc0341',
            900: '#d10234',
            800: '#fc0341',
            700: '#fd1a52',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.800',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                borderRadius: 'md',
            },
            variants: {
                solid: {
                    bg: 'brand.primary',
                    color: 'white',
                    _hover: {
                        bg: 'brand.900',
                    },
                },
            },
        },
    },
});

export default theme;