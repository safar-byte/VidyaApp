
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

 if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
<View style={styles.offlineContainer}>
<Text style={styles.offlineText}>No Internet Connection</Text>
</View>
    );

};

const styles = StyleSheet.create({
    offlineContainer: {
      backgroundColor: '#b52424',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width:'100%',
      position: 'absolute',
      top: 0
    },
    offlineText: { 
      color: '#fff'
    }
  });

export default OfflineNotice;