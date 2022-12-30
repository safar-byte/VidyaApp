import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Platform,LogBox} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent"; 

export default function Acadamics_sc(){
        
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
useEffect(()=>{
    const unsubscribe = NetInfo.addEventListener(state => {
        setisInternetReachable(state.isInternetReachable)
    });
    return () => unsubscribe();
    
},[])

//remove all warn
LogBox.ignoreAllLogs();

//trying to remove header
const runFirst = `
    let rmfoot =document.querySelector("body > section.quk_lnk.wow.fadeInUp").remove();
    let rdfoot =document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
    let rmsub =document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr").remove();
    let rmyt =document.querySelector(".text-center").remove();
    let rmmen =document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
    let rmrme =document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div").remove();
    true; 
    `;
    return(
        <>
      
        <View style =  {{flex: 1}}>
        {isInternetReachable ?   
        <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: 'https://vidyatcklmr.ac.in/departments.php'}}
        startInLoadingState={true}
        injectedJavaScript={runFirst}
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
        backgroundColor: '#E5BA73',
        justifyContent: "center",
        alignItems: "center",
    },
    flexContainer:{
        position: 'absolute',
        height: '100%',
        width: '100%'
    }
    
 })


 