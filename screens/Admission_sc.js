import React, { useEffect, useRef, useState, Component, current } from "react";
import { Button, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";



export default function Admission_sc() {


    const [visible, setVisible] = useState(true);


    const webViewRef = useRef();

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
            }
        }
    }, []); // INITIALIZE ONLY ONCE

    const HandleBackPressed = () => {
        if (webViewRef.current.canGoBack) {
            webViewRef.current.goBack();
            return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
        }
        return false;
    }




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
        // setVisible(true);
        webViewRef.current.injectJavaScript(
            `document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3) > div").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(6)").remove();
            document.querySelector("body > section.banner.wow.fadeIn > img").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div > div > div > div > div > div.but").remove();
            window.ReactNativeWebView.postMessage("main_page");
        
            ;
            
            `,

        );


    };

    const onNavigationStateChange = (navState) => {
        setVisible(true);
        webViewRef.current.canGoBack = navState.canGoBack
        if (navState.url === 'https://vidyatcklmr.ac.in/admission_details.php?adm_id=5') {

            webViewRef.current.injectJavaScript(
                `document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                document.querySelector("body > section.banner.wow.fadeIn > img").remove();
                document.querySelector("body > section.cont_bg > div:nth-child(7)").remove();
                window.ReactNativeWebView.postMessage("page_2");
                ;`
            );
        }
        else if (navState.url === 'https://vidyatcklmr.ac.in/admission_details.php?adm_id=4') {
            webViewRef.current.injectJavaScript(
                `document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                document.querySelector("body > section.banner.wow.fadeIn > img").remove();
                document.querySelector("body > section.cont_bg > div:nth-child(7) > div > div").remove();
                window.ReactNativeWebView.postMessage("page_3");
                ;`
            );
        }

    };

    const onMessage = (event) => {

        setVisible(false);


    }


    return (
        <>

            <View style={{ flex: 1 }}>



                {isInternetReachable ?
                    <WebView


                        ref={webViewRef}
                        style={styles.container}

                        onLoad={injectJS}

                        source={{ uri: 'https://vidyatcklmr.ac.in/admissions_vidya.php' }}
                        onNavigationStateChange={onNavigationStateChange}

                        onMessage={onMessage}



                        renderError={() => (<SomethingWent />)}

                    />
                    : <OfflineNotice />

                }
                <Modal visible={visible}>
                    <ActivityIndicator
                        color="black"
                        size="large"
                        style={styles.flexContainer}
                    />
                </Modal>


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

