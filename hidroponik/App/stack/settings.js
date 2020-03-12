import React, {Component} from 'react';
import {
Text, TouchableOpacity, View
} from 'react-native';

import db from '../auth/DB';


export default class Settings extends Component{

    render(){
        return(
            <View>
                <Text>
                    This is settings
                </Text>
            </View>
        );
    }
}