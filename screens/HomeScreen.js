import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ListViewComponent } from "react-native";
import Acadamics_btn from "../components/Acadamics_btn";
import Placement_btn from '../components/Placement_btn';
import Resource_btn from '../components/Resource_btn';
import Admission_btn from "../components/Admission_btn";
import Contact_btn from "../components/Contact_btn";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Aboutus_btn from "../components/Aboutus_btn";
import NewsnEvent_btn from "../components/NewsnEvent_btn";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.tophalf}>
                <View style={styles.img}>
                    <Image source={require("../assets/vidyalogo.png")} />
                </View>
                <View style={{ paddingBottom: 35, alignItems: "center" }}>
                    <Text style={styles.text}>Vidya Academy of Science</Text>
                    <Text style={styles.text} >&</Text>
                    <Text style={styles.text} >Technology Technical Campus</Text>
                </View>

               

            </View>
            <View style={styles.bottomhalf}>
            <View style={styles.bh}>
                    <Aboutus_btn />
                    <Acadamics_btn />
                    <Admission_btn />


                </View>
                <View style={styles.bh}>

                    <Contact_btn />
                    <NewsnEvent_btn />
                </View>
                <View style={styles.bh}>
                    <Placement_btn />
                    <Resource_btn />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#E5BA73',
        alignItems: 'center',
    },

    tophalf: {
       
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomhalf: {
        height: '55%',
        width: '100%',
        marginRight: 0,
     
    },
    img: {
       height:'60%',
        width: '100%',
        alignItems: "center",
    },
    bh: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    text: {
        color: "brown",
        fontSize: 23,
        fontWeight: 'bold',
    }
})
