import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Admsn(){
    return(
        <TouchableOpacity>
            <View style={{alignItems: "center"}} >
                <Ionicons name="person-add-outline" size={45}/>
                <Text>Admission</Text>
            </View>
        </TouchableOpacity>
    );
}