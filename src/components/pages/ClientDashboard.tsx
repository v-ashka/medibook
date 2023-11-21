import { Button, Divider, FormControl, FormLabel, Grid, GridItem, Textarea } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import StarRating from "../ui/StarRating";
import React from "react";
import { Done, Download, FilePresent, FilePresentOutlined, HistoryOutlined } from "@mui/icons-material";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import UserCard from "../ui/card/UserCard";
const ClientDashboard = () => {
    const [rating, setRating] = React.useState(0);


    return (<>
        <Header />
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className="mt-3">
            <GridItem colSpan={2} className="container-bg drop-shadow-md rounded-3xl p-6 text-left">
                <div className="rating-box__title flex flex-col gap-2 font-family-inter font-bold text-2xl">Centrum Medyczne - Lorem ipsum</div>
                <Button as={ReactRouterLink} to={'/myvisits'} className="my-4" leftIcon={<HistoryOutlined />}>Moje wizyty</Button>
                <div className="rating-box__title flex flex-col gap-2 font-family-inter font-bold text-2xl my-4">Ostatnia wizyta </div>
                <div className="card-visit-bg flex flex-row  md:flex-wrap rounded-3xl">
                    <div className="card-info p-6">
                        <UserCard className="p-0 my-0" name="Adam" surname="Adamczyk" shortcut="dr." id={1} visitType="Kardiolog, Kardiochirurg"/>
                        <div className="card-info__desc flex flex-col gap-y-1 pb-5">
                            <p><span className="font-bold">Punkt:</span> Centrum Opieki Medycznej - Lorem ipsum</p>
                            <p><span className="font-bold">Usługa:</span> Konsultacja kardiochirurgiczna</p>
                            <p><span className="font-bold">Rodzaj wizyty:</span> W gabinecie</p>
                            <p><span className="font-bold">Cena:</span>350zł </p>
                        </div>
                    </div>
                    <div className="card-info__details">
                        <div className="rating-box__title flex flex-col gap-2 font-family-inter font-bold text-2xl my-4">Dodatkowe informacje</div>
                        <Button variant={'download-btn'} leftIcon={<FilePresentOutlined/>} rightIcon={<Download/>} >skierowanie.pdf</Button>
                    </div>
                </div>
            </GridItem>
            <GridItem colSpan={1} className="container-bg drop-shadow-md rounded-3xl">
                <FormControl className="flex flex-col p-6 text-left">
                    <div className="rating-box__title flex flex-col gap-2 font-family-inter font-bold text-2xl">Jak oceniasz tą wizytę?</div>
                        <div className="rating-box__rating flex flex-col justify-center my-4">
                                <StarRating rating={rating.toString()} setRating={setRating}/>
                    </div>
                    <div className="form-textarea">
                        <Textarea placeholder="Dodaj swoją opinię..." rows={10} />
                    </div>
                        <div className="form-submit_col text-right mt-6 ">
                            <Button
                                mt={4}
                                leftIcon={<Done />}
                            variant={'green-btn'}
                            >
                            Zapisz
                            </Button>
                        </div>
                       
                </FormControl>
            </GridItem>
        </Grid>
    <Footer/>
    </>);
}
 
export default ClientDashboard;