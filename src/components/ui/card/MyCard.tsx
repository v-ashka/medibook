import { Box } from "@chakra-ui/react";

type MyCardProps = {
    children: React.ReactNode
}

const MyCard = (props: MyCardProps) => {
    return ( 
        <Box className="container-bg drop-shadow-md rounded-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-4xl">
            {props.children}
        </Box>
     );
}
 
export default MyCard;