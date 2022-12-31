import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Platform,LogBox} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent"; 

export default function Acadamics_sc(){
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
    let rmfoot =document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
    let rdfoot =document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
    let rmsub =document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr").remove();
    let rmyt =document.querySelector(".text-center").remove();
    let rmhd =document.querySelector("body > section.hed").remove();
    let rmsdi =document.querySelector("div#slide-panel").remove();
    let rmimg =document.querySelector("body > section.banner.wow.fadeIn").remove();
   
    ; 
    `
    ,


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
      webViewRef.current.canGoBack=navState.canGoBack
  };



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


 