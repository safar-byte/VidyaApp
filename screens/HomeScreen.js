import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ListViewComponent } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.tophalf}>
                <View style={styles.img}>
                    <Image source={require("../assets/vidyalogo.png")} />
                </View>
                <View style={{ paddingBottom: 35, alignItems: "center" }}>
                    <Text style={styles.text}>Vidya Academy of Science</Text>
                    <Text style={{ color: "brown", fontWeight: "bold" }} >&</Text>
                    <Text style={styles.text} >Technology Technical Campus</Text>
                </View>
                <View style={styles.cntfiled}>
                    <View style={styles.contact}>
                        <TouchableOpacity onPress={() => navigation.navigate("Aboutus_page")}>
                            <Ionicons name="information-circle-outline" size={30} style={styles.gap} />
                            <Text style={{ paddingHorizontal: 12 }}>About Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Contact_page") }}>
                            <Ionicons name="call-outline" size={30} style={styles.gap} />
                            <Text style={{ marginHorizontal: 15 }}>contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("NewsnEvent_page") }}>
                            <Ionicons name="newspaper-outline" size={30} style={{ marginLeft: 65 }} />
                            <Text style={{ marginHorizontal: 15, paddingHorizontal: 14 }}>News and events</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.bottomhalf}>
                <View style={styles.bh}>
                    <TouchableOpacity onPress={() => navigation.navigate("Acadamics_sc")}>
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="school-outline" size={45} />
                            <Text> Acadamics </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Placement_page")}>
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="business-outline" size={45} />
                            <Text>placement</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bh}>
                    <TouchableOpacity onPress={() => navigation.navigate("Resource_page")}>
                        <View style={{ alignItems: "center" }} >
                            <Ionicons name="library-outline" size={45} />
                            <Text>Resources</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Admission_sc")}>
                        <View style={{ alignItems: "center" }} >
                            <Ionicons name="person-add-outline" size={45} />
                            <Text>Admission</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cntfiled: {
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        justifyContent: "flex-end",
    },
    tophalf: {
        backgroundColor: '#E5BA73',
        width: '100%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomhalf: {
        height: '45%',
        width: '100%',
        marginRight: 0,
        backgroundColor: "#E5BA73"
    },
    img: {
        paddingBottom: 22,
        width: '100%',
        alignItems: "center",
    },
    bh: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    contact: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    gap: {
        borderRadius: 40,
        paddingHorizontal: 12,
        marginHorizontal: 15,
    },
    text: {
        color: "brown",
        fontSize: 23,
        fontWeight: 'bold',
    }
})
