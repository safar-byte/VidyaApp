import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Platform,LogBox} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";


export default function NewsandEvent_sc(){

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
useEffect(()=>{
  const unsubscribe = NetInfo.addEventListener(state => {
    setisInternetReachable(state.isInternetReachable)
    });
    return () => unsubscribe();

  },[])

    //remove all warn
    LogBox.ignoreAllLogs();

    const onNavigationStateChange = (navState) => {
      webViewRef.current.canGoBack = navState.canGoBack
    };
  
  return(
    <>
      
        <View style =  {{flex: 1}}>
        {isInternetReachable ?   
        <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: 'https://news.vidyaacademy.ac.in/'}}
        onNavigationStateChange={onNavigationStateChange}
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
    cont: {
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