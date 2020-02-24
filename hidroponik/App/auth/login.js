import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
var s = require('../../assets/auth_style/loginstyle')
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state={borderColorEmail:'#1e272e',
        borderColorPassword:'#1e272e',
        email:'',
        password:''
    
    }

        this.onFocusEmail=this.onFocusEmail.bind(this);
        this.onBlurEmail=this.onBlurEmail.bind(this);
        this.onFocusPassword=this.onFocusPassword.bind(this);
        this.onBlurPassword=this.onBlurPassword.bind(this);
        this.loginA=this.loginA.bind(this);
 
    }

    onFocusEmail() {
        this.setState({
            borderColorEmail: 'red'
        })
        }
    onBlurEmail() {
        this.setState({
            borderColorEmail: '#1e272e'
        })
        }
    onFocusPassword() {
        this.setState({
            borderColorPassword: 'red'
        })
        }
    onBlurPassword() {
        this.setState({
            borderColorPassword: '#1e272e'
        })
        }
    render() {
        const { navigate} = this.props.navigation;
        return (
            <View style={s.Container}  >

                <View>
                    <Text style={s.Text}>Welcome To Hidroponik Apps</Text>
                    <TextInput 
                    onChangeText={(email) => this.setState({email})} 
                    onFocus={this.onFocusEmail}
                    onBlur={this.onBlurEmail}
                    style={s.InputForm}
                    borderColor={this.state.borderColorEmail}
                    textContentType='emailAddress'
                    placeholder={'Email'}/>

                    <TextInput 
                        onChangeText={(password) => this.setState({password})} 
                        onFocus={this.onFocusPassword}
                        onBlur={this.onBlurPassword}
                        borderColor={this.state.borderColorPassword}
                        secureTextEntry={true}  
                        style={s.InputForm} 
                        placeholder={'Password'}/>
  
                    <View style={s.ButtonForm}>
                        
                        <TouchableOpacity onPress={()=>{this.loginA(this.state.email, this.state.password)}}
                         style={s.Button}>
                            <Text style={s.ButtonText}>
                                Login
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>{navigate('register')}}
                            style={s.Button}>
                            <Text style={s.ButtonText}>
                                Register
                            </Text>
                        </TouchableOpacity>
            
                    </View>

                    <TouchableOpacity style={s.ForgetForm} onPress={()=>{navigate('forget')}}>
                    <Text style={s.TextForget}>Forget Your Password?</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )

    }

loginA(email,password) {
        return fetch('http://192.168.43.47:4000/users/'+email)
          .then((response) => response.json())
          .then((responseJson) => {
            var mail = responseJson[0]['email'];
          if(email.length<1 || password.length<1){
              alert('Please Fill Email And Password')
          }
       else{
           console.log(responseJson);
           if(mail==='there is no account with this email'){
            alert(mail)
          }         
            var pw = responseJson[0]['password'];
            if(pw===password){
                this.props.navigation.replace('otp');
            }
            else{
                alert("Your Password Didn't Match");
            }
           
         }
          })
          .catch((error) => {
            console.error(error);
          });      
      }

      
}