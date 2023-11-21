import { Circle, SquareProps } from "@chakra-ui/react";

interface CircleHeroObjectProps{
    className?: string,
}

const CircleHeroObject: React.FC<CircleHeroObjectProps> = ({className = ''}) => {
    return (  
        <Circle size={'250px'} bg="brand.200" className={`absolute -z-50 ${className}`} />
    );
}
 
export default CircleHeroObject;