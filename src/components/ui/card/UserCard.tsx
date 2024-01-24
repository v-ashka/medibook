import { Image } from "@chakra-ui/react";



interface UserCardProps {
    id: number,
    imageSrc?: string,
    name: string,
    surname: string,
    visitType?: string,
    visitHour?: string,
    visitFullDate?: string,
    shortcut?: string,
    children?: React.ReactNode,
    className?: string
    
}
import imgTemplate from '../../../assets/img/template-avatar.png';
import { FC } from "react";


const UserCard: FC<UserCardProps>  = ({imageSrc=imgTemplate, name = 'Maciej', surname = 'Stefańczyk', visitType='Konsultacja kardiochirurgiczna', visitHour='13:00', visitFullDate = "21.11.2023", shortcut, children, className=""}) => {
    return (  
        <>
        <div className={`card__schedule flex gap-4 text-left my-4 flex-row p-5 h-24 justify-left items-center rounded-xl ${className}`}>
                <Image src={imageSrc}
                    borderRadius='full'
                    boxSize='50px'
                    objectFit={'cover'}
                    alt="Photo image" />
                <div className="card_name flex flex-col">
                    <p className="font-bold">{shortcut} {name} { surname }</p>
                    <p>{ visitType }</p>
                </div>
                { children }
            </div>
        </>
    );
}
 
export default UserCard;