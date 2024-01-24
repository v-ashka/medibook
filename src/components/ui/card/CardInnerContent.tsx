import { Button, Divider, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MoreHorizOutlined } from "@mui/icons-material";
import avatarImg from '../../../assets/img/avatar.jpg';

const CardInnerContent = (props: any) => {
    return ( 
        <div className="card__content p-6">
                    <div className="card_content_header flex gap-2 text-left mb-2 justify-between flex-row max-lg:flex-wrap">
                        <Image src={avatarImg}
                            borderRadius='full'
                            boxSize='50px'
                            alt="Photo image" />
                        <div className="card_name flex flex-col">
                            <p className="font-bold">dr. Adam Adamczyk</p>
                            <p>Kardiochirurg, Kardiolog</p>
                        </div>
                        <Menu>
                                <MenuButton as={Button} p={0} aria-label="action button" title="action button">
                                    <MoreHorizOutlined />
                                </MenuButton>
                                <MenuList zIndex={9999}>
                                    <MenuItem  zIndex={9999} onClick={() => alert('Zarzadzaj')}>Zarządzaj</MenuItem>
                                </MenuList>
                        </Menu>
                    </div>
                    <Divider />
                    <div className="card_content_desc text-left my-4">
                        <p><span className="font-bold">Data wizyty: </span>10.11.2023 - 13:30</p>
                        <p><span className="font-bold">Rodzaj wizyty: </span>Online</p>
                        <p><span className="font-bold">Usługa: </span>Konsultacja kardiologiczna</p>
                        <p><span className="font-bold">Cena: </span>200zł</p>

                    </div>
                    <div className="card_content_footer flex flex-wrap max-lg:justify-evenly gap-4">
                        <Button variant={"outline"} colorScheme="blue">Zmień datę</Button>
                        <Button variant={"outline"} colorScheme="red">Anuluj wizytę</Button>
                    </div>
                </div>
     );
}
 
export default CardInnerContent;