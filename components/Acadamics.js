import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

                                     
function  Acad() {        
    const navigation = useNavigation();
    return(


        <TouchableOpacity onPress={() => navigation.navigate("Acade") }>
            <View style={{alignItems: "center"}}>
            <Ionicons name="school-outline" size={45}/>
                <Text> Acadamics </Text>
            </View>
        </TouchableOpacity>
    );
}
export default Acad;