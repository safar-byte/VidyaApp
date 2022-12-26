import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Acad(){
    return(
        <TouchableOpacity onPress={() => this.props.Navigation.Navigate('Acdms')}>
            <View style={{alignItems: "center"}}>
            <Ionicons name="school-outline" size={45}/>
                <Text> Acadamics </Text>
            </View>
        </TouchableOpacity>
    );
}
