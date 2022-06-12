import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import db from './DB';
import Icon from 'react-native-vector-icons/FontAwesome';

var s = require('../../assets/auth_style/otpstyle');
var b = require('../../assets/style');
export default class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColorOtp1: '#1e272e',
      borderColorOtp2: '#1e272e',
      borderColorOtp3: '#1e272e',
      borderColorOtp4: '#1e272e',
      borderColorOtp5: '#1e272e',
      isLoading: true,
      timerText: 30,
      isDisabled: true,
      timer: 30,
      otp: 12345,
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      del1: 0,
      del2: 0,
      del3: 0,
      del4: 0,
      del5: 0,
    };
  }

  componentDidMount() {
    var emails = this.props.route.params.Email;
    console.log(emails);
    let linkLocal = 'http://' + db.state.linkLocal + '/hidroponik/api/Mobile';
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 4000);
    let link = 'http://ta2020.xyz/hidroponik/index.php/api/Mobile';
    try {
      fetch(linkLocal, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emails,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);

          this.setState({
            otp: responseJson,
            isLoading: false,
          });
          if (this.state.timer == 0) {
            this.setState({
              isWaiting: false,
              isDisabled: false,
              timer: 30,
            });
          }
          var i = setInterval(() => {
            var num = Math.ceil(Math.log10(this.state.timer + 1));
            if (num == 1) {
              this.setState(prevState => ({
                timer: prevState.timer - 1,
                timerText: '0' + (prevState.timer - 1).toString(),
              }));
            } else {
              this.setState(prevState => ({
                timer: prevState.timer - 1,
                timerText: prevState.timer,
              }));
            }
          }, 1000);
          setTimeout(() => {
            clearInterval(i);
            this.setState({
              isDisabled: false,
            });
          }, 31000);
        });
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'Tidak Ada Koneksi',
      });
      console.log(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      const {replace} = this.props.navigation;
      return (
        <View style={s.Container}>
          <TouchableOpacity
            style={s.BackToLogin}
            onPress={() => {
              this.props.navigation.replace('login');
            }}>
            <Icon name="chevron-left" size={50} color={'#424874'} />
            <Text style={s.BackToLoginText}>Back To Login</Text>
          </TouchableOpacity>

          <Text style={s.Text}>Insert your OTP code</Text>

          <View style={s.InputContainer}>
            <TextInput
              name="otp1"
              style={s.InputForm}
              returnKeyType={'next'}
              borderColor={this.state.borderOtp1}
              keyboardType="decimal-pad"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
              ref={input => {
                this.firstTextInput = input;
              }}
              onChangeText={otp => {
                this.setState({otp1: otp});
                if (otp.length == 1) {
                  this.secondTextInput.focus();
                }
              }}
            />

            <TextInput
              name="Otp2"
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
              blurOnSubmit={false}
              style={s.InputForm}
              borderColor={this.state.borderOtp2}
              keyboardType="decimal-pad"
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.setState({
                    del2: this.state.del2 + 1,
                  });
                  if (this.state.del2 == 1) {
                    this.setState({
                      del2: 0,
                    });
                    this.firstTextInput.focus();
                  }
                }
              }}
              onChangeText={otp => {
                this.setState({otp2: otp});
                if (otp.length == 1) {
                  this.setState({
                    del2: 0,
                  });
                  this.thirdTextInput.focus();
                }
              }}
            />

            <TextInput
              name="Otp3"
              style={s.InputForm}
              borderColor={this.state.borderOtp3}
              keyboardType="decimal-pad"
              ref={input => {
                this.thirdTextInput = input;
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.setState({
                    del3: this.state.del3 + 1,
                  });
                  if (this.state.del3 == 1) {
                    this.setState({
                      del3: 0,
                    });
                    this.secondTextInput.focus();
                  }
                }
              }}
              onChangeText={otp => {
                this.setState({otp3: otp});
                if (otp.length == 1) {
                  this.setState({
                    del3: 0,
                  });
                  this.fourthTextInput.focus();
                }
              }}
            />

            <TextInput
              name="Otp4"
              style={s.InputForm}
              borderColor={this.state.borderOtp4}
              keyboardType="decimal-pad"
              ref={input => {
                this.fourthTextInput = input;
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.setState({
                    del4: this.state.del4 + 1,
                  });
                  if (this.state.del4 == 1) {
                    this.setState({
                      del4: 0,
                    });
                    this.thirdTextInput.focus();
                  }
                }
              }}
              onChangeText={otp => {
                this.setState({otp4: otp});
                if (otp.length == 1) {
                  this.setState({
                    del4: 0,
                  });
                  this.fifthTextInput.focus();
                }
              }}
            />

            <TextInput
              name="Otp5"
              style={s.InputForm}
              borderColor={this.state.borderOtp5}
              keyboardType="decimal-pad"
              ref={input => {
                this.fifthTextInput = input;
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  this.setState({
                    del5: this.state.del5 + 1,
                  });
                  if (this.state.del5 == 1) {
                    this.setState({
                      del5: 0,
                    });
                    this.fourthTextInput.focus();
                  }
                }
              }}
              onChangeText={otp => {
                this.setState({otpinput: this.state.otpinput + '' + otp});
                if (otp.length == 1) {
                  this.setState({
                    del5: 0,
                  });
                  var otpinput =
                    this.state.otp1 +
                    '' +
                    this.state.otp2 +
                    '' +
                    this.state.otp3 +
                    '' +
                    this.state.otp4 +
                    '' +
                    otp;
                  if (otpinput == this.state.otp) {
                    db.Otp(true);
                    this.props.navigation.replace('splash');
                  } else {
                    Alert.alert('Failed', "Your OTP password doesn't match");
                  }
                }
              }}
            />
          </View>

          <View
            style={{
              marginLeft: 10,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text style={b.TextForget}>Don't Get Any Email ?</Text>
            <Text style={s.TextTimer}> 00:{this.state.timerText}</Text>
          </View>
          <View style={s.ButtonForm}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace('otp');
              }}
              disabled={this.state.isDisabled}
              style={{
                width: 160,
                borderColor: '#1e272e',
                borderWidth: 1.8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 5,
                backgroundColor: this.state.isDisabled ? '#555' : '#424874',
                borderRadius: 10,
                marginLeft: 10,
              }}>
              <Text style={s.ButtonText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', bottom: 20, right: 20}}>
            <TouchableOpacity
              onPress={() => {
                db.Otp(true);
                this.props.navigation.replace('splash');
              }}
              style={{
                width: 160,
                borderColor: '#1e272e',
                borderWidth: 1.8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 5,
                backgroundColor: '#424874',
                borderRadius: 10,
                marginLeft: 10,
              }}>
              <Text style={s.ButtonText}>Bypass OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
