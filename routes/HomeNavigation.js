import { createStackNavigator } from "react-navigation-stack";
//import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import Home from "../screens/HomeScreen";
import Acdamics from "../screens/Acadamcs";

const hmscreens = {
    Home : {
        screen: Home
    },
    Acadamics : {
        screen: Acdamics
    }
}

const HomeStack = createStackNavigator(hmscreens);

export default createAppContainer(HomeStack);