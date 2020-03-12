import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../home/home';
import IoT from '../IoT/iot_master';
import Login from '../auth/login';
import Notifications from '../notification/notifications';
import Profile from './profile';

const stacks = createStackNavigator();
export default class stack extends Component{
home = ()=>{
  <stacks.Navigator>
    <stacks.Screen name='home' component={Home}/>
    <stacks.Screen name='iot' component={IoT} />
  </stacks.Navigator>
}
}