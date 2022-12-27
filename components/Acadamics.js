import React from "react";
import { Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
const NavigatetoAcd = props => { //ITHU ARIYAHTIYLLLA
    props.navigation.naivgate('Acade')//
}                                      //
const  Acad = props => {            //
    return(


        <TouchableOpacity onPress={() => NavigatetoAcd(props) }>
            <View style={{alignItems: "center"}}>
            <Ionicons name="school-outline" size={45}/>
                <Text> Acadamics </Text>
            </View>
        </TouchableOpacity>
    );
}
export default Acad;