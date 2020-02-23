import React, { Component } from "react";
import {
  Text,
  TouchableOpacity
} from "react-native";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import Home from "./App/home/home";
import Splash from "./App/splash-screen";
import Iot from "./App/IoT/iot_master";
import Status from "./App/status/status";
import login from "./App/auth/login";
import register from "./App/auth/register";
import Notifications from "./App/notification/notifications";
import AuthOTP from "./App/auth/otp";
import AuthChangePassword from "./App/auth/changePassword";
import AuthForget from "./App/auth/forgetPassword";
const Stack = createStackNavigator();
export default class App extends Component {

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#16a085',
              // height: 60,
              borderBottomColor: '#ecf0f1',
              borderBottomWidth: 1,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ecf0f1',
              fontSize: 25,
              marginLeft: -10,
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
            headerRight: ()=> (
              <TouchableOpacity>
              <Icon name="settings" color="#ecf0f1" size={38} />
              </TouchableOpacity>
            ),
            headerRightContainerStyle:{
              marginRight:10
            }

          }}>
            <Stack.Screen name="splash" component={Splash} options={
              {
                headerShown: false
              }
            } />
            <Stack.Screen name='login' component={login} options={
              {
                headerShown: false
              }
            }/>
               <Stack.Screen name='register' component={register} options={
              {
                headerTitle: null,
                headerRight:null
              }
            }/>
            <Stack.Screen name='forget' component={AuthForget} options={
              {
                headerTitle: null,
                headerRight:null
              }
            }/>
            <Stack.Screen name='otp' component={AuthOTP} options={
              {
                headerTitle: null,
                headerRight:null
              }
            }/>
            <Stack.Screen name='changepassword' component={AuthChangePassword} options={
              {
                headerTitle: null,
                headerRight:null
              }
            }/>
            <Stack.Screen name="home" component={Home}
              options={
                {
                  headerTitle:
                    <Text>Home</Text>,
                  headerLeft: () => (
                    <Icon name="home" color="#ecf0f1" size={38} />
                  )
                }
              }
            />
            <Stack.Screen name="inbox" component={Notifications}
              options={
                {
                  headerTitle:
                    <Text>Inbox</Text>,
                  headerLeft: () => (
                    <Icon name="chat" color="#ecf0f1" size={38} />
                  )
                }
              } />
            <Stack.Screen name="iot" component={Iot}
              options={
                {
                  headerTitle:
                    <Text>IoT</Text>,
                  headerLeft: () => (
                    <Icon name="build" color="#ecf0f1" size={38} />
                  )
                }
              } />
            <Stack.Screen name="status" component={Status}
              options={
                {
                  headerTitle:
                    <Text>Status</Text>,
                  headerLeft: () => (
                    <Icon name="timeline" color="#ecf0f1" size={38} />
                  )
                }
              } />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



