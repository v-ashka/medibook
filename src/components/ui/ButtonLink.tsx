import { LinkProps } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps{
    to?: string,
    linkName?: string,
    className?: string,
}

const ButtonLink: React.FC<ButtonLinkProps> = ({to= '/', linkName="Test", className=""}) => {
    return (
        <Link to={to} className={`footer-box-link rounded-3xl max-w-fit p-4 transition-opacity ${className}`}>{linkName}</Link>
     );
}
 
export default ButtonLink;