import React from "react";
import { TouchableOpacity,Text,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Cntbtn(){
    return (
        <TouchableOpacity>
            <View style={styles.contact}>
               <View>
                <Ionicons name="call-outline" size={30} style={styles.gap}/>
                <Text style={{marginHorizontal: 15}}>contact</Text>
               </View>
               <View>
                <Ionicons name="newspaper-outline" size={30} style={{marginLeft:65}}/>
                <Text style={{marginHorizontal: 15,paddingHorizontal: 14}}>News and events</Text>
               </View>
               <View>
                <Ionicons name="information-circle-outline" size={30} style={styles.gap}/>
                <Text style={{paddingHorizontal: 12}}>About Us</Text>
               </View>
            </View>
        </TouchableOpacity>
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