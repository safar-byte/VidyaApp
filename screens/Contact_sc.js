import React from "react";
import { Text, View ,StyleSheet} from "react-native";

export default function Contact_sc(){
    return(
        <View style={styles.cont}>
            <Text>contact</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#E5BA73',
        justifyContent: "center",
        alignItems: "center",
    }
 })