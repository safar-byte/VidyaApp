import React,{useEffect,useRef,useState}  from "react";
import { Text, View ,StyleSheet,ActivityIndicator,BackHandler,Platform,SafeAreaView} from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
export default function NewsandEvent_sc(){

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
const [isConnected, setIsConnected] = useState(true);
useEffect(()=>{
  const unsubscribe = NetInfo.addEventListener(state => {
    setIsConnected(state.isConnected)
    })
  return unsubscribe();
  },[NetInfo])
  console.log('newsandevt',isConnected);
    return(
      <>
      
        <View style =  {{flex: 1}}>
        {isConnected ?   
        <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: 'https://news.vidyaacademy.ac.in' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
          color="black"
          size="large"
          style={styles.flexContainer}
          />
          )}
          />:<OfflineNotice/>}
        
      
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