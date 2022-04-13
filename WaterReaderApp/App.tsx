import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import ReadingDetail from './Readingdetail';
import TwoHours from './TwoHours';
import TwoDays from './TwoDays';
import AllReadings from './AllReadings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OneDay from './OneDay';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() { 
    return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home}/>          
          <Drawer.Screen name='All Readings' component={AllReadings}/> 
          {/* <Drawer.Screen name='ReadingDetail' component={ReadingDetail}/>  */}
          <Drawer.Screen name='Two Hours' component={TwoHours}/> 
          <Drawer.Screen name='One Day' component={OneDay}/> 
          <Drawer.Screen name='Two Days' component={TwoDays}/> 
        </Drawer.Navigator>
    </NavigationContainer>
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
//           setUser(response.data.json());
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

























  // navigation test uit documentatie

  
// function DetailsScreen({ route, navigation }) {
//   const { itemId, otherParam} = route.params; 
//   return(
//     <View style={styles.container}>   
//       <Text> Details </Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => 
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//             otherParam: 'blablabla',
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.popToTop('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />      
//     </View>
//   ); 
// }

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('./assets/favicon.png')}>
//     </Image>
//   );

// function App() {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           }, 
//         }}
//       >
//         <Stack.Screen 
//         name='Home' 
//         component={HomeScreen} 
//         options={{ 
//           headerTitle: props => <LogoTitle {...props} />,
//           headerRight:() => (
//             <Button
//               onPress={() => alert('Test button ')}
//               title='Info'
//               color= '#aaa'
//               />
//             ),
//           }}
//         />
//         <Stack.Screen 
//         name='Details' 
//         component={DetailsScreen} 
//         options={{ title: 'Check out details here!' }} 
//         initialParams={{ itemId: 8 }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


{/* <Stack.Screen name='Two days'>
          {props => <Reading link={'recent1'} name={'twodays'} title={'Past 2 days'} />}       
        </Stack.Screen>  */}





        // ''' voorbeeld code '''
        // function Home() {
        //   return (
        //     <Tab.Navigator>
        //       <Tab.Screen name="Feed" component={Feed} />
        //       <Tab.Screen name="Messages" component={Messages} />
        //     </Tab.Navigator>
        //   );
        // }
        
        // function App() {
        //   return (
        //     <NavigationContainer>
        //       <Stack.Navigator>
        //         <Stack.Screen
        //           name="Home"
        //           component={Home}
        //           options={{ headerShown: false }}
        //         />
        //         <Stack.Screen name="Profile" component={Profile} />
        //         <Stack.Screen name="Settings" component={Settings} />
        //       </Stack.Navigator>
        //     </NavigationContainer>
        //   );
        // }