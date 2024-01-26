import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
export default function Aboutus_btn() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Aboutus_sc")}>
            <View style={{ alignItems: "center" }}>
                <Ionicons name="information-circle-outline" size={45} />
                <Text >About Us</Text>
            </View>
        </TouchableOpacity>
    );
}