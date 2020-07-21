import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
 
import Book from './Book'
import Home from './Home'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator>
      <Drawer.Screen name="BOOK" component={MyDrawer} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MyDrawer() {
  return (
    <Stack.Navigator initialRouteName="DRAWER">
        <Stack.Screen options={{headerShown:false}} name="login"  component={Login}  />
        <Stack.Screen options={{headerStyle:{backgroundColor:'#419dfa'}}} name="homeScreen" component={Home}  />



      </Stack.Navigator>
    
  );
}