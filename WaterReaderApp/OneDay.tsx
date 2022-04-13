import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, } from 'react-native';
import axios from 'axios';
import { apiUrl } from './constants';
import { Box, Center, NativeBaseProvider} from "native-base";


export default TwoHours = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://quiet-mayfly-37.loca.lt/recent1");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

    const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        id: {item.id}Water level:{item.level}Time: {item.time}
      </Box>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box> Last 24 hours </Box>
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