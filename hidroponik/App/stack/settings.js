import React, {Component} from 'react';
import {
Text, TouchableOpacity, View
} from 'react-native';

import db from '../auth/DB';

var s = require('../../assets/style');


export default class Settings extends Component{

    render(){
        return(
            <View style={s.Test}>
                <Text style={s.bottom_text}>
                    This is settings
                </Text>
            </View>
        );
    }
}