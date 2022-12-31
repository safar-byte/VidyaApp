import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Platform,LogBox,Modal} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent"; 

export default function Acadamics_sc(){
 
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
    document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr").remove();
    document.querySelector(".text-center").remove();
    document.querySelector("body > section.hed").remove();
    document.querySelector("div#slide-panel").remove();
    document.querySelector("body > section.banner.wow.fadeIn").remove();
    window.ReactNativeWebView.postMessage("main_page");
    
    ; 
    `
    ,
    
    
    );
    
  };
  const onNavigationStateChange = (navState) => {
      setVisible(true);
      webViewRef.current.canGoBack=navState.canGoBack
      if (navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=2') {
          webViewRef.current.injectJavaScript(
              `document.querySelector("#slide-panel").remove();
              document.querySelector("body > section.hed").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
              document.querySelector("body > section.banner.wow.fadeIn").remove();
              document.querySelector(".text-center").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
              window.ReactNativeWebView.postMessage("page_2");
              ;`
          );
      }
      else if (navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=4') {
          webViewRef.current.injectJavaScript(
              `document.querySelector("#slide-panel").remove();
              document.querySelector("body > section.hed").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
              document.querySelector("body > section.banner.wow.fadeIn").remove();
              document.querySelector(".text-center").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
              document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
              window.ReactNativeWebView.postMessage("page_3");
              ;`
          );
      }
      else if(navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=5'){
        webViewRef.current.injectJavaScript(
            `document.querySelector("#slide-panel").remove();
            document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("body > section.banner.wow.fadeIn").remove();
            document.querySelector(".text-center").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            window.ReactNativeWebView.postMessage("page_4");
            ;`
        );
      }
      else if(navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=11'){
        webViewRef.current.injectJavaScript(
            `document.querySelector("#slide-panel").remove();
            document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("body > section.banner.wow.fadeIn").remove();
            document.querySelector(".text-center").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            window.ReactNativeWebView.postMessage("page_5");
            ;`
        );
      }
      else if(navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=8'){
        webViewRef.current.injectJavaScript(
            `document.querySelector("#slide-panel").remove();
            document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("body > section.banner.wow.fadeIn").remove();
            document.querySelector(".text-center").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            window.ReactNativeWebView.postMessage("page_6");
            ;`
        );
      }
      else if(navState.url === 'https://vidyatcklmr.ac.in/department_details.php?dep_id=27'){
        webViewRef.current.injectJavaScript(
            `document.querySelector("#slide-panel").remove();
            document.querySelector("body > section.hed").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("body > section.banner.wow.fadeIn").remove();
            document.querySelector(".text-center").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(5)").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            window.ReactNativeWebView.postMessage("page_7");
            ;`
        );
      }
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
        onNavigationStateChange={onNavigationStateChange}
        style={styles.container}
        source={{ uri: 'https://vidyatcklmr.ac.in/departments.php'}}
        startInLoadingState={true}
        onMessage={onMessage}
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


 