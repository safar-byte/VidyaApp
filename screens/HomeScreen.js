import React from "react";
import { Text,StyleSheet,View } from "react-native";
import Cntbtn from '../components/Cntact';
import Acad from '../components/Acadamics';
import Place from '../components/Placemnt';
import Rsrc from '../components/Resource';
import Admsn from '../components/Admssn';
// import { createStackNavigator, CreateAppContainer } from "react-navigation";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.tophalf}>

                {/* news,aboutus,contacts */}
                <Text style={styles.va}>Vidya Acadamy</Text>
                <View style={styles.cntfiled}>
                    <Cntbtn />
                </View>
            </View>
            <View style={styles.bottomhalf}>
                {/* placement,admission,acadamics,resource */}
                <View style={styles.bh}>
                    {/* acadamics */}
                    <Acad />
                    {/* placement */}
                    <Place />
                </View>
                <View style={styles.bh}>
                    {/* admission */}
                    <Rsrc />
                    {/* resource */}
                    <Admsn />
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
        backgroundColor: "#FAEAB1"
    },
    va: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'brown',
    },
    bh: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})
