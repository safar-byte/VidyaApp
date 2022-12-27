import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Resource_btn(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Resource_page")}>
            <View style={{alignItems: "center"}} >
                <Ionicons name="library-outline" size={45}/>
                <Text>Resources</Text>
            </View>
        </TouchableOpacity>
    );
}