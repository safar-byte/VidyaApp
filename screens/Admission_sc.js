import React, { useEffect, useRef, useState, Component, current } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";



export default function Admission_sc() {



    const webViewRef = useRef();


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

    console.log('HEllo')


    const [isInternetReachable, setisInternetReachable] = useState(false);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setisInternetReachable(state.isInternetReachable)
        });
        return () => unsubscribe();

    }, [])

    //remove all warn
    LogBox.ignoreAllLogs();


    const injectJS = () => {
        webViewRef.current.injectJavaScript(
            `document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3) > div").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(6)").remove();
            document.querySelector("body > section.banner.wow.fadeIn > img").remove();
        
            ;
            
            `,


        );

    };

    const onNavigationStateChange = (navState) => {
        if (navState.url === 'https://vidyatcklmr.ac.in/admission_details.php?adm_id=5') {
            webViewRef.current.injectJavaScript(
                `document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                document.querySelector("body > section.banner.wow.fadeIn > img").remove();
                document.querySelector("body > section.cont_bg > div:nth-child(7)").remove();
                ;`
            );
        }
        else if (navState.url === 'https://vidyatcklmr.ac.in/admission_details.php?adm_id=4') {
            webViewRef.current.injectJavaScript(
                `document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                document.querySelector("body > section.banner.wow.fadeIn > img").remove();
                document.querySelector("body > section.cont_bg > div:nth-child(7) > div > div").remove();
                ;`
            );
        }
    };













    return (
        <>

            <View style={{ flex: 1 }}>


                {isInternetReachable ?
                    <WebView
                        ref={webViewRef}
                        style={styles.container}
                        // injectedJavaScript={runFirst}
                        onLoad={injectJS}

                        source={{ uri: 'https://vidyatcklmr.ac.in/admissions_vidya.php' }}
                        onNavigationStateChange={onNavigationStateChange}

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

