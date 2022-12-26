import React from "react";
import { Text, View ,StyleSheet} from "react-native";

const aboutus = () => {
    return(
        <View style={styles.container}>
            <Text>aboutus</Text>
        </View>
    );
}
 styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5BA73',
        justifyContent: "center",
        alignItems: "center",
    }
 })