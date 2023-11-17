import { LocationCity, LocationCityOutlined, OnlinePrediction } from "@mui/icons-material";
import BtnIconText from "./BtnIconText";
import InputSearchForm from "./InputSearchForm";
import { Button, Checkbox, CheckboxGroup, FormControl, FormHelperText, Stack } from "@chakra-ui/react";
import PriceInputSearchForm from "./PriceInputSearchForm";
import SearchFormDatePicker from "./SearchFormDatePicker";

const SearchForm = () => {
    // const []

    return (  
        <div className="searchform drop-shadow-md rounded-3xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-4xl">
            <FormControl className="flex flex-wrap justify-between">
            <div className="searchform__col p-6">
                
                <p className="searchform__label font-bold text-left mb-2 text-lg">Rodzaj wizyty</p>
                <div className="searchform__item gap-2 flex flex-wrap mb-4">
                    <BtnIconText btnTitle={"W gabinecie"} icon={<LocationCityOutlined />} />
                    <BtnIconText btnTitle={"Online"} icon={<OnlinePrediction />} />
                </div>

                <p className="searchform__label font-bold text-left mb-2 text-lg">Specjalizacja, badanie lub nazwisko</p>
                <div className="searchform__item gap-2 flex flex-wrap mb-4">
                        <InputSearchForm />  
                </div>

                <p className="searchform__label font-bold text-left mb-2 text-lg">Cena</p>
                <div className="searchform__item gap-2 flex flex-wrap mb-4">
                    <PriceInputSearchForm/>
                    </div>
                    
                <p className="searchform__label font-bold text-left mb-2 text-lg">Dostępność dla pacjentów</p>
                <div className="searchform__item gap-2 flex flex-wrap mb-4">
                    <CheckboxGroup colorScheme='blue' defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={[1, 5]} direction={['column', 'column']}>
    <Checkbox value='1'>na wózku lub o kulach</Checkbox>
    <Checkbox value='2'>z problemami ze słuchem</Checkbox>
    <Checkbox value='3'>z problemami ze wzrokiem</Checkbox>
  </Stack>
</CheckboxGroup>
                </div>
            </div>
                <div className="searchform__col p-6 max-w-lg">
                    <SearchFormDatePicker/>
                </div>
                <div className="searchform__submit_col p-6 flex justify-end min-w-full">
                <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                     <OnlinePrediction />   Szukaj wizyty 
                    </Button>
                </div>
                </FormControl>
            </div>
    );
}
 
export default SearchForm;