import { ReactNode } from "react";

type BannerTextProps = {
    children?: React.ReactNode,
    btnTitle?: string,
    btnTitleBold?: string,
    btnSubtitle?: string,
    ad?: string,
}



const BannerText = (props: BannerTextProps) => {
    return ( 
        <div className="banner flex justify-between m-10 mt-20">

            <div className="banner__content">
                <p className="banner__title text-4xl md:text-5xl z-50 relative max-w-md text-left"> <span className={"font-bold text-family-inter"}>{ props.btnTitleBold }</span> {props.btnTitle} </p>
                <p className="banner__subtitle text-xl md:text-2xl z-50 max-w-md text-left leading-9"> { props.btnSubtitle } </p>
                
            </div>
            
        </div>
     );
}
 
export default BannerText;