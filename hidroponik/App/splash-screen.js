import React, { Component } from "react";
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image, AsyncStorage, Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';

import DB from '../App/auth/DB';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            // backgroundColor: '#424874'
        },
        logo: {

            width: 220,
            height: 220,
            marginBottom: 10,
        },
        splashtext: {
            padding: 20,
            fontFamily: 'cursive',
            fontSize: 50,
            color: 'black',
            textAlign: 'center'
        },
        circles: {
            alignItems: 'center',
            marginBottom: 20
        },
        progress: {
            margin: 10,
        },
    }
);




export default class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };

    }
    // componentDidMount() {

    // }

    componentDidMount() {
        this.animate();
        http://api.openweathermap.org/data/2.5/weather?q=tegal,jawa%20tengah,%20id&appid=ea8196364825b22cddb8e5ba6af77cd3&units=metric
        AsyncStorage.getItem('profile').then(value => {
            if (value) {
                console.log(value);
                setTimeout(() => {
                    DB.GetAccount();
                    AsyncStorage.getItem('otp').then((values) => {
                        if (values) {
                            this.props.navigation.replace('home');
                        }
                        else {
                            this.props.navigation.replace('otp');
                        }
                    });

                }, 2000);
            }
            else {
                setTimeout(() => {
                    this.props.navigation.replace('login');
                }, 2000);
            }
        });

    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress });
            }, 100);
        }, 1000);
    }
    render() {

        return (

            <View style={styles.container}>
                {/* <Image source={require('../assets/image/logo.png')}
                    style={styles.logo}
                    resizeMode={"contain"}
                    onLoadStart={() => this.setState({ loading: true })}
                    onLoadEnd={() => {
                        this.setState({ loading: false })
                    }}
                /> */}
                <Icon style={{ marginBottom: 30 }} name='seedling' color='green' size={Dimensions.get('window').width / 3} />
                {/* {this.state.loading} */}
                <Progress.Bar
                    style={styles.progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                />
                {/* <Text style={styles.splashtext}>
                    Welcome To the Future
                </Text> */}
            </View>

        );
    }

}

