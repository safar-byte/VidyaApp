import React from "react";
import { Text, View ,StyleSheet} from "react-native";

export default function Placement_sc(){
    return(
        <View style={styles.container}>
            <Text>Placement</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5BA73',
        justifyContent: "center",
        alignItems: "center",
    }
 })
