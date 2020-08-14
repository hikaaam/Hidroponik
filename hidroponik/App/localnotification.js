import React, { useState, useEffect, Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { LocalNotification } from '../src/services/LocalPushController'
import RemotePushController from '../src/services/RemotePushController'
import messaging from '@react-native-firebase/messaging';

const handleButtonPress = () => {
  LocalNotification()
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
}
)
class localnotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
      
    });
  }

  render() {
    return (
       <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{ marginTop: 20 }}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View>
      <RemotePushController />
    </View>
    );
  }
}

export default localnotification;


