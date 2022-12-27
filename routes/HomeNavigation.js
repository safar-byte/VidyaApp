import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/HomeScreen";
import Acdamics from "../screens/Acadamcs";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Acade" component={Acdamics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;