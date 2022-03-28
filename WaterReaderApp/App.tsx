import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import Reading from './Readings';
import ReadingList from "./ReadingList";
import useFetch from "./usefetch";
import {apiUrl} from './constants'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ReadingDetail from './Readingdetail';
import TwoHours from './TwoHours';
import TwoDays from './TwoDays';
import AllReadings from './AllReadings';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>   
      <Text> Home </Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Details', {            
            otherParam: 'blablabla',
          });
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions
          ({ title: 'Updated!' })}
      />
        }}
        />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam} = route.params; 
  return(
    <View style={styles.container}>   
      <Text> Details </Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => 
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'blablabla',
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.popToTop('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />      
    </View>
  ); 
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}>
    </Image>
  );
}
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
          <Drawer.Screen name='AllReadings' component={AllReadings}/> 
          <Drawer.Screen name='ReadingDetail' component={ReadingDetail}/> 
          <Drawer.Screen name='TwoHours' component={TwoHours}/> 
          <Drawer.Screen name='TwoDays' component={TwoDays}/> 
        </Drawer.Navigator>
    </NavigationContainer>
  );
}




















  // navigation test uit documentatie
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