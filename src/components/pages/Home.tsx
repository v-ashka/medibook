import { Divider } from '@chakra-ui/react';
import headerImage from '../../assets/img/header-img.png'
import CardContainer from '../ui/card/CardsContainer';
// import DashboardPanel from '../DashBoardPanel';
import SearchForm from '../ui/form/SearchForm';
import BannerText from '../ui/BannerText';
import Footer from './Footer';

const Home = () => {
    return (<main>
        {/* Banner */}
        <BannerText btnTitleBold='Specjaliści' btnTitle='w jednym miejscu' btnSubtitle='Znajdź lekarza i umów wizytę kiedy chcesz.'/>
        {/* Home Form component */}
        <SearchForm />
        {/* card */}
        <CardContainer />        
    </main>);
}
 
export default Home;