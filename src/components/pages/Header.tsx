import { Tabs, TabList, TabPanels, Tab, TabPanel, Menu, MenuButton, MenuList, Button, MenuItem, InputGroup, InputRightElement, useColorMode, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Accessible, AccessibleForwardOutlined, Label, MedicalServices, MedicalServicesOutlined, OutlinedFlag, Person, Person2Outlined, PersonOffOutlined, PersonOutlined, Search } from '@mui/icons-material';
import Logo from '../ui/Logo';
import BtnIconText from '../ui/BtnIconText';
import headerImage from '../../assets/img/header-img.png';
import { Link as ReactRouterLink } from 'react-router-dom'

const Header = () => {
   const { toggleColorMode } = useColorMode()

  //  const toggleColorMode = { useColorMode()}
   
    return (<>
      <header className='flex flex-col md:flex-row items-center gap-4 justify-between'>
        
        <Logo aria-hidden="Logo" />
            <InputGroup width={"s"}>
              <InputRightElement pointerEvents='none'>
                <Search className='text-blue-500 hover:text-blue-600'/>
              </InputRightElement>
              <Input borderColor='brand.400' bg="white.200" focusBorderColor='brand.500' borderWidth='1px' borderRadius="full" placeholder='Wyszukaj...' size="md" title='Search here' />
            </InputGroup>
            <div className='nav-list flex justify-between items-center gap-2 flex-row sm:flex-row'>
          {/* <BtnIconText btnTitle={"Opcje widoku"} icon={<AccessibleForwardOutlined />} /> */}
          <Menu>
            <MenuButton as={Button} rightIcon={<AccessibleForwardOutlined />}>
              Opcje widoku
            </MenuButton>
            <MenuList> 
              <MenuItem minH='48px' onClick={e => {
                toggleColorMode()
                const dataTheme = document.querySelector('html');
                  if(dataTheme?.dataset.th === "contrast"){
                    dataTheme!!.dataset.th = "system"
                    localStorage.setItem("dataTh", dataTheme.dataset.th)
                  }else if(dataTheme?.dataset.th === "system"){
                    dataTheme!!.dataset.th = "contrast"
                    localStorage.setItem("dataTh", dataTheme.dataset.th)
                  }
              }}>
                <span>Zmień schemat kolorów</span>
              </MenuItem>
              
            </MenuList>
          </Menu>
          <Button as={ReactRouterLink} to="/auth" leftIcon={<Person />}>Zaloguj się</Button>
        </div>
      </header>
      <div className="hero-image"><img src={headerImage} alt="Header image" className="absolute -z-50 top-0 right-0 max-w-xs sm:max-w-sm md:max-w-lg" /></div>
      </>
      );
}
 
export default Header;