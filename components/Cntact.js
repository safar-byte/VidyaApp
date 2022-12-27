import React from "react";
import { TouchableOpacity,Text,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Cntbtn(){
    return (
            <View style={styles.contact}>
               <TouchableOpacity>
                <Ionicons name="call-outline" size={30} style={styles.gap}/>
                <Text style={{marginHorizontal: 15}}>contact</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                <Ionicons name="newspaper-outline" size={30} style={{marginLeft:65}}/>
                <Text style={{marginHorizontal: 15,paddingHorizontal: 14}}>News and events</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                <Ionicons name="information-circle-outline" size={30} style={styles.gap}/>
                <Text style={{paddingHorizontal: 12}}>About Us</Text>
               </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    contact: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    gap: {
        borderRadius:40,
        //backgroundColor: 'lime',
        paddingHorizontal: 12,
        marginHorizontal: 15,
    }
})