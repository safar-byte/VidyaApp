import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { createStackNavigator } from 'react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Acdamics from './screens/Acadamcs';


// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Acdms" component={Acdamics} />
//     </Stack.Navigator>
//   );
// }


export default function App() {
  return (
    <Home />
  );
}
