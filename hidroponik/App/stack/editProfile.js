import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
var s = require('../../assets/auth_style/registerstyle')
import DB from "../auth/DB";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import db from "../auth/DB";
export default class editprofile extends Component {
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
                    onPress={() => { this.props.navigation.replace('profile') }}
                >
                    <Icon2 name='arrow-left' size={40} color={DB.state.IconcolorActive} />

                </TouchableOpacity>
                <View style={{ marginTop: '20%' }}></View>

                <Text style={s.TextForm}>Full Name</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ Name: value }) }}
                    onFocus={this.onFocusName}
                    onBlur={this.onBlurName}
                    value={this.state.Name}
                    style={s.InputForm}
                    borderColor={this.state.borderColorName} />

                <Text style={s.TextForm}>Phone Number</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ Phone: value }) }}
                    onFocus={this.onFocusPhone}
                    onBlur={this.onBlurPhone}
                    style={s.InputForm}
                    value={this.state.Phone}
                    borderColor={this.state.borderColorPhone}
                    textContentType='telephoneNumber' />

                <Text style={s.TextForm}>Address</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ Address: value }) }}
                    onFocus={this.onFocusAddress}
                    onBlur={this.onBlurAddress}
                    style={s.InputForm}
                    value={this.state.Address}
                    borderColor={this.state.borderColorAddress}
                    textContentType='addressCity' />

                <Text style={s.TextForm}>Email Address</Text>
                <TextInput
                    onChangeText={(value) => { this.setState({ Email: value }) }}
                    onFocus={this.onFocusEmail}
                    onBlur={this.onBlurEmail}
                    style={s.InputForm}
                    value={this.state.Email}
                    borderColor={this.state.borderColorEmail}
                    textContentType='emailAddress' />
                <TouchableOpacity
                onPress={
                    ()=>{ this.props.navigation.replace("changepassword"); }
                }
                style={{
                    flexDirection:'row'
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: DB.state.IconcolorActive,
                    }} >Change Password</Text>
                     <Icon2 style={{
                         color:DB.state.IconcolorActive,
                         marginLeft:'5%'
                     }} name="pencil-alt" size={25} />
                </TouchableOpacity>

                {/* <Text style={s.TextForm}>Password</Text>
                    <TextInput
                        onChangeText={(Password) => { this.setState({ Password }) }}
                        onFocus={this.onFocusPassword}
                        onBlur={this.onBlurPassword}
                        style={s.InputForm}
                        borderColor={this.state.borderColorPassword}
                        secureTextEntry={true} />

                    <Text style={s.TextForm}>Retype Your Password</Text>
                    <TextInput
                        onChangeText={(RePassword) => { this.setState({ RePassword }) }}
                        onFocus={this.onFocusRepassword}
                        onBlur={this.onBlurRepassword}
                        borderColor={this.state.borderColorRepassword}
                        secureTextEntry={true}
                        style={s.InputForm} /> */}

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
        // var _id = this.state.Id;
        var _name = this.state.Name;
        var _phone = this.state.Phone;
        var _address = this.state.Address;
        var _email = this.state.Email;
        var _password = this.state.Password;
        var _rePassword = this.state.RePassword;
        let linkLocal = 'http://'+db.state.linkLocal+'/hidroponik/api/Mobile/' + DB.state.profile._uid;
        console.log(linkLocal);
        let link = 'http://ta2020.xyz:4000';

        return fetch(linkLocal, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name: _name,
                phone: _phone,
                address: _address,
                email: _email,
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

}
