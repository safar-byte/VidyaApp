import React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import Cntbtn from '../components/Cntact';
import Acadamics_btn from "../components/Acadamics_btn";
import Placement_btn from '../components/Placement_btn';
import Resource_btn from '../components/Resource_btn';
import Admission_btn from "../components/Admission_btn";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.tophalf}>
                <Text style={styles.va}>Vidya Acadamy</Text>
                <View style={styles.cntfiled}>
                    <View style={styles.contact}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Contact_page") }}>
                            <Ionicons name="call-outline" size={30} style={styles.gap} />
                            <Text style={{ marginHorizontal: 15 }}>contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {  navigation.navigate("NewsnEvent_page") }}>
                            <Ionicons name="newspaper-outline" size={30} style={{ marginLeft: 65 }} />
                            <Text style={{ marginHorizontal: 15, paddingHorizontal: 14 }}>News and events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Aboutus_page")}>
                            <Ionicons name="information-circle-outline" size={30} style={styles.gap} />
                            <Text style={{ paddingHorizontal: 12 }}>About Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bottomhalf}>
                <View style={styles.bh}>
                    <Acadamics_btn />
                    <Placement_btn />
                </View>
                <View style={styles.bh}>
                    <Resource_btn />
                    <Admission_btn />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cntfiled: {
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    tophalf: {
        backgroundColor: '#E5BA73',
        width: '100%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomhalf: {
        height: '45%',
        width: '100%',
        marginRight: 0,
        backgroundColor: "#FAEAB1"
    },
    va: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'brown',
    },
    bh: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    contact: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    gap: {
        borderRadius: 40,
        //backgroundColor: 'lime',
        paddingHorizontal: 12,
        marginHorizontal: 15,
    }
})
