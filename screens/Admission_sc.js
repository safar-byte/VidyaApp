import React from "react";
import { Text, View ,StyleSheet} from "react-native";

const Admission_sc = () => {
    return(
        <View style={styles.container}>
            <Text>Admission</Text>
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

 export default Admission_sc