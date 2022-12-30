import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";

const height = Dimensions.get('window').height;

export default function Placement_sc() {

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


  //trying to remove header
  const runFirst = `

let headerrm = document.querySelector("div#header-text-nav-container")
headerrm.style.display = "none"
let newandevrm = document.querySelector("div#secondary")
newandevrm.style.display = "none"
let footrm = document.querySelector('footer')
footrm.style.display = "none"
let relarm = document.querySelector(".related-posts-wrapper")
relarm.style.display = "none"
let rmpre = document.querySelector(".previous")
rmpre.style.display = "none"
let rmnext = document.querySelector(".next")
rmnext.style.display = "none"
      true; 
    `;
  return (
    <>

      <View style={{ flex: 1 }}>
        {isInternetReachable ?
          <WebView
            ref={webViewRef}
            style={styles.container}
            source={{ uri: 'https://news.vidyaacademy.ac.in/tag/placements/' }}
            startInLoadingState={true}
            injectedJavaScript={runFirst}
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
