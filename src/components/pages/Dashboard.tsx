import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Grid, GridItem, HStack, Image, Input, SimpleGrid, Stack, VStack } from '@chakra-ui/react';
import DashboardPanel from '../ui/dashboard/DashboardPanel'
import SearchFormDatePicker from '../ui/datepicker/SearchFormDatePicker';
import Header from "./Header";
import BannerText from '../ui/BannerText';
import BtnIconText from '../ui/BtnIconText';
import { OnlinePrediction, PeopleAltOutlined } from '@mui/icons-material';
import DashboardSchedule from '../ui/dashboard/DashboardSchedule';
import dashboardEmployeeData from '../../json/dashboard-employee.json';
import UserCard from '../ui/card/UserCard';
import InputSearchForm from '../ui/form/InputSearchForm';

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


const Dashboard = () => {
    return ( 
        <>
            <Header />
            <main>
                <BannerText btnTitle="Witaj" btnTitleBold="{username}" btnSubtitle='Sprawdź swoje ostatnie wizyty' />
                {/* dashboard panel  */}
                <SimpleGrid columns={[1, 1, 1 , 2, 2]} spacing='50px' className="mt-48">
                    <DashboardPanel />
                    <div className="container-bg rounded-3xl p-6 drop-shadow-md">
                        <p className='font-bold text-left text-2xl py-2 px-2'>Ustal grafik</p>
                        <SearchFormDatePicker />
                        <div className="datepicker__action flex py-6 gap-2 justify-center">
                            <Button>Zatwierdź</Button>
                            <Button variant='danger-btn'>Anuluj</Button>
                        </div>
                    </div>
                </SimpleGrid>
        <div className="dashboard-left-panel container-bg drop-shadow-md rounded-3xl max-w-full mt-20">
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        gap={4}
                    >
            <GridItem className="dashboard__panel p-6" colSpan={1}>
                <p className="dashboard__label font-bold text-left mb-2 text-3xl py-2">Przypisz pracownika do placówki</p>
                
                        {dashboardEmployeeData.map((record, index) => {
                            return (
                                <ChakraLink  as={ReactRouterLink} to='/profile/manage'>
                                    <UserCard key={record.id} name={record.profile.firstName} surname={record.profile.lastname} id={record.id} imageSrc={record.profile.avatarImgUrl.length > 1 ? record.profile.avatarImgUrl : undefined} shortcut={record.profile.shortcut}>
                                    </UserCard>
                                </ChakraLink>
                            )
                        })}
            </GridItem>
                        
            <GridItem className="dashboard__panel p-6" colSpan={2}>                
                        <div className="dashboard__form border-2 border-blue-600 p-6 rounded-3xl">
                                <FormControl>
                                    <SimpleGrid columns={[1, 1, 2, 2]} spacing="25px">
                                        <div className="dashboard__col">
                                            <FormLabel>Wybierz dostępną placówkę</FormLabel>
                                            <InputSearchForm/>

                                            <FormLabel>Specjalizacja pracownika w placówce</FormLabel>
                                            <InputSearchForm/>


                                            <FormLabel>Rodzaj wizyty</FormLabel>
                                            <InputSearchForm/>

                                            <FormLabel>Choroby</FormLabel>
                                            <InputSearchForm/>

                                        </div>
                                        <div className="dashboard__col">
                                            <FormLabel>Usługi wykonywane przez pracownika</FormLabel>
                                                <Stack spacing={5}>
                                                <Checkbox>albacja serca</Checkbox>
                                                <Checkbox>badania biochemiczne</Checkbox>
                                                <Checkbox>biopsja serca</Checkbox>
                                                <Checkbox>badania krwi</Checkbox>
                                                <Checkbox>ADHD</Checkbox>
                                            </Stack>
                                            <FormLabel>Gabinet pracy</FormLabel>
                                            <InputSearchForm/>
                                        </div>
                                    </SimpleGrid>
                                    
                                            <FormLabel>Harmonogram pracy</FormLabel>
                                            <SearchFormDatePicker/>
                            </FormControl>      
                        </div>
            </GridItem>
            </Grid>        
        </div>
            </main>
            
        </>
     );
}
 
export default Dashboard;