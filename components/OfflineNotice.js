import React, { useState, useEffect} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const { width } = Dimensions.get('window');
function OfflineNotice(){
const [isConnected,setIsConnected] = useState(true);
useEffect(()=>{
NetInfo.addEventListener(handleConnectivityChange);
NetInfo.fetch().then(state => {
setIsConnected(state.isConnected)
});
return () => {
NetInfo.addEventListener(state => {
setIsConnected(state.isConnected)
});
}
},[NetInfo])
function handleConnectivityChange (state) {
if (state.isConnected) {
setIsConnected(true)
} else {
setIsConnected(false)
}
}
function MiniOfflineSign() {
return (
<View style={styles.offlineContainer}>
<Text style={styles.offlineText}>No Internet Connection</Text>
</View>
);
}
console.log('offline',isConnected);
if(isConnected){
return (
<View style={{height:30}}>
<MiniOfflineSign />
</View>
)
}
return null;
}
const styles = StyleSheet.create({
offlineContainer: {
backgroundColor: '#b52424',
height: 30,
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
width,
position: 'absolute',
top: 0
},
offlineText: {
color: '#fff',

}
});
export default OfflineNotice;