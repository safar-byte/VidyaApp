import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/HomeScreen";
import Acadamics_sc from "../screens/Acadamics_sc";
import Admission_sc from '../screens/Admission_sc';
import Placement_sc from '../screens/Placement_sc';
import Aboutus_sc from '../screens/Aboutus_sc';
import Resource_sc from '../screens/Resource_sc';
import Contact_sc from '../screens/Contact_sc';
import NewsandEvent_sc from '../screens/NewsandEvent_sc';
import DarkTheme from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Acadamics_sc" component={Acadamics_sc} />
        <Stack.Screen name="Admission_sc" component={Admission_sc} />
        <Stack.Screen name="Placement_page" component={Placement_sc} />
        <Stack.Screen name='Aboutus_page' component={Aboutus_sc} />
        <Stack.Screen name='Resource_page' component={Resource_sc} />
        <Stack.Screen name='Contact_page' component={Contact_sc} />
        <Stack.Screen name='NewsnEvent_page' component={NewsandEvent_sc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;