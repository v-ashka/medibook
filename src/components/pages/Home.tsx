import { Divider } from '@chakra-ui/react';
import headerImage from '../../assets/img/header-img.png'
import CardContainer from '../ui/card/CardsContainer';
// import DashboardPanel from '../DashBoardPanel';
import SearchForm from '../ui/form/SearchForm';
import BannerText from '../ui/BannerText';

const Home = () => {
    return (<main>
        {/* Banner */}
        <BannerText btnTitleBold='Specjaliści' btnTitle='w jednym miejscu' btnSubtitle='Znajdź lekarza i umów wizytę kiedy chcesz.'/>
        {/* Home Form component */}
        <SearchForm />
        {/* card */}
        <CardContainer />        

        <div className="banner flex justify-between m-10 mt-20">

            <div className="banner__content">
                <p className="banner__title text-4xl md:text-5xl z-50 relative max-w-md text-left"><span className="font-bold text-family-inter ">Specjaliści</span> <br /> w jednym miejscu.</p>
                <p className="banner__subtitle text-xl md:text-2xl z-50 max-w-md text-left leading-9">Znajdź lekarza i umów wizytę kiedy chcesz.</p>
                
            </div>
            
        </div>
    </main>);
}
 
export default Home;