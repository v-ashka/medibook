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
        <Link to={to} className={`rounded-3xl max-w-fit p-4 bg-blue-600 text-white hover:bg-blue-700 transition-opacity active:bg-blue-700 ${className}`}>{linkName}</Link>
     );
}
 
export default ButtonLink;