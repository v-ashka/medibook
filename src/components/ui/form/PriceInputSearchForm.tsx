import { Button, Input } from "@chakra-ui/react";

const PriceInputSearchForm = () => {
    return ( 
        <div className="flex flex-row items-center gap-2">
            <Input placeholder="od" borderRadius="16px" className="price-from max-w-1 font-light" maxWidth="100px" /> <span className="font-bold">-</span> <Input borderRadius="16px" className="price-to max-w-1 font-light" maxWidth="100px" placeholder="do"/> 
        </div>
     );
}
 
export default PriceInputSearchForm;