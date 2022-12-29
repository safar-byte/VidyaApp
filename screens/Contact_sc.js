import React, { Component } from "react";
import { Text, View, StyleSheet, Linking, Platform, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Contact_sc() {

    makeCall = () => {

        let phoneNumber = '9447540982';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${9447540982}';
        } else {
            phoneNumber = 'telprompt:${9447540982}';
        }

        Linking.openURL(phoneNumber);
    };
    openEmail = () => {
        Linking.openURL("mailto: mhdshameem321@gmail.com")
    }

    return (

        < View style={styles.cont} >
            <Text style={styles.conta}>Contact Us</Text>
            <Text style={styles.vast}>Vidya Academy of Science & Technology Technical Campus</Text>
            <Text style={styles.add}>Address:</Text>
            <Text style={styles.ad}>Malakkal P.O., Kilimanoor, Thiruvananthapuram - 695 602, Kerala, India</Text>
            <Ionicons name="call-outline" size={20} style={styles.ga} />
            <Text style={{ marginHorizontal: 15, bottom: 390, right: 130, fontSize: 17, fontWeight: 'bold' }}>Call</Text>
            <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
                <Text style={styles.TextStyle}>9447540982</Text>
            </TouchableOpacity>
            <Ionicons name="mail-open-outline" size={20} style={styles.ma} />
            <Text style={{ marginHorizontal: 15, bottom: 380, right: 130, fontSize: 17, fontWeight: 'bold' }}>Mail</Text>
            <TouchableOpacity onPress={() => openEmail()}>
                < Text style={styles.tex}>mhdshameem321@gmail.com</Text>
            </TouchableOpacity></View >

    );
}


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#E5BA73',
        justifyContent: "center",
        alignItems: "center"
    },
    conta: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'Bold',
        color: 'brown',
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    vast: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'brown',
        position: 'absolute',
        top: 75,
        left: 10
    },
    add: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'semi bold',
        color: 'brown',
        position: 'absolute',
        top: 130,
        left: 10
    },
    ad: {
        flex: 1,
        fontSize: 13,
        position: 'absolute',
        top: 155,
        left: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    touchableButton: {
        width: '40%',
        padding: 2,
        backgroundColor: 'brown',
        bottom: 380,
        right: 90
    },
    TextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    ga: {
        bottom: 368,
        right: 160
    },
    ma: {
        bottom: 358,
        right: 160
    },
    tex: {
        color: 'blue',
        fontSize: 18,
        bottom: 375,
        right: 40
    }

});
