import { Box, HStack, Spacer, useRadio, useRadioGroup } from "@chakra-ui/react"


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
      <Box as='label'>
          <input {...input} />
          
      <Box
              {...checkbox}
              bg={'brand.400'}
              cursor='pointer'
              color={'white'}
        borderWidth='1px'
        borderRadius='3xl'
        boxShadow='md'
        _checked={{
          bg: 'white',
          color: 'brand.500',
          borderColor: 'brand.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={1.5}
          >
        {props.children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export default RadioCard;