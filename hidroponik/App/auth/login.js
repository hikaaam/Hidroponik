import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import db from '../auth/DB';
var s = require('../../assets/auth_style/loginstyle');
import DB from '../auth/DB';
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColorEmail: '#A9A9A9',
      borderColorPassword: '#A9A9A9',
      email: '',
      password: '',
    };

    this.onFocusEmail = this.onFocusEmail.bind(this);
    this.onBlurEmail = this.onBlurEmail.bind(this);
    this.onFocusPassword = this.onFocusPassword.bind(this);
    this.onBlurPassword = this.onBlurPassword.bind(this);
    this.loginA = this.loginA.bind(this);
  }

  onFocusEmail() {
    this.setState({
      borderColorEmail: 'green',
    });
  }
  onBlurEmail() {
    this.setState({
      borderColorEmail: '#A9A9A9',
    });
  }
  onFocusPassword() {
    this.setState({
      borderColorPassword: 'green',
    });
  }
  onBlurPassword() {
    this.setState({
      borderColorPassword: '#A9A9A9',
    });
  }

  nullCheck(foo) {
    if (foo.length < 1) {
      return true;
    }
    return false;
  }
  render() {
    const {replace} = this.props.navigation;
    const {navigate} = this.props.navigation;

    // console.log( DB.state.profile);
    // if(DB.state.profile === '...loading'){
    return (
      <View style={s.Container}>
        <TouchableOpacity
          onPress={() => {
            navigate('serverSetting');
          }}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          <Icon name="settings" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('home');
          }}
          style={{
            position: 'absolute',
            top: 20,
            right: 60,
          }}>
          <Icon name="home" size={30} />
        </TouchableOpacity>
        <View>
          <Text style={s.Text}>Welcome To Hidroponik Apps</Text>
          <TextInput
            onChangeText={email => this.setState({email})}
            onFocus={this.onFocusEmail}
            onBlur={this.onBlurEmail}
            style={s.InputForm}
            borderColor={this.state.borderColorEmail}
            textContentType="emailAddress"
            placeholder={'Email'}
          />

          <TextInput
            onChangeText={password => this.setState({password})}
            onFocus={this.onFocusPassword}
            onBlur={this.onBlurPassword}
            borderColor={this.state.borderColorPassword}
            secureTextEntry={true}
            style={s.InputForm}
            placeholder={'Password'}
          />

          <View style={s.ButtonForm}>
            <TouchableOpacity
              onPress={() => {
                this.loginA(this.state.email, this.state.password);
              }}
              style={s.Button}>
              <Text style={s.ButtonText}>Login</Text>
            </TouchableOpacity>
            {/* 
                        <TouchableOpacity  onPress={()=>{navigate('register')}}
                            style={s.Button}>
                            <Text style={s.ButtonText}>
                                Register
                            </Text>
                        </TouchableOpacity> */}
          </View>

          <TouchableOpacity
            style={s.ForgetForm}
            onPress={() => {
              navigate('forget');
            }}>
            <Text style={s.TextForget}>Forget Your Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          flexDirection="column"
          marginTop={20}
          // justifyContent='flex-end'
        >
          <View style={s.CenteringObj}>
            <Text style={s.TextForget}>Don't have an account?</Text>

            <TouchableOpacity
              onPress={() => {
                navigate('register');
              }}>
              <Text
                style={{
                  color: '#424874',
                  fontFamily: 'serif',
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 2,
                }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    // }
    // else {
    //     return(
    //         <View>
    //     { replace('home')}
    //      </View>
    // ); }
  }

  loginA(email, password) {
    try {
      let linkLocal = 'http://' + DB.state.linkLocal + '/hidroponik/api/Login/';
      console.log(linkLocal);
      if (this.nullCheck(email)) {
        alert('Please Fill The Form !!');
      } else if (this.nullCheck(password)) {
        alert('Please Fill The Form !!');
      } else {
        fetch(linkLocal + email)
          .then(response => response.json())
          .then(responseJson => {
            var mail = responseJson['email'];
            console.log(responseJson);
            if (mail !== email) {
              alert(mail);
            }
            var pw = responseJson['password'];
            if (pw == password) {
              DB.CreateAccount(
                responseJson['id'],
                responseJson['full_name'],
                responseJson['phone_number'],
                responseJson['address'],
                responseJson['email'],
                responseJson['password'],
                responseJson['token'],
              );
              this.props.navigation.replace('otp', {Email: mail});
            } else {
              alert("Your Email or Password Didn't Match");
            }
          })
          .catch(error => {
            console.error(error);
            Alert.alert('Error', error.message);
          });
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }
}
