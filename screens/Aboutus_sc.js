import React, { useEffect, useRef, useState, Component, current } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Modal,Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";



export default function Aboutus_sc() {

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
        webViewRef.current.injectJavaScript(
            `document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
            const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
            listItems.forEach(listItem => listItem.remove());
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("#slide-panel").remove();


            window.ReactNativeWebView.postMessage("main_page");
            ;
            
            `,


        );
    };
        const onNavigationStateChange = (navState) => {
            webViewRef.current.canGoBack = navState.canGoBack
            setVisible(true);
            if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=4') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
        
                    window.ReactNativeWebView.postMessage("page_2");
               ; `,

                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/vision_mission.php') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_3");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=6') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_4");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=135') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_5");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=136') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_6");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=137') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_7");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=138') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_7");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=143') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_8");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=4') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_8");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=8') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_9");
                    ;`,
                );
            }
            else if (navState.url === 'https://www.vidyatcklmr.ac.in/page.php?page=102') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_9");
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=11') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
                    const listItems = document.querySelectorAll("#cssmenu > ul > li:not(:nth-child(1))") 
                    listItems.forEach(listItem => listItem.remove());
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("#slide-panel").remove();
                    window.ReactNativeWebView.postMessage("page_10");
                    ;`,
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
                        onNavigationStateChange={onNavigationStateChange}
                        source={{ uri: 'https://vidyatcklmr.ac.in/about_us.php' }}
                        onMessage={onMessage}
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