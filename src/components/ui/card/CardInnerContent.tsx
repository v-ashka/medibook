import { Button, Divider, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MoreHorizOutlined } from "@mui/icons-material";
import avatarImg from '../../../assets/img/avatar.jpg';

const CardInnerContent = (props: any) => {
    return ( 
        <div className="card__content p-6">
                    <div className="card_content_header flex gap-4 text-left mb-2 justify-between">
                        <Image src={avatarImg}
                            borderRadius='full'
                            boxSize='50px'
                            alt="Avatar image" />
                        <div className="card_name flex flex-col">
                            <p className="font-bold">dr. Adam Adamczyk</p>
                            <p>Kardiochirurg, Kardiolog</p>
                        </div>
                        <Menu>
                                <MenuButton as={Button} p={0}>
                                    <MoreHorizOutlined />
                                </MenuButton>
                                <MenuList zIndex={9999}>
                                    <MenuItem  zIndex={9999} onClick={() => alert('Kagebunshin')}>Zarządzaj</MenuItem>
                                </MenuList>
                        </Menu>
                    </div>
                    <Divider />
                    <div className="card_content_desc text-left my-4">
                        <p><span className="font-bold">Data wizyty:</span> 10.11.2023 - 13:30</p>
                        <p><span className="font-bold">Rodzaj wizyty:</span>  Online</p>
                        <p><span className="font-bold">Usługa:</span> Konsultacja kardiologiczna</p>
                        <p><span className="font-bold">Cena:</span> 200zł</p>

                    </div>
                    <div className="card_content_footer flex flex-wrap justify-evenly">
                        <Button>Zmień datę</Button>
                        <Button variant={"danger-btn"}>Anuluj wizytę</Button>
                    </div>
                </div>
     );
}
 
export default CardInnerContent;