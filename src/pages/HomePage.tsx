import {FunctionComponent} from "react";
import {Flex, Text} from "@chakra-ui/react";

const HomePage: FunctionComponent = () => {

    return (
        <div>
            <Flex backgroundColor={"gray"} height={"50vh"} flexDirection={"column"} alignItems={"center"}
                  justifyContent={"center"}>
                <Text as={'b'} color={'white'} fontSize={72}>
                    Степан Мельников
                </Text>
                <Text color={'white'} style={{marginTop: '2%'}} as='samp' fontSize={'xl'}>
                    Сверхначинающий программист
                </Text>
                <Text color={'white'} style={{marginTop: '2%'}} as='kbd' fontSize={'2xl'}>
                    Сайт визитка
                </Text>
            </Flex>

            <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

                <Flex width={"50vw"} style={{marginTop: "3%"}} flexDirection={"column"}>
                    <Text fontSize={"3xl"} color={"black"} as={"b"} textAlign={"center"}>
                        2018 год
                    </Text>
                    <Text fontSize={"2xl"} color={"black"} as={"samp"}>
                        Изучение основ C#, знакомство с интерфейсом Unity
                    </Text>
                </Flex>

                <Flex width={"50vw"} style={{marginTop: "3%"}} flexDirection={"column"}>
                    <Text fontSize={"3xl"} color={"black"} as={"b"} textAlign={"center"}>
                        2021 год
                    </Text>
                    <Text fontSize={"2xl"} color={"black"} as={"samp"}>
                        Написал бота для ВК, знакомство с основами фреймворка Django для Python
                    </Text>
                </Flex>

                <Flex width={"50vw"} style={{marginTop: "3%"}} flexDirection={"column"}>
                    <Text fontSize={"3xl"} color={"black"} as={"b"} textAlign={"center"}>
                        2022 год
                    </Text>
                    <Text fontSize={"2xl"} color={"black"} as={"samp"}>
                         Окончил Яндекс Лицей с отличием. Самостоятельное изучение таких языков программирования как: JavaScript, C++. Языка разметки - HTML, языка запросов - SQL
                    </Text>
                </Flex>

            </Flex>
        </div>
    );
};

export default HomePage;