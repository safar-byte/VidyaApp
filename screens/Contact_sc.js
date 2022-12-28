import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Contact_sc() {
    return (
        <View style={styles.cont}>
            <Text style={styles.conta}>Contact Us</Text>
            <Text style={styles.vast}>Vidya Academy of Science & Technology Technical Campus</Text>
            <Text style={styles.add}>Address:</Text>
            <Text style={styles.ad}>Malakkal P.O., Kilimanoor, Thiruvananthapuram - 695 602, Kerala, India</Text>
        </View>
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
    }
})