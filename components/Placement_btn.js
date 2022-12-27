import React from "react";
import { Text,TouchableOpacity,View,StyleSheet, VirtualizedList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Placement_btn(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Placement_page")}>
            <View style={{alignItems: "center"}}>
                <Ionicons name="business-outline" size={45} />
                <Text>placement</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet;