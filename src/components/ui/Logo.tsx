import { MedicalServices, MedicalServicesOutlined } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
        <Link to={'/'} className="logo">
        <div className="flex sm:justify-center items-center gap-1">
                <MedicalServicesOutlined sx={{ color: green.A400, fontSize:38 }}/>
                <span className='py-4 text-3xl font-family-outfit font-light'>Medi<span className="font-bold font-family-inter ">Book</span></span>
      </div>
      </Link>
      );
}
 
export default Logo;