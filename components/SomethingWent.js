
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const SomethingWent = () => {
    return (
<View style={styles.offlineContainer}>
<Text style={styles.offlineText}>Something Went wrong</Text>
<View style={styles.whitescre}/>
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
    },
    whitescre:{
        backgroundColor: '#fff',
      height: '1000%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width:'100%',
      position: 'absolute',
      top: 30
    }
  });

export default SomethingWent;