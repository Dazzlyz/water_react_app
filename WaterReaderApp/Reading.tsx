import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { apiUrl } from './constants';
import { Box, Center, NativeBaseProvider} from "native-base";


const Reading = ({link, title}) => {     
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);   
    

    const fetchData = async () => {      
        const resp = await fetch(`${apiUrl}${link}`);
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

        const renderItem = ({ item }) => {
        return (
        <Box px={5} py={2} rounded="md" bg="#0960F7" my={2}>
            ID: {item.id}Water level:{item.level}Time: {item.time}
        </Box>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NativeBaseProvider>
        <Center flex={1}>
        <Box> {title} </Box>
            {loading && <Box>Loading..</Box>}
            {data && (
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            )}
        </Center>
        </NativeBaseProvider>
    );
    }

export default Reading;
