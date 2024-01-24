import { Button, Checkbox, FormControl, FormHelperText, FormLabel, HStack, Image, Input, SimpleGrid, Stack, Text, useColorMode, useRadioGroup } from "@chakra-ui/react";
import loginImage from '../../assets/img/login-img.jpg'
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import RadioCard from "../ui/form/RadioButton";
import { Done, Person, Search } from "@mui/icons-material";
import InputSearchForm from "../ui/form/InputSearchForm";
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { useState } from "react";


const Register = (props: any) => {
    return (
<SimpleGrid columns={[1,1,1,2]} spacing={'50px'} className="my-10 h-full">
                <div className="container_col container-bg drop-shadow-md p-6 rounded-3xl">
                    <p className="text-3xl text-left font-bold font-family-outfit mb-4">Zarejestruj się</p>
                    <FormControl>
                        <div className="form-item_col flex flex-col mb-2">
                            <FormLabel>Typ konta</FormLabel>
                            <RadioButton/>
                        </div>


                        <SimpleGrid columns={[1,1,2,2]} spacing={'25px'}>
                            <div className="form-item">
                                    <FormLabel>Imię</FormLabel>
                                    <Input type="text" />
                                </div>
                            
                                <div className="form-item">
                                    <FormLabel>Nazwisko</FormLabel>
                                    <Input type="text" />
                                </div>
                                <div className="form-item">
                                    <FormLabel>Adres email</FormLabel>
                                    <Input type="email" />
                                </div>
                                <div className="form-item">
                                    <FormLabel>Hasło</FormLabel>
                                    <Input type="password" />
                                </div>
                            
                                <div className="form-item">
                                    <FormLabel>Powtórz hasło</FormLabel>
                                    <Input type="password" />
                                </div>
                                <div className="form-item">
                                    <FormLabel>Data urodzenia</FormLabel>
                                    <Input type="date" />
                                </div>
                                <div className="form-item">
                                    <FormLabel>Miasto</FormLabel>
                                    <InputSearchForm/>
                                </div>
                                 <div className="form-item">
                                    <FormLabel>Dodatkowe informacje o pacjencie</FormLabel>
                                         <Stack spacing={5}>
                                            <Checkbox>na wózku lub o kulach</Checkbox>
                                            <Checkbox>z problemami ze słuchem</Checkbox>
                                            <Checkbox>z problemami ze wzrokiem</Checkbox>
                                        </Stack>
                                </div>
                        </SimpleGrid>
                       
                        <div className="form-submit_col flex justify-center w-full flex-col mt-6">
                            <Button
                                mt={4}
                                leftIcon={<Done />}
                                variant={'green-btn'}
                            >
                            Utwórz konto
                            </Button>
                            <Text className="mt-2 flex items-center gap-2">Posiadasz już konto? <Link to="#" className="text-blue-700 font-bold" onClick={props.toggleSwitch}>Zaloguj się</Link></Text>

                        </div>
                       
                </FormControl>
            </div>

                <div className="container_col object-contain relative">
                    <div className="container_bg_layer rounded-3xl"></div>
                    <Image src={loginImage} className="aspect-square object-cover object-top rounded-3xl" boxSize={'100%'}/>
            </div>
                
            </SimpleGrid>
    );
}



const Login = (props: any) => {
    
    return (
<SimpleGrid columns={[1,1,1,2]} spacing={'50px'} className="my-10">
                <div className="container_col container-bg drop-shadow-md p-6 rounded-3xl">
                    <p className="text-3xl text-left font-bold font-family-outfit mb-4">Zaloguj się</p>
                    <FormControl className="flex flex-col justify-center max-w-xs h-3/6">
                        <div className="flex flex-col gap-2">
                                <div className="form-item">
                                    <FormLabel>Adres email</FormLabel>
                                    <Input type="email" />
                                </div>
                                <div className="form-item">
                                    <FormLabel>Hasło</FormLabel>
                                    <Input type="password" />
                                </div>
                        </div>
                        <div className="form-submit_col text-left mt-6 ">
                            <Button
                                mt={4}
                                leftIcon={<Done />}
                            >
                            Zaloguj się
                            </Button>
                            <Text className="mt-2 flex items-center gap-2">Nie masz jeszcze konta? <Link to="#" className="text-blue-700 font-bold" onClick={props.toggleSwitch}>Zarejestruj się</Link></Text>

                        </div>
                       
                </FormControl>
            </div>

                <div className="container_col object-contain relative">
                    <div className="container_bg_layer rounded-3xl"></div>
                    <Image src={loginImage} className="aspect-square object-cover object-top rounded-3xl" boxSize={'100%'}/>
            </div>
                
            </SimpleGrid>
    );
}



const Authentication = () => {
    const [authSwitch, setauthSwitch] = useState(true);

    function toggleSwitch(){
        setauthSwitch(!authSwitch);
    }

    return ( 
        <>
            <Header />

            {authSwitch ? <Register  toggleSwitch={toggleSwitch}/> : <Login toggleSwitch={toggleSwitch}/>}
        <Footer/>
            </>
     );
}
 

function RadioButton() {
    const options = ['Lekarz', 'Pacjent']
    

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default Authentication;