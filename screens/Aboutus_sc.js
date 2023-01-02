import React, { useEffect, useRef, useState, Component, current } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Modal,Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";



export default function Aboutus_sc() {

    const [visible, setVisible] = useState(true);

    const webViewRef = useRef();

    const [canGoBack, setCanGoBack] = useState(false);

    const onAndroidBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
  
      return false;
    }
  
    useEffect(() => {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      }
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      }
    }, [canGoBack]);


    const [isInternetReachable, setisInternetReachable] = useState(false);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setisInternetReachable(state.isInternetReachable)
            setVisible(false)
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
            setCanGoBack(navState.canGoBack);
            setVisible(true);
           

            
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