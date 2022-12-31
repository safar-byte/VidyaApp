import React, { useEffect, useRef, useState, Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";


const height = Dimensions.get('window').height;
const alreadyInjected = false;
export default function Admission_sc() {



    const webViewRef = useRef(null);
    const onAndroidBackPress = () => {
        if (webViewRef.current) {
            webViewRef.current.goBack();
            return true; // prevent default behavior (exit app)
        }
        return false;
    };



    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
            };
        }
    }, []);
    const [isInternetReachable, setisInternetReachable] = useState(false);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setisInternetReachable(state.isInternetReachable)
        });
        return () => unsubscribe();

    }, [])

    //remove all warn
    LogBox.ignoreAllLogs();



    const runFirst = `
    let x=document.querySelector("body > section.hed").remove();
    let y=document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
    let z=document.querySelector("body > section.cont_bg > div:nth-child(3) > div").remove();
    let a=document.querySelector("body > section.cont_bg > div:nth-child(6)").remove();
    let v=document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
    
    
          true; 
        `;





    return (
        <>

            <View style={{ flex: 1 }}>
                {isInternetReachable ?
                    <WebView
                        ref={webViewRef}
                        style={styles.container}

                        injectedJavaScript={runFirst}
                        source={{ uri: 'https://vidyatcklmr.ac.in/admissions_vidya.php' }}
                        startInLoadingState={true}
                        onMessage={(event) => {
                            alert(event.nativeEvent.data);
                        }}

                        // injectedJavaScript={runFirst}
                        renderError={() => (<SomethingWent />)}
                        renderLoading={() => (
                            <ActivityIndicator
                                color="black"
                                size="large"
                                style={styles.flexContainer}
                            />
                        )}
                    /> : <OfflineNotice />

                }

            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",

    },
    flexContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    }

})

