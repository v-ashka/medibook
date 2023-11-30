import { Circle, SquareProps } from "@chakra-ui/react";

interface CircleHeroObjectProps{
    className?: string,
}

const CircleHeroObject: React.FC<CircleHeroObjectProps> = ({className = ''}) => {
    return (  
        <Circle size={'250px'} className={`absolute -z-50 bg-green-400 dark:bg-yellow-300 ${className}`} />
    );
}
 
export default CircleHeroObject;