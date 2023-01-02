import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Modal,Platform,LogBox} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent"; 

export default function Resource_sc(){
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

//trying to remove header
const injectJS = () => {

  webViewRef.current.injectJavaScript(`

   document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr").remove();
  document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
  document.querySelector("#slide-panel").remove();
  document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12").remove();
  //document.querySelector("body > section.banner.wow.fadeIn").remove();
  document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
  document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
  document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
  //document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
  //document.querySelector("body > section.cont_bg > div:nth-child(5) > div > div > div").remove();
  "window.scrollTo(100,100);"
  window.ReactNativeWebView.postMessage("main page");
    ; 
    `
    ,
        );

    };
    const onMessage = (event) => {

      setVisible(false);

    }

    return(
        <>
      
        <View style =  {{flex: 1}}>
        {isInternetReachable ?   
        <WebView
        ref={webViewRef}
        onLoad={injectJS}
        animationType='none'
        style={styles.container}
        source={{ uri: 'https://www.vidyatcklmr.ac.in/page.php?page=92'}}
        startInLoadingState={true}
        renderError={()=>(<SomethingWent/>)}
        renderLoading={() => (
          <ActivityIndicator
          color="black"
          size="large"
          style={styles.flexContainer}
          />
          )}
          />:<OfflineNotice/>
          
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
    flexContainer:{
        position: 'absolute',
        height: '100%',
        width: '100%'
    }
    
 })


 