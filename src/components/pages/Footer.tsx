import { Box, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import bannerFooterImg from '../../assets/img/banner-footer.jpg';
import ButtonLink from "../ui/ButtonLink";
const Footer = () => {
    return (
        <>
            <Box
                // bg="green.200"
                w="100%"
                p={20}
                className="rounded-3xl mt-28 drop-shadow-md footer-box"
            >
                <SimpleGrid columns={[1, 1, 2, 2]} spacing={'50px'}>
                    <div className="banner_col">
                        <Image src={ bannerFooterImg} className="rounded-3xl opacity-90"/>
                    </div>
                    <div className="banner_col flex flex-col gap-2">
                        <p className="h1 text-2xl font-bold text-justify text-clr-200 font-family-outfit">Prowadzisz własny gabinet lub placówkę i szukasz nowych pacjentów?</p>
                    <ul className="banner-list text-left list-disc px-5 mt-5 text-clr-200 font-family-outfit">
                        <li>Dotrzyj do pacjentów, którzy szukają specjalistów w Twojej okolicy.</li>
                        <li>Pozwól im zapisać się na wizytę o każdej porze dnia i nocy. Koniec z czekaniem na otwarcie recepcji.</li>
                        <li>Zbuduj reputację w Internecie pozyskując wiarygodne opinie.</li>
                    </ul>
                        <ButtonLink linkName="Załóż konto już dziś" className="mt-5 py-2 font-reg"/>
                    </div>
                </SimpleGrid>
        </Box>
        <footer className="my-6 h-36 flex gap-4 justify-evenly mt-24">
                <ul className="navigation-list flex flex-wrap ">                    
                    <li> Serwis
                    <ul className="gap-1 flex flex-col" >
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Regulamin</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">O nas</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Polityka Prywatności</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Lekarze</ChakraLink></li>
                    </ul>
                </li>
                </ul>
                <Divider orientation="vertical" />
                 <ul className="navigation-list flex flex-wrap ">                    
                    <li> Serwis
                    <ul className="gap-1 flex flex-col">
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Regulamin</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">O nas</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Polityka Prywatności</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Lekarze</ChakraLink></li>
                    </ul>
                </li>
                </ul>
                                <Divider orientation="vertical" />

                <ul className="navigation-list flex flex-wrap ">                    
                    <li> Serwis
                    <ul className="gap-1 flex flex-col" >
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Regulamin</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">O nas</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Polityka Prywatności</ChakraLink></li>
                        <li className="nav-item">    <ChakraLink as={ReactRouterLink} to="/login">Lekarze</ChakraLink></li>
                    </ul>
                </li>
                </ul>
        </footer>
        </> 
            );
}
 
export default Footer;