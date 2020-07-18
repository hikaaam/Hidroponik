import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
var s = require('../../assets/auth_style/registerstyle')
import DB from "../auth/DB";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import db from "../auth/DB";
export default class changePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColorEmail: '#A9A9A9',
            borderColorPassword: '#A9A9A9',
            borderColorId: '#A9A9A9',
            borderColorName: '#A9A9A9',
            borderColorPhone: '#A9A9A9',
            borderColorAddress: '#A9A9A9',
            borderColorRepassword: '#A9A9A9',
            Id: '',
            Email: '',
            Password: '',
            Name: '',
            Phone: '',
            Address: '',
            RePassword: ''
        }
        this.onFocusEmail = this.onFocusEmail.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);

        this.onFocusPassword = this.onFocusPassword.bind(this);
        this.onBlurPassword = this.onBlurPassword.bind(this);

        this.onFocusId = this.onFocusId.bind(this);
        this.onBlurId = this.onBlurId.bind(this);

        this.onFocusName = this.onFocusName.bind(this);
        this.onBlurName = this.onBlurName.bind(this);

        this.onFocusPhone = this.onFocusPhone.bind(this);
        this.onBlurPhone = this.onBlurPhone.bind(this);

        this.onFocusAddress = this.onFocusAddress.bind(this);
        this.onBlurAddress = this.onBlurAddress.bind(this);

        this.onFocusRepassword = this.onFocusRepassword.bind(this);
        this.onBlurRepassword = this.onBlurRepassword.bind(this);
    }
    componentDidMount() {
        this.setState({
            Email: DB.state.profile._email,
            Name: DB.state.profile._name,
            Phone: DB.state.profile._phone,
            Address: DB.state.profile._address
        })
    }
    render() {
        const { replace } = this.props.navigation;
        return (


            <View style={s.Container}>

                {/* <View style={s.TitleView}>
                        <Text style={s.Text}>Register Account</Text>
                    </View> */}

                {/* <Text style={s.TextForm}>Protoype ID</Text> */}
                {/* <TextInput
                        onChangeText={(Id) => { this.setState({ Id }) }}
                        onFocus={this.onFocusId}
                        onBlur={this.onBlurId}
                        style={s.InputForm}
                        borderColor={this.state.borderColorId} /> */}
                <TouchableOpacity style={{
                    position: 'absolute',
                    marginHorizontal: '6%',
                    marginTop: '3%',
                    // flexDirection:'row',
                    // justifyContent:'center',
                    // alignItems:'center'
                }}
                    onPress={() => { this.props.navigation.replace('editprofile') }}
                >
                    <Icon2 name='arrow-left' size={40} color={DB.state.IconcolorActive} />

                </TouchableOpacity>
                <View style={{ marginTop: '20%' }}></View>

                <Text style={s.TextForm}>Old Password</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ oldPassword: value }) }}
                    onFocus={this.onFocusName}
                    onBlur={this.onBlurName}
                    secureTextEntry={true}
                    placeholder="Enter Your Old Password"
                    // value={this.state.Name}
                    style={s.InputForm}
                    borderColor={this.state.borderColorName} />

                <Text style={s.TextForm}>New Password</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ newPassword: value }) }}
                    onFocus={this.onFocusPhone}
                    onBlur={this.onBlurPhone}
                    style={s.InputForm}
                    secureTextEntry={true}
                    // value={this.state.Phone}
                    placeholder="Enter Your New Password"
                    borderColor={this.state.borderColorPhone}
                    textContentType='telephoneNumber' />

                <Text style={s.TextForm}>Retype New Password</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ rePassword: value }) }}
                    onFocus={this.onFocusAddress}
                    onBlur={this.onBlurAddress}
                    style={s.InputForm}
                    placeholder="Retype Your New Password"
                    secureTextEntry={true}
                    // value={this.state.Address}
                    borderColor={this.state.borderColorAddress}
                    textContentType='addressCity' />



                <View style={s.ButtonForm}>

                    <TouchableOpacity onPress={() => {
                        this.RegisterAccount();
                    }} style={s.Button}>
                        <Text style={s.ButtonText}>
                            Update Data
                            </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={s.ForgetForm}>
                    {/* <Text style={s.TextForget}>You Don't Have A Protoype ID?</Text> */}
                </TouchableOpacity>

            </View>


        )

    }
    onFocusEmail() {
        this.setState({
            borderColorEmail: 'green'
        })
    }
    onBlurEmail() {
        this.setState({
            borderColorEmail: '#A9A9A9'
        })
    }

    onFocusPassword() {
        this.setState({
            borderColorPassword: 'green'
        })
    }
    onBlurPassword() {
        this.setState({
            borderColorPassword: '#A9A9A9'
        })
    }

    onFocusRepassword() {
        this.setState({
            borderColorRepassword: 'green'
        })
    }
    onBlurRepassword() {
        this.setState({
            borderColorRepassword: '#A9A9A9'
        })
    }

    onFocusAddress() {
        this.setState({
            borderColorAddress: 'green'
        })
    }
    onBlurAddress() {
        this.setState({
            borderColorAddress: '#A9A9A9'
        })
    }

    onFocusPhone() {
        this.setState({
            borderColorPhone: 'green'
        })
    }
    onBlurPhone() {
        this.setState({
            borderColorPhone: '#A9A9A9'
        })
    }

    onFocusName() {
        this.setState({
            borderColorName: 'green'
        })
    }
    onBlurName() {
        this.setState({
            borderColorName: '#A9A9A9'
        })
    }

    onFocusId() {
        this.setState({
            borderColorId: 'green'
        })
    }
    onBlurId() {
        this.setState({
            borderColorId: '#A9A9A9'
        })
    }

    RegisterAccount() {
        var _oldPassword = this.state.oldPassword;
        var _newPassword = this.state.newPassword;
        var _rePassword = this.state.rePassword;
        let linkLocal = 'http://'+db.state.linkLocal+'/hidroponik/api/Mobile/' + DB.state.profile._uid;
        console.log(linkLocal);
        let link = 'http://ta2020.xyz:4000';
        if (_oldPassword == DB.state.profile._password) {
            if (_newPassword == _rePassword) {
                return fetch(linkLocal, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        password: _oldPassword,
                        newPassword: _newPassword,
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {

                        DB.CreateAccount(
                            responseJson['id'],
                            responseJson['full_name'],
                            responseJson['phone_number'],
                            responseJson['address'],
                            responseJson['email'],
                            responseJson['password']);
                        Alert.alert(
                            'Sucess',
                            'Data Updated!',
                            [
                                { text: 'OK', onPress: () => { this.props.navigation.replace('profile') } }
                            ],
                            { cancelable: false }
                        );
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            else{
                Alert.alert('Failed', "Your New Password Doesn't match");
            }
        }
        else {
            Alert.alert('Failed', "Your Old Password Is Wrong");
        }
    }



}
