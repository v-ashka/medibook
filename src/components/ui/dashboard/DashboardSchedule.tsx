import { Button, Divider, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { FC } from "react";

interface DashboardScheduleProps {
    id: number,
    imageSrc: string,
    name: string,
    surname: string,
    visitType: string,
    visitHour: string,
    visitFullDate: string,
    
}

import imgTemplate from '../../../assets/img/template-avatar.png';

// const StarRating: FC<StarRatingProps> = ({rating, setRating, count=5, size=20}) => {

const DashboardSchedule: FC<DashboardScheduleProps> = ({imageSrc=imgTemplate, name = 'Maciej', surname = 'Stefańczyk', visitType='Konsultacja kardiochirurgiczna', visitHour='13:00', visitFullDate = "21.11.2023" }) => {
    return ( 
        <>
            <div className="card__schedule flex gap-4 text-left my-4 flex-row p-5 h-24 justify-left items-center rounded-xl">
                        <Image src={imageSrc}
                            borderRadius='full'
                            boxSize='50px'
                            alt="Avatar image" />
                        <div className="card_name flex flex-col">
                            <p className="font-bold">pacj. {name} { surname }</p>
                            <p>{ visitType }</p>
                        </div>
                <Divider orientation='vertical' />
                <Popover>
                    <PopoverTrigger>
                    <Button>{  visitHour }</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Szczegóły wizyty</PopoverHeader>
                            <PopoverBody>
                                <p><span className="text-bold">Ustalona data wizyty:</span> {visitFullDate} {visitHour}</p>
                            </PopoverBody>
                    </PopoverContent>
                </Popover>
                                <Divider orientation='vertical' />
                <Button variant="green-btn">
                    Zarządzaj
                </Button>
                
            </div>
            
        </>
     );
}
 
export default DashboardSchedule;