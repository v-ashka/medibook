import headerImage from '../assets/img/header-img.png'
import CardContainer from './CardsContainer';
import SearchForm from './SearchForm';

const Home = () => {
    return (<main>
        {/* Banner */}
        <div className="banner flex justify-between m-10 mt-20">

            <div className="banner__content">
                <p className="banner__title text-4xl md:text-5xl z-50 relative max-w-md text-left"><span className="font-bold text-family-inter ">Specjaliści</span> <br /> w jednym miejscu.</p>
                <p className="banner__subtitle text-xl md:text-2xl z-50 max-w-md text-left leading-9">Znajdź lekarza i umów wizytę kiedy chcesz.</p>
                
            </div>
            <div className="hero-image"><img src={headerImage} alt="Header image" className="absolute -z-50 top-0 right-0 max-w-xs sm:max-w-sm md:max-w-lg"/></div>
        </div>
        {/* Home Form component */}
        <SearchForm />
        {/* card */}
        <CardContainer />        

    </main>);
}
 
export default Home;