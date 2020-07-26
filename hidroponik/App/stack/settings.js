import React, { Component } from 'react';
import {
    Text, TouchableOpacity, View, ActivityIndicator,ScrollView, Dimensions
} from 'react-native';

import db from '../auth/DB';
import Icon from 'react-native-vector-icons/FontAwesome5';

var s = require('../../assets/style');


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Dataset: '',
            IsLoading:'true'

        }
    }
    componentDidMount() {
        let id = db.state.profile._uid;
        let linkLocal = 'http://' + db.state.linkLocal + '/hidroponik/api/Prototype/' + id;
        let link = '';
        fetch(linkLocal).then((response) => response.json()).then((responseJson) => {
            this.setState({
                Dataset: responseJson.data,
                IsLoading:false
            })
        });
    }
    RenderItem(data) {
        if (!this.state.IsLoading) {
            return data.map((value) => {
                return (
                    <TouchableOpacity  style={{
                        height: 75,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}
                    onPress={() => {
                        this.props.navigation.navigate("settingproto",{id:value.prototype_id});
                    }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Prototype Setting ({value.prototype_id})  </Text>
                        <View>
                            <Icon name="chevron-right" size={40} color={db.state.IconcolorActive} />
                        </View>
                    </TouchableOpacity>
                );
            });
        }
        else {
            return(
                <View style={{
                    height:Dimensions.get("window").height,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <ActivityIndicator animating size="large" color={db.state.IconcolorActive} />
                </View>
            )
        }
    }
    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#eee',
              
            }}>
                {this.RenderItem(this.state.Dataset)}
            </ScrollView>
        );
    }
}