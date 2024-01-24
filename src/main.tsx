import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendBaseTheme, ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard.tsx'
import Authentication from './components/pages/Authentication.tsx'
import ClientDashboard from './components/pages/ClientDashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/auth",
    element: <Authentication/>
  },
  {
    path: "/dashboard/client",
    element: <ClientDashboard/>
  },
  
])


const configTheme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}


const theme = extendTheme({
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Inter', sans-serif`,
  },
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
    FormLabel: {
      baseStyle: {
        fontWeight: 'bold'
      }
    }
    ,
    Input: {
      baseStyle: {
        field: {
        borderRadius: '16rem',
        },
      },
      variants: {
        
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'yellow.400' : 'brand.100',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          // color: "white",
          _hover: {
            bg:  props.colorMode === 'dark' ? 'yellow.500' : 'brand.100',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'yellow.600' : 'brand.100',
          }
          
        })
      }
    }
    ,
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'regular', // Normally, it is "semibold"
        borderRadius: '4rem',
      },
      variants: {
         'download-btn': {
          bg: 'white.200',
          color: 'black.200',
          borderColor: 'brand.400',
          borderWidth: '2px',
          fontSize: '1rem',
          fontWeight: 'semibold',
          width: '100%',
          py: 6,
          _hover: {
            bg: 'brand.400',
            color: 'white',
            borderColor: 'brand.500',
          },
          _active: {
            bg: 'brand.400',
            color: 'white',
            borderColor: 'brand.500',
          }
        },
        'green-btn': {
          bg: 'brand.300',
          color: 'white',
          _hover: {
            bg: 'brand.300'
          },
          _active: {
            bg: 'brand.300'
          },
          
        },
        'danger-btn': {
          bg: 'red.500',
          color: 'white',
          _hover: {
            bg: 'red.600'
          },
          _active: {
            bg: 'red.600'
          }
        },

        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'yellow' : 'brand.500',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          _hover: {
            bg:  props.colorMode === 'dark' ? 'yellow.100' : 'brand.400',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'yellow.100' : 'brand.600',
          }
          
        })
      }
    }
  }
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
