import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Rsrc(){
    return(
        <TouchableOpacity>
            <View style={{alignItems: "center"}} >
                <Ionicons name="library-outline" size={45}/>
                <Text>Resources</Text>
            </View>
        </TouchableOpacity>
    );
}