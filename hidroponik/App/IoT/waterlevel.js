import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/FontAwesome5';
import db from '../auth/DB';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

class waterlevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isOn:false
        };
    }
    componentDidMount() {
        this.setState({
            data: this.props.route.params.data
        })
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#eee',
                margin: 10,
                  justifyContent:"center"
            }}>
                <CardView style={{
                    marginTop: '7%',
                    height: '50%',
                    // backgroundColor:'#1ca3ec',
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 20,
                    borderColor: 'black',
                    borderWidth: 0.5,
                    marginBottom:'5%'
                }}>
                    <View style={{
                        flexDirection:'row',
                        marginTop:'10%'
                    }}>
                        <Text style={{ color: db.state.IconcolorActive, fontSize: 35, fontWeight: 'bold' }}>Water Level</Text>
                        <Icon style={{ marginTop: 0,marginHorizontal:'5%' }} color={db.state.IconcolorActive} name="water" size={50} />
                    </View>

                    <Text style={{
                        // position:'absolute',
                        fontSize: 140,
                        color: 'black',
                        textShadowColor: 'blue',
                        textShadowOffset: {
                            width: 2,
                            height: 2
                        },
                        textShadowRadius: 1
                    }}>80%</Text>
                </CardView>
                <CardView style={{
                    justifyContent:'center',
                    alignItems:'center',
                    paddingVertical:30,
                    marginBottom:'10%'

                    }}>
                        <Text style={{
                            color:db.state.IconcolorActive,
                            fontSize:16,
                            fontWeight:'bold',
                            marginBottom:15,
                        }}>Click To Turn On Water Pump</Text>
                        <TouchableOpacity onPress={()=>{
                            console.log(this.state.isOn)
                            if(this.state.isOn){
                                this.setState({
                                    isOn:false
                                })
                            }
                            else{
                                this.setState({
                                    isOn:true
                                }) 
                            }
                        }} >
                            <Icon name="power-off" size={80} color={this.state.isOn?'red':'green'}  />
                        </TouchableOpacity>
                </CardView>
            </View>
        );
    }
}

export default waterlevel;
