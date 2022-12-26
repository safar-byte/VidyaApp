import React from "react";
import { Text,TouchableOpacity,View,StyleSheet, VirtualizedList } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Place(){
    return(
        <TouchableOpacity>
            <View style={{alignItems: "center"}}>
                <Ionicons name="business-outline" size={45} style={{}}/>
                <Text>placement</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet;