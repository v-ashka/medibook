import { Box, SimpleGrid } from "@chakra-ui/react";
import { CalendarMonth, DateRangeOutlined, LinkedCameraOutlined, LockClock, Search, ThumbUp, ThumbUpAltOutlined } from "@mui/icons-material";



const CTACardBoxes = () => {

    const CTACardText = [
        {"title": "Znajdź specjalistę", "icon": "search", "desc": "Wybierz spośród ponad 146 000 lekarzy i specjalistów. Przeglądaj opinie innych pacjentów."},
        {"title": "Łatwo umów wizytę", "icon": "calendar", "desc": "Wybierz odpowiadający Ci termin, podaj swoje dane, potwierdź... i już. Wizyta umówiona!"},
        {"title": "Przyjdź na wizytę", "icon": "clock", "desc": "O wybranym terminie przypomnimy ci automatycznie w wiadomości sms i mailu."},
        {"title": "Usługa jest bezpłatna", "icon": "like", "desc": "Korzystanie z serwisu medibook.pl jest dla pacjentów zupełnie bezpłatne"},
    ]

    const myObj: any = {
        "search": <Search/>,
        "calendar": <CalendarMonth/>,
        "clock": <LockClock/>,
        "like": <ThumbUpAltOutlined/>
    }

    return ( <>
        <SimpleGrid columns={[1,1,4,4]} spacing={5} className="mt-10">
            { CTACardText.map((box, index) => {
                return (
                    <Box className="p-8 bg-gray-50 rounded-xl">
                        <SimpleGrid columns={1}>
                            <div className="flex flex-row gap-4 items-center mb-4">
                                {myObj[box.icon]}
                                {box.title}
                            </div>
                </SimpleGrid>
                {box.desc}
            </Box>
                )
            })}
            
        </SimpleGrid>
    </> );
}
 
export default CTACardBoxes;