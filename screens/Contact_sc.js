import React from "react";
import { Text, View, StyleSheet, Linking, Platform, TouchableOpacity, Dimensions } from "react-native";

import { Ionicons } from '@expo/vector-icons'



export default function Contact_sc() {


    const openEmail = () => {
        Linking.openURL("mailto: info@vidyatcklmr.ac.in")
    }

    return (

        < View style={styles.container} >
            <View style={styles.tphf}>
                <View style={styles.conta}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: "brown" }}>Contact Us</Text>
                </View>
                <View style={styles.vast}>
                    <Text style={styles.head}>Vidya Academy of Science & Technology </Text>
                    <Text style={styles.head}>Technical Campus</Text>
                </View >
                <View style={{ marginStart: 10 }}>
                    <Text style={styles.add}>Address:</Text>
                    <Text style={{ fontSize: 13, paddingTop: 5, fontWeight: 'bold' }} >Malakkal P.O., Kilimanoor, Thiruvananthapuram {'\n'}PIN- 695 602 , Kerala, India</Text>
                </View>
            </View>
            <View style={styles.btmhf} >
                <View style={styles.ga}>
                    <Ionicons name="call-outline" size={20} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Call</Text>
                </View>

                <TouchableOpacity onPress={() => { Linking.openURL(`tel:9447540982`) }} activeOpacity={0.7} style={styles.touchableButton} >
                    <Text style={styles.TextStyle}>9447540982</Text>
                </TouchableOpacity>
                <View style={{ paddingTop: 20 }}>
                    <Ionicons name="mail-open-outline" size={20} />
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mail</Text>
                </View>
                <TouchableOpacity onPress={() => openEmail()}>
                    < Text style={{
                        color: 'blue',
                        fontSize: 18
                    }}>info@vidyatcklmr.ac.in</Text>
                </TouchableOpacity>



            </View >




        </View >

    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        //justifyContent: "center",
        alignItems: "center",

    },
    tphf: {
        width: "100%",
        height: "20%"
    },
    conta: {
        justifyContent: "center",
        alignItems: "center",
    },
    vast: {
        justifyContent: "center",
        alignItems: "center"
    },
    head: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "brown"
    },
    add: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'brown',
    },
    btmhf: {
        padding: 10,
        paddingTop: 40,
        width: "100%"
    },

    touchableButton: {
        width: '40%',
        padding: 2,
        backgroundColor: 'brown',
    },
    TextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }

});
