import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Contact_btn() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Contact_sc")}>
             <View style={{alignItems: "center"}}>
            <Ionicons name="call-outline" size={45} />
            <Text >Contact Us</Text>
            </View>
        </TouchableOpacity>
    );
}