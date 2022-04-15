import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import TwoHours from './TwoHours';
import TwoDays from './TwoDays';
import AllReadings from './AllReadings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OneDay from './OneDay';

const Drawer = createDrawerNavigator();

export default function App() { 
    return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home}/>          
          <Drawer.Screen name='All Readings' component={AllReadings}/>          
          <Drawer.Screen name='Two Hours' component={TwoHours}/> 
          <Drawer.Screen name='One Day' component={OneDay}/> 
          <Drawer.Screen name='Two Days' component={TwoDays}/> 
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
