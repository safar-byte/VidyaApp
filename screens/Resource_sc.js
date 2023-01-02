import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,Modal,ActivityIndicator,BackHandler,Platform,LogBox} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent"; 

export default function Resource_sc(){
  const webViewRef = useRef();
  const [canGoBack, setCanGoBack] = useState(false);
  const [visible, setVisible] = useState(true);

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
        });
        return () => unsubscribe();

    }, [])
//remove all warn
LogBox.ignoreAllLogs();

//trying to remove header
const injectJS = () => {

  webViewRef.current.injectJavaScript(`

  document.querySelector("body > section.hed").remove();
  document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
  document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr").remove();

  document.querySelector("#slide-panel").remove();
  window.ReactNativeWebView.postMessage("Main_page");
    ; 
    `
    ,
        );

    };
    const onNavigationStateChange = (navState) => {
      setCanGoBack(navState.canGoBack);
      setVisible(true);
      webViewRef.current.injectJavaScript(

        `document.querySelector("#header-text-nav-container").remove();
        document.querySelector("#secondary").remove();
        document.querySelector("#colophon").remove();
         ;`,
      )
    
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
        onMessage={onMessage}
        onNavigationStateChange={onNavigationStateChange}
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


 