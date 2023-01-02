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
        setisInternetReachable(state.isInternetReachable);
        setVisible(false);
    });
    return () => unsubscribe();

}, [])


  //remove all warn
  LogBox.ignoreAllLogs();


  //trying to remove header
  const injectJS = () => {
    webViewRef.current.injectJavaScript(
      `document.querySelector("#header-text-nav-container").remove();
      document.querySelector("#secondary").remove();
      document.querySelector("#colophon").remove();
      window.ReactNativeWebView.postMessage("Main_page");
    
        ;
        
        `,

    );


  };



  const onNavigationStateChange = (navState) => {
    setVisible(true);
    setCanGoBack(navState.canGoBack);
    webViewRef.current.injectJavaScript(

      `document.querySelector("#primary > div.related-posts-wrapper").remove();
      document.querySelector("#primary > ul").remove();
      window.ReactNativeWebView.postMessage("page_2");
       ;`,
    )
  
  };

  const onMessage = (event) => {

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
          renderLoading={() => (
            <ActivityIndicator
                color="black"
                size="large"
                style={styles.flexContainer}
            />
        )}
          onLoad={injectJS}
          onMessage={onMessage}
          onNavigationStateChange={onNavigationStateChange}

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
