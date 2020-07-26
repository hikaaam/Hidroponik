import React, {Component} from 'react';
import {
Text, TouchableOpacity, View
} from 'react-native';

import db from '../auth/DB';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import io from 'socket.io-client';

var s = require('../../assets/style');


export default class SettingProto extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOtomatis :true
        }
    }
    componentDidMount(){
        var id = this.props.route.params.id;
        let local = "http://" + db.state.linkLocal + ":4000";
        console.log(id);
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
            this.emit("checkmode",id);
        });
        this.socket.on("checkmode", msg => {
            // var bool = '';
            // if(msg == "true"){
            //     bool = true;
            // }
            // else{
            //     bool = false;
            // }
            this.setState({
                isOtomatis:msg
            })
        });
    }
    render(){
        return(
            <View style={{
                backgroundColor:'#eee',
                flex:1
            }}>
               <View style={{
                   height:"10%",
                   flexDirection:'row',
                   justifyContent:'space-between',
                   borderBottomWidth:1.2,
                   borderBottomColor:"#333333",
                   backgroundColor:'#eee',
                   alignItems:'center',
                   padding:10
               }}>
                   <Text style={{
                       fontSize:22,
                       fontWeight:'bold',
                       color:db.state.IconcolorActive,
                   }}>Automatic Prototype</Text>
                   <TouchableOpacity onPress={()=>{
                       if(this.state.isOtomatis){
                        this.socket.emit("Mode",{_id:this.props.route.params.id,_val:"true"});
                        console.log(this.state.isOtomatis);
                       }
                       else{
                        this.socket.emit("Mode",{_id:this.props.route.params.id,_val:"false"});
                        console.log(this.state.isOtomatis);
                       }
                   }}>
                       <Icon name={this.state.isOtomatis?"toggle-on":"toggle-off"} size={40} color={this.state.isOtomatis?"green":db.state.Iconcolor} />
                   </TouchableOpacity>
               </View>
            </View>
        );
    }
}