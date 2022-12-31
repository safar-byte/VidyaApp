import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Dimensions, Modal } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";

const height = Dimensions.get('window').height;

export default function Placement_sc() {

  const webViewRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };



  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
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


  //trying to remove header
  const injectJS = () => {
    // setVisible(true);
    webViewRef.current.injectJavaScript(
      `document.querySelector("#header-text-nav-container").remove();
      document.querySelector("#secondary").remove();
      document.querySelector("#colophon").remove();
      window.ReactNativeWebView.postMessage("page_3");
    
        ;
        
        `,

    );


  };

  const HandleBackPressed = () => {
    if (webViewRef.current.canGoBack) {
      webViewRef.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;

  }

  const onNavigationStateChange = (navState) => {
    setVisible(true);
    webViewRef.current.injectJavaScript(

      `document.querySelector("#primary > div.related-posts-wrapper").remove();
      document.querySelector("#primary > ul").remove();
      window.ReactNativeWebView.postMessage("page_3");
       ;`,
    )
    webViewRef.current.canGoBack = navState.canGoBack
  }

  const onMessage = (event) => {
    console.log(event.nativeEvent.data);
    setVisible(false);


  }
  return (


    <View style={{ flex: 1 }}>
      {isInternetReachable ?
        <WebView
          ref={webViewRef}
          style={styles.container}
          source={{ uri: 'https://news.vidyaacademy.ac.in/tag/placements/' }}
          startInLoadingState={true}
          onLoad={injectJS}
          onMessage={onMessage}
          onNavigationStateChange={onNavigationStateChange}
          // injectedJavaScript={runFirst}
          renderError={() => (<SomethingWent />)}

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
