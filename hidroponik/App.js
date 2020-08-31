import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Home from "./App/home/home";
import Splash from "./App/splash-screen";
import Settings from './App/stack/settings';
import Iot from "./App/IoT/iot_master";
import settingPrototype from './App/stack/settingPrototype';
import Status from "./App/status/status";
import login from "./App/auth/login";
import Profile from './App/stack/profile';
import register from "./App/auth/register";
import Notifications from "./App/notification/notifications";
import AuthOTP from "./App/auth/otp";
import AuthForget from "./App/auth/forgetPassword";
import Prototype from './App/home/prototype';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import db from "./App/auth/DB";
import editProfile from "./App/stack/editProfile";
import changePassword from './App/stack/changePassword';
import changepasswordOtp from './App/auth/changepasswordOtp';
import changepasswordEmail from './App/auth/changePasswordEmail';
import pupuk from './App/IoT/pupuk';
import other from './App/IoT/other';
import tempertature from './App/IoT/temperature';
import waterlevel from './App/IoT/waterlevel';
import settingproto from './App/stack/SettingProto';
import addproto from './App/home/addprototype';
import proto_detail from './App/home/prototype_detail';
import logs from './App/home/logs';
import statistik from './App/home/statistik';



import messaging from '@react-native-firebase/messaging';

import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';


const handleError = (error, isFatal) => {
  // fetch
  console.log(error, isFatal);
  // alert(error.name);
};

setJSExceptionHandler((error, isFatal) => {
  console.log('caught global error');
  handleError(error, isFatal);
}, true);

setNativeExceptionHandler(errorString => {
  // do the things
});

// import PushNotificationIOS from "@react-native-community/push-notification-ios";
var PushNotification = require("react-native-push-notification");

// const navigation = useNavigation();
const Tab = createBottomTabNavigator();



const ScreenOption = ({ navigation }) =>( {
  headerStyle: {
    backgroundColor: '#424874',
    height: 65,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    // borderBottomColor: '#ecf0f1',
    // borderBottomWidth: 1,

  },
  headerBackImage:()=>( <Icon2 name='chevron-left' size={30} color={'white'} />),
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#ecf0f1',
    fontSize: 25,
    // marginLeft: 100,
    fontFamily: 'serif'
  },
  headerLeftContainerStyle: {
    marginLeft: 10
  },
  animationEnabled: true,
  animationTypeForReplace: "push",
  transitionSpec: {
    open: TransitionSpecs.ScaleFromCenterAndroidSpec,
    close: TransitionSpecs.FadeInFromBottomAndroidSpec
  },
  headerRight: () => (
    <TouchableOpacity onPress={() => {
      navigation.push('Setting')
    }}>
      <Icon name="settings" color="#ecf0f1" size={38} />
    </TouchableOpacity>
  ),
  headerRightContainerStyle: {
    marginRight: 10
  }

});

export default class App extends Component {

  async componentDidMount(){
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
        db.state.token = token.token;
      },
     
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
     
        // process the notification
     
        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
     
      // // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      // onAction: function (notification) {
      //   console.log("ACTION:", notification.action);
      //   console.log("NOTIFICATION:", notification);
     
      //   // process the action
      // },
     
      // // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
     
      // // IOS ONLY (optional): default: all - Permissions to register.
      // permissions: {
      //   alert: true,
      //   badge: true,
      //   sound: true,
      // },
     
      // // Should the initial notification be popped automatically
      // default: true
      // popInitialNotification: true,
     
      // /**
      //  * (optional) default: true
      //  * - Specified if permissions (ios) and token (android and ios) will requested or not,
      //  * - if not, you must call PushNotificationsHandler.requestPermissions() later
      //  * - if you are not using remote notification or do not have Firebase installed, use this:
      //  *     requestPermissions: Platform.OS === 'ios'
      //  */
      // requestPermissions: true,
    });
  }
  render() {

    return (

      
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={ScreenOption}>

          <Stack.Screen name="splash" component={Splash} options={
            {
              headerShown: false
            }} />

          <Stack.Screen name='login' component={login} options={
            {
              headerShown: false
            }} />
          <Stack.Screen name='register' component={register} options={
            {
              headerTitle: 'Register Account',
              headerRight: null
            }} />
          <Stack.Screen name='forget' component={AuthForget} options={
            {
              title:'Forget Password',
              headerRight: null
            }} />
          <Stack.Screen name='otp' component={AuthOTP} options={
            {
              headerShown: false
            }
          } />
          <Stack.Screen name='prototype' component={Prototype} options={
            {
              title: "Prototype",
              headerRight: null
            }
          } />
           <Stack.Screen name='settingPrototype' component={settingPrototype} options={
            {
              title: "Prototype Settings",
              headerRight: null
            }
          } />
          <Stack.Screen name='changepassword' component={changePassword} options={
            {
              title:"Change Password",
              headerRight: null
            }} />
          <Stack.Screen name="home" component={Home}
            options={
              {
                title: 'Home',

              }
            }
          />
          <Stack.Screen name="profile" component={Profile}
            options={
              {
                title:'Profile'
              }
            }
          />
          <Stack.Screen name='iot' component={Iot}
            options={
              {
                title:'IoT'
              }
            }
          />
          <Stack.Screen name='notifications' component={Notifications}
            options={
              {
                title:'Notifications'
              }
            }
          />
          <Stack.Screen name='Setting' component={Settings} options={
            {
              headerRight:null
            }
          } />
           <Stack.Screen name='editprofile' component={editProfile} options={
            {
              headerRight:null,
              title:"Edit Profile"
            }
          } />
          <Stack.Screen name='changepasswordOtp' component={changepasswordOtp} options={
            {
              headerRight:null,
              title:"Otp"
            }
          } />
         <Stack.Screen name='changepasswordEmail' component={changepasswordEmail} options={
            {
              headerRight:null,
              title:"Change Password"
            }
          } />
          <Stack.Screen name='waterlevel' component={waterlevel} options={
            {
              headerRight:null,
              title:"Water Level"
            }
          } />
          <Stack.Screen name='pupuk' component={pupuk} options={
            {
              headerRight:null,
              title:"Fertilizer"
            }
          } />
          <Stack.Screen name='temp' component={tempertature} options={
            {
              headerRight:null,
              title:"Temperature"
            }
          } />
          <Stack.Screen name='other' component={other} options={
            {
              headerRight:null,
              title:"Other"
            }
          } />
           <Stack.Screen name='settingproto' component={settingproto} options={
            {
              headerRight:null,
              title:"Settings Prototype"
            }
          } />
           <Stack.Screen name='addproto' component={addproto} options={
            {
              headerRight:null,
              title:"Add Prototype"
            }
          } />
           <Stack.Screen name='proto_detail' component={proto_detail} options={
            {
              // headerRight:null,
              title:"Detail "
            }
          } />
          <Stack.Screen name='logs' component={logs} options={
            {
              // headerRight:null,
              title:"Current Logs"
            }
          } />
          <Stack.Screen name='statistik' component={statistik} options={
            {
              // headerRight:null,
              title:"Statistic"
            }
          } />
        </Stack.Navigator>

      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create(
  {
    tengah: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  }
)