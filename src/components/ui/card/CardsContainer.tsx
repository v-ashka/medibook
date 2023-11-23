import { Box, Button, Divider, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid } from "@chakra-ui/react";
import MyCard from "../card/MyCard";
import avatarImg from '../../../assets/img/avatar.jpg';
import { MoreHorizOutlined } from "@mui/icons-material";
import CardInnerContent from "./CardInnerContent";

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
                <CardInnerContent/>
            </MyCard>
            <MyCard>
                               <CardInnerContent/>

            </MyCard>
            <MyCard>
                               <CardInnerContent/>

            </MyCard>
              <MyCard>
                                <CardInnerContent/>

            </MyCard>
                <MyCard>
                                <CardInnerContent/>

            </MyCard>
  
</SimpleGrid>
     );
}
 
export default CardContainer;