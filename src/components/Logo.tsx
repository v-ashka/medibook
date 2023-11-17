import { MedicalServices, MedicalServicesOutlined } from "@mui/icons-material";
import { green } from "@mui/material/colors";
const Logo = () => {
    return (
        <div className="flex sm:justify-center items-center gap-1">
                <MedicalServicesOutlined sx={{ color: green.A400, fontSize:38 }}/>
                <span className='py-4 text-3xl font-family-outfit font-light'>Medi<span className="font-bold font-family-inter ">Book</span></span>
        </div>
      );
}
 
export default Logo;