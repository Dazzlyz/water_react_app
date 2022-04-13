import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, } from 'react-native';
import axios from 'axios';
import { apiUrl } from './constants';
import { Box, Center, NativeBaseProvider} from "native-base";


export default TwoHours = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://quiet-mayfly-37.loca.lt/recent");
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
      <Box> Last 2 hours </Box>
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



// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   View,
//   Button,
//   Image,
//   Platform,
// } from "react-native";
// import Constants from "expo-constants";


// const baseUrl = "http://127.0.0.1:5000";

// function User({ userObject }) {
//   return (
//     <View>     
//       <Text style={{ textAlign: "center", color: "white" }}>
//         {`${userObject.id} ${userObject.level}`}
//       </Text>
//     </View>
//   );
// }
// export default function TwoHours() {
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setErrorFlag] = useState(false);
//   const changeUserIdHandler = () => {
//     setUserId((userId) => (userId === 3 ? 1 : userId + 1));
//   };
//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     const url = `${baseUrl}/recent}`;
//     const fetchUsers = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(url, { cancelToken: source.token });
//         if (response.status === 200) {
//           setUser(response.data.data);
//           setIsLoading(false);
//           return;
//         } else {
//           throw new Error("Failed to fetch users");
//         }
//       } catch (error) {
//         if(axios.isCancel(error)){
//           console.log('Data fetching cancelled');
//           console.log(error);
          
//         }else{
//           setErrorFlag(true);
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchUsers();
//     return () => source.cancel("Data fetching cancelled");
//   }, [userId]);
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.wrapperStyle}>
//         {!isLoading && !hasError && user && <User userObject={user} />}
//       </View>
//       <View style={styles.wrapperStyle}>
//         {isLoading && <Text> Loading </Text>}
//         {!isLoading && hasError && <Text> An error has occurred </Text>}
//       </View>
//       <View>
//         <Button
//           title="Reload"
//           onPress={changeUserIdHandler}
//           disabled={isLoading}          
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "dodgerblue",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
//   },
//   wrapperStyle: {
//     minHeight: 128,
//   },
//   buttonStyles: {
//     padding: 100,
//   },
// });

