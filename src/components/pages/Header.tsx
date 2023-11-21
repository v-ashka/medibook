import { Tabs, TabList, TabPanels, Tab, TabPanel, Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Accessible, AccessibleForwardOutlined, MedicalServices, MedicalServicesOutlined, OutlinedFlag, Person, Person2Outlined, PersonOffOutlined, PersonOutlined } from '@mui/icons-material';
import Logo from '../ui/Logo';
import BtnIconText from '../ui/BtnIconText';
import headerImage from '../../assets/img/header-img.png';

const Header = () => {
    return (<>
      <header className='flex flex-col sm:flex-row items-center gap-4 justify-between'>
        
            <Logo aria-hidden="Logo" />
            <Input borderColor='brand.400' bg="white.200" focusBorderColor='brand.500' borderWidth='1px' borderRadius="full" placeholder='Wyszukaj...' size="md" className='max-w-sm'/>
            <div className='nav-list flex justify-between items-center gap-4 flex-row sm:flex-wrap'>
          {/* <BtnIconText btnTitle={"Opcje widoku"} icon={<AccessibleForwardOutlined />} /> */}
          <Menu>
            <MenuButton as={Button} rightIcon={<AccessibleForwardOutlined />}>
              Opcje widoku
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <span>Zmień schemat kolorów</span>
              </MenuItem>
              
            </MenuList>
          </Menu>
            <BtnIconText btnTitle={"Zaloguj się"} icon={<Person/>} />
        </div>
      </header>
      <div className="hero-image"><img src={headerImage} alt="Header image" className="absolute -z-50 top-0 right-0 max-w-xs sm:max-w-sm md:max-w-lg" /></div>
      </>
      );
}
 
export default Header;