import { Button } from "@chakra-ui/react";
import { MedicalServicesOutlined } from "@mui/icons-material";

interface BtnTextProps {
    btnTitle: string,
    icon: React.ReactNode
}

const BtnIconText = ({ btnTitle, icon} :  BtnTextProps) => {

    return (<Button gap={".5rem"} >
        <span>{icon}</span>
        <span className="font-family-inter ">{btnTitle}</span>
    </Button> );
}
 
export default BtnIconText;