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
import Status from "./App/status/status";
import login from "./App/auth/login";
import Profile from './App/stack/profile';
import register from "./App/auth/register";
import Notifications from "./App/notification/notifications";
import AuthOTP from "./App/auth/otp";
import AuthChangePassword from "./App/auth/changePassword";
import AuthForget from "./App/auth/forgetPassword";
import Prototype from './App/home/prototype';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import db from "./App/auth/DB";


// const navigation = useNavigation();
const Tab = createBottomTabNavigator();




const ScreenOption = ({ navigation }) =>( {
  headerStyle: {
    backgroundColor: '#424874',
    height: 65,
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1,

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
              headerTitle: null,
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
          <Stack.Screen name='changepassword' component={AuthChangePassword} options={
            {
              headerTitle: null,
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
                headerShown: false
              }
            }
          />
          <Stack.Screen name='iot' component={Iot}
            options={
              {
                headerShown: false
              }
            }
          />
          <Stack.Screen name='notifications' component={Notifications}
            options={
              {
                headerShown: false
              }
            }
          />
          <Stack.Screen name='Setting' component={Settings} options={
            {
              headerRight:null
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