import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
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
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const styles = StyleSheet.create(
  {
    tengah: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  }
)

const Tab = createBottomTabNavigator();
const Homestack = createStackNavigator();
const IotStack = createStackNavigator();
const NotifStack = createStackNavigator();
const StatusStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScreenOption = {
  headerStyle: {
    backgroundColor: '#424874',
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
  headerRight: () => (
    <TouchableOpacity onPress={()=>{
     
    }}>
      <Icon name="settings" color="#ecf0f1" size={38} />
    </TouchableOpacity>
  ),
  headerRightContainerStyle: {
    marginRight: 10
  }

};


const DrawerHome = () => (
  <Drawer.Navigator
  drawerType="back" 
  
  >
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Notifications" component={Notifications} />
  <Drawer.Screen name="IoT" component={Iot} />
</Drawer.Navigator>
)

const DrawerStatus= () =>(
  <Drawer.Navigator>
    <Drawer.Screen name="status" component={Status}/>
  </Drawer.Navigator>
)

const DrawerIoT= ()=>(
  <Drawer.Navigator>
    <Drawer.Screen name="IoT" component={Iot} />
  </Drawer.Navigator>
)

const DrawerNotif= ()=>(
  <Drawer.Navigator>
    <Drawer.Screen name="Notification" component={Notifications}/>
  </Drawer.Navigator>
)

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          activeTintColor: '#424874',
          inactiveTintColor: '#999',
          style: {
            backgroundColor: '#eee',
          },
          labelPosition: 'below-icon',
          adaptive: true,
        }
      }
    >
      <Tab.Screen name="home" component={DrawerHome}
        options={
          {
            title: ({ color }) =>
              <View style={
                {
                  position: 'absolute',
                  height: 40
                }
              }>
                <View style={styles.tengah}>
                  <Icon name="home" color={color} size={30} />
                </View>
                <View style={styles.tengah}>
                  <Text 
                    style={{
                      color: color,
                      fontSize:17
                    }}
                 > Home</Text>
                </View>
              </View>

          }} />
      <Tab.Screen name="status" component={DrawerStatus}
        options={{
          title: ({ color }) =>
            <View style={
              {
                position: 'absolute',
                height: 40
              }  }>
              <View style={styles.tengah}>
                <Icon name="timeline" color={color} size={30} />
              </View>
              <View style={styles.tengah}>
                <Text 
                style={{
                  color: color,
                  fontSize:17
                }}
                >Status</Text>
              </View>
            </View>
        }}  />
      <Tab.Screen name="iot" component={DrawerIoT}
        options={{
          title: ({ color }) =>
            <View style={
              {
                position: 'absolute',
                height: 40
              }
            }>
              <View style={styles.tengah}>
                <Icon name="build" color={color} size={30} />
              </View>
              <View style={styles.tengah}>
                <Text 
                  style={{
                    color: color,
                    fontSize:17
                  }}
                >IoT</Text>
              </View>
            </View>
        }} />
      <Tab.Screen name="notifications" component={DrawerNotif}
        options={{
          title: ({ color }) =>
            <View style={
              {

                position: 'absolute',
                height: 40
              }
            }>
              <View style={styles.tengah}>
                <Icon name="chat" color={color} size={30} />
              </View>
              <View style={styles.tengah}>
                <Text 
                  style={{
                    color: color,
                    fontSize:17
                  }}
                >Notification</Text>
              </View>
            </View>
        }}
      />

    </Tab.Navigator>
  );
}

export default class App extends Component {

  render() {

    return (

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={ScreenOption}>

          <Stack.Screen name="splash" component={Splash} options={
              {
                headerShown: false
              } } />
            
            <Stack.Screen name='login' component={login} options={
              {
                headerShown: false
              } }/>
               <Stack.Screen name='register' component={register} options={
              {
                headerTitle: null,
                headerRight:null
              }  }/>
            <Stack.Screen name='forget' component={AuthForget} options={
              {
                headerTitle: null,
                headerRight:null
              } }/>
            <Stack.Screen name='otp' component={AuthOTP} options={
              {
                headerShown: false
              }
            }/>
            <Stack.Screen name='changepassword' component={AuthChangePassword} options={
              {
                headerTitle: null,
                headerRight:null
              } }/>
          <Stack.Screen name="home" component={MyTabs}
            options={
              {
                headerShown: false

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




