import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Admission_btn(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Admission_sc")}>
            <View style={{alignItems: "center"}} >
                <Ionicons name="person-add-outline" size={45}/>
                <Text>Admission</Text>
            </View>
        </TouchableOpacity>
    );
}