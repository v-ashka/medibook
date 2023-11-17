import { Box, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import MyCard from "./MyCard";
import avatarImg from '../assets/img/avatar.jpg';

const CardContainer = () => {
    return ( 
        <SimpleGrid columns={[1, 2, 3, 3]} spacing='50px' className="mt-24">
            <MyCard>
                <div className="card__content p-6 text-left">
                    <p className="text-4xl ">Twoje zaplanowane wizyty:</p>
                    <p className="text-5xl font-bold py-8">5</p>
                </div>
            </MyCard>
            <MyCard>
                <div className="card__content p-6">
                    <div className="card_content_header flex gap-4 text-left mb-2">
                        <Image src={avatarImg}
                            borderRadius='full'
                            boxSize='50px'
                            alt="Avatar image" />
                        <div className="card_name flex flex-col">
                            <p className="font-bold">dr. Adam Adamczyk</p>
                            <p>Kardiochirurg, Kardiolog</p>
                        </div>
                    </div>
                    <Divider />
                </div>
            </MyCard>
            <MyCard>
                <div className="card__content p-6 text-left">
                    <p className="text-4xl ">Twoje zaplanowane wizyty:</p>
                    <p className="text-5xl font-bold py-8">5</p>
                </div>
            </MyCard>
            <MyCard>
                <div className="card__content p-6 text-left">
                    <p className="text-4xl ">Twoje zaplanowane wizyty:</p>
                    <p className="text-5xl font-bold py-8">5</p>
                </div>
            </MyCard>
              <MyCard>
                <div className="card__content p-6 text-left">
                    <p className="text-4xl ">Twoje zaplanowane wizyty:</p>
                    <p className="text-5xl font-bold py-8">5</p>
                </div>
            </MyCard>
  
</SimpleGrid>
     );
}
 
export default CardContainer;