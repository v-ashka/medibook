import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      // green colors
      100: "#4BE08A",
      200: "#3FBA73",
      300: "#2D8653",

      // blue colors
      400: "#2E77F7",
      500: "#2F5FFF",
      600: "#245EC3",
    }
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'regular', // Normally, it is "semibold"
        borderRadius: '4rem',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.400' : 'brand.500',
          color: "white",
          _hover: {
            bg:  props.colorMode === 'dark' ? 'red.400' : 'brand.400',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'red.400' : 'brand.600',
          }
          
        })
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      </ChakraProvider>
  </React.StrictMode>,
)
