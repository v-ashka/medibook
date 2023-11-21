import { Button } from "@chakra-ui/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";

const datepickerData: Array<any> = [
    {
    "id": 1,
    "dayName": "Dziś",
    "dayDate": "08.11",
    "availableHours": [
        { "id": 1, "hour": "8:00", "available": false },
         { "id": 2, "hour": "9:00", "available": false },
         { "id": 3, "hour": "10:00", "available": true },
         { "id": 4, "hour": "11:00", "available": true },
         { "id": 5, "hour": "12:00", "available": true },
         { "id": 6, "hour": "13:00", "available": true },
         { "id": 7, "hour": "14:00", "available": false },
         { "id": 8, "hour": "15:00", "available": false },
         { "id": 9, "hour": "16:00", "available": true },
        { "id": 10, "hour": "17:00", "available": false },
        { "id": 11, "hour": "18:00", "available": true },
        { "id": 12, "hour": "19:00", "available": true },
        { "id": 13, "hour": "20:00", "available": false} ,
    ]
},
    {
        "id": 2,
    "dayName": "Jutro",
    "dayDate": "09.11",
    "availableHours": [
        { "id": 1, "hour": "8:00", "available": true },
         { "id": 2, "hour": "9:00", "available": false },
         { "id": 3, "hour": "10:00", "available": true },
         { "id": 4, "hour": "11:00", "available": true },
         { "id": 5, "hour": "12:00", "available": true },
         { "id": 6, "hour": "13:00", "available": true },
         { "id": 7, "hour": "14:00", "available": true },
         { "id": 8, "hour": "15:00", "available": false },
         { "id": 9, "hour": "16:00", "available": true },
        { "id": 10, "hour": "17:00", "available": false },
        { "id": 11, "hour": "18:00", "available": true },
        { "id": 12, "hour": "19:00", "available": true },
        { "id": 13, "hour": "20:00", "available": true} ,
    ]
    },
    {
        "id": 3,
    "dayName": "Jutro",
    "dayDate": "09.11",
    "availableHours": [
        { "id": 1, "hour": "8:00", "available": true },
         { "id": 2, "hour": "9:00", "available": false },
         { "id": 3, "hour": "10:00", "available": true },
         { "id": 4, "hour": "11:00", "available": true },
         { "id": 5, "hour": "12:00", "available": true },
         { "id": 6, "hour": "13:00", "available": true },
         { "id": 7, "hour": "14:00", "available": true },
         { "id": 8, "hour": "15:00", "available": false },
         { "id": 9, "hour": "16:00", "available": true },
        { "id": 10, "hour": "17:00", "available": false },
        { "id": 11, "hour": "18:00", "available": true },
        { "id": 12, "hour": "19:00", "available": true },
        { "id": 13, "hour": "20:00", "available": true} ,
    ]
    },
    {
        "id": 4,
    "dayName": "Pojutrze",
    "dayDate": "10.11",
    "availableHours": [
        { "id": 1, "hour": "8:00", "available": true },
         { "id": 2, "hour": "9:00", "available": false },
         { "id": 3, "hour": "10:00", "available": true },
         { "id": 4, "hour": "11:00", "available": true },
         { "id": 5, "hour": "12:00", "available": true },
         { "id": 6, "hour": "13:00", "available": true },
         { "id": 7, "hour": "14:00", "available": true },
         { "id": 8, "hour": "15:00", "available": false },
         { "id": 9, "hour": "16:00", "available": true },
        { "id": 10, "hour": "17:00", "available": false },
        { "id": 11, "hour": "18:00", "available": true },
        { "id": 12, "hour": "19:00", "available": true },
        { "id": 13, "hour": "20:00", "available": true} ,
    ]
    },
    {
            "id": 5,
    "dayName": "",
    "dayDate": "11.11",
    "availableHours": [
        { "id": 1, "hour": "8:00", "available": true },
         { "id": 2, "hour": "9:00", "available": false },
         { "id": 3, "hour": "10:00", "available": true },
         { "id": 4, "hour": "11:00", "available": true },
         { "id": 5, "hour": "12:00", "available": true },
         { "id": 6, "hour": "13:00", "available": true },
         { "id": 7, "hour": "14:00", "available": true },
         { "id": 8, "hour": "15:00", "available": false },
         { "id": 9, "hour": "16:00", "available": true },
        { "id": 10, "hour": "17:00", "available": false },
        { "id": 11, "hour": "18:00", "available": true },
        { "id": 12, "hour": "19:00", "available": true },
        { "id": 13, "hour": "20:00", "available": true} ,
    ]
    },
    

]


interface SearchFormDatePickerProps{
    className?: string
}


const ShowOpenHours = (data: Array<any>) => {
    return (
        data.map((date) => {
            return (
                <div className="datepicker__dayrow flex flex-col gap-2" key={date.id}>
                <div className="datepicker__day bg-white rounded-lg h-14 flex justify-center flex-col">
                    <p className="text-blue-700">{date.dayName}</p>
                    <p className="text-blue-700">{date.dayDate}</p>
                </div>
                    {date.availableHours.map((hourObj: any) => {
                        const innerKey = `${date.id}-${hourObj.id}`

                        return (
                            <div className="datepicker__timerow-list"key={innerKey}>
                                <Button className="datetime__time-item w-20" >
                                    {hourObj.available ? hourObj.hour : '-'}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            )    
        })
    )
}



const SearchFormDatePicker: React.FC<SearchFormDatePickerProps> = ({className=''}) => {
    return ( 
        <div className={`datepicker bg-blue-700 p-4 flex rounded-3xl gap-4 h-96  overflow-hidden justify-center ${className}`}>
            <Button className="changeDateLeft"><KeyboardArrowLeft/></Button>
            <div className="datepicker_dates flex flex-row gap-4 w-fit overflow-hidden overflow-x-scroll rounded-lg backdrop-blur-lg">{ ShowOpenHours(datepickerData) }</div>
            <Button className="changeDateLeft"><KeyboardArrowRight/></Button>
        </div>
     );
}
 
export default SearchFormDatePicker;