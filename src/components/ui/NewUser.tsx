import { Box, Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";


const NewUsers = () => {

    const NewUsersData = [
        {"name": "Adam", "surname": "Sklodowy", "spec": "Kardiolog / kardiochirurg", "place": "ZPO Poznań", "avtar_img": ""},
        {"name": "Adam", "surname": "Sklodowy", "spec": "Kardiolog / kardiochirurg", "place": "ZPO Poznań", "avtar_img": ""},
        {"name": "Adam", "surname": "Sklodowy", "spec": "Kardiolog / kardiochirurg", "place": "ZPO Poznań", "avtar_img": ""},
        {"name": "Adam", "surname": "Sklodowy", "spec": "Kardiolog / kardiochirurg", "place": "ZPO Poznań", "avtar_img": ""},
    ]
    


    return ( 
        <SimpleGrid columns={[1,2,4,4]} spacing={10} className="mt-10">
            {NewUsersData.map((item, index) => {

                return (
                    <Card
                    direction={{ base: 'column', sm: 'column' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Image
                      borderRadius='full'
                      boxSize='150px'
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '100%' }}
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt="Photo"
                    />
                  
                    <Stack>
                      <CardBody>
                        <Heading size='md'>{item.name} {item.surname}</Heading>
                        <Text py='2'>
                          {item.spec} - {item.place}
                        </Text>
                      </CardBody>
                    </Stack>
                  </Card>
                );
            })}
        </SimpleGrid>
     );
}
 
export default NewUsers;