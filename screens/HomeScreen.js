import React from "react";
import { Text, StyleSheet, View,TouchableOpacity,Image, ListViewComponent } from "react-native";
import Acadamics_btn from "../components/Acadamics_btn";
import Placement_btn from '../components/Placement_btn';
import Resource_btn from '../components/Resource_btn';
import Admission_btn from "../components/Admission_btn";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.tophalf}>
                <View style={styles.img}>
                <Image source={ require("../assets/vidyalogo.png") } />
                </View>
                <View style={{paddingBottom: 35,alignItems: "center"}}>
                    <Text style={styles.text}>Vidya Acadamy</Text>
                    <Text style={{color: "brown",fontWeight: "bold"}} >of</Text>
                    <Text style={styles.text} >Science & Technology</Text>
                </View>          
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
        //backgroundColor: 'lime',
        paddingTop: 30,
        justifyContent: "flex-end",
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
    img: {
        paddingBottom: 22,
        width: '100%',
        alignItems: "center",
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
        paddingHorizontal: 12,
        marginHorizontal: 15,
    },
    text: {
        color: "brown",
        fontSize: 23,
        fontWeight: 'bold',
    }
})
