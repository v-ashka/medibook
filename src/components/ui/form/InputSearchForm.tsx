import { Button, Input, InputGroup, InputRightElement, position } from "@chakra-ui/react";
import { KeyboardArrowDown } from "@mui/icons-material";

const InputSearchForm = () => {
    return ( 
        // <div className="input-wrapper w-fit relative flex items-center"><Input borderRadius={"2rem"} /><Button background="transparent" color="brand.400"
        //     _hover={{bg: "transparent", color: "brand.500"}}
        //     className="absolute z-10 right-12 top-0" ><KeyboardArrowDown /></Button></div>
         <InputGroup size='md' className="rounded-3xl" aria-label="input group">
      <Input
                pr='4.5rem'        
                borderRadius="1.5rem"
                title="Form input"
      />
      <InputRightElement width='4.5rem'>
        <Button bg="transparent" title="expand button" aria-label="expand button">
          <KeyboardArrowDown className='icon-clr' />
        </Button>
      </InputRightElement>
    </InputGroup>
     );
}
 
export default InputSearchForm;