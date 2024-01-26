import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
export default function NewsnEvent_btn() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("NewsnEvent_sc")}>
            <View style={{alignItems: "center"}}>
            <Ionicons name="information-circle-outline" size={45} />
            <Text >News and Events</Text>
            </View>
        </TouchableOpacity>
    );
}