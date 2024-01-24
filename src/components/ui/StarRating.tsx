import { Box, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { Star, Stars, StarsOutlined, StarsRounded, StarsTwoTone } from "@mui/icons-material";
import { FC, useState } from "react";


interface StarRatingProps{
    rating: string;
    setRating: (value: number) => void;
    count?: number;
    size?: number;
}

const StarRating: FC<StarRatingProps> = ({rating, setRating, count=5, size=20}) => {
  const [hover, setHover] = useState<number | null>(null);

    return ( 
        <HStack spacing={"2px"}>
            {[...Array(count)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <Box
                        as="label"
                        key={index}
                        color={ratingValue <= (hover || parseInt(rating)) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        className="cursor-pointer"
                        title="star"
                        aria-label="star icon"
                    >
                        <RadioGroup >
                            <Radio
                                name="rating"
                                value={rating}
                                onChange={() => setRating(ratingValue)}
                                display={'none'}
                                aria-label="star rating radio input"
                                aria-hidden="true"
                            >
                            </Radio>
                        </RadioGroup>
                           <Star
                            />
                    </Box>
                )
            })}
        </HStack>
     );
}
 
export default StarRating;