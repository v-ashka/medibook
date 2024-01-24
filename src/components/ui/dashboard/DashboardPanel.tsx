import { OnlinePrediction, PeopleAlt, PeopleAltOutlined } from "@mui/icons-material";
import BtnIconText from "../BtnIconText";
import { Button, Divider, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer } from "@chakra-ui/react";
import avatarImg from '../../../assets/img/avatar.jpg';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarRating from "../StarRating";
import DashboradWorkSchedule from "./DashboardWorkSchedule";
import DashboardSchedule from "./DashboardSchedule";
import UserCard from "../card/UserCard";

import dashboardData from '../../../json/dashboard-act-schedule.json';

const DashboardPanel = () => {

    const [rating, setRating] = React.useState(0);

    return (    
        <div className="dashboard-left-panel container-bg drop-shadow-md rounded-3xl max-w-full">
            <div className="dashboard__panel p-6">
                <p className="dashboard__label font-bold text-left mb-2 text-3xl py-2">Centrum medyczne - Lorem ipsum</p>
                    <div className="dashboard__panel__item gap-2 flex flex-wrap mb-4">
                        <BtnIconText btnTitle={"Zarządzaj pracownikami"} icon={<PeopleAltOutlined />} />
                        <BtnIconText btnTitle={"Rejestr wizyt"} icon={<OnlinePrediction />} />
                </div>
                 <div className="card__content">
                    <div className="card_content_header flex gap-4 text-left mb-2 flex-wrap my-5">
                        <Image src={avatarImg}
                            borderRadius='full'
                            boxSize='50px'
                            alt="Photo image" />
                        <div className="card_name flex flex-col">
                            <p className="font-bold">dr. Adam Adamczyk</p>
                            <p>Kardiochirurg, Kardiolog</p>
                        </div>
                        <div className="card_name flex flex-col justify-center">
                            <StarRating rating={rating.toString()} setRating={setRating}/>
                        </div>
                    </div>
                    <Divider />
                    <p className="dashboard__label font-bold text-left mb-2 text-lg my-5">Aktualny plan pracy </p>
                    <div className="dashboard__schedule">
                        {dashboardData.map((record, index) => {
                            return (
                                <UserCard key={record.id} name={record.profile.firstName} surname={record.profile.lastname} id={record.id} imageSrc={record.profile.avatarImgUrl.length > 1 ? record.profile.avatarImgUrl : undefined } shortcut={record.profile.shortcut}> 
                                     <Divider orientation='vertical' />
                                    <Popover>
                                        <PopoverTrigger>
                                        <Button>{  record.dayName }</Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Szczegóły wizyty</PopoverHeader>
                                                <PopoverBody>
                                                    <p><span className="text-bold">Ustalona data wizyty:</span> {record.dayName} {record.dayDate}</p>
                                                </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                                    <Divider orientation='vertical' />
                                    <Button variant="green-btn">
                                        Zarządzaj
                                    </Button>
                
                                </UserCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardPanel;

