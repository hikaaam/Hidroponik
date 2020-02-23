import React, { Component } from "react";
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image
} from "react-native";
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#1abc9c'
        },
        logo: {
            padding: 20,
            width: 420,
            height: 408,
            alignContent: "center",
            marginTop: 20,
            marginBottom: 10,
        },
        splashtext: {
            padding: 20,
            fontFamily: 'cursive',
            fontSize: 50,
            color: '#ecf0f1',
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
        setTimeout(() => {
            this.props.navigation.replace('login');
        }, 2000);

    }
    componentWillUnmount(){

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
            }, 500);
        }, 1000);
    }
    render() {

        return (

            <View style={styles.container}>
                <Image source={require('../assets/image/logo.png')}
                    style={styles.logo}
                    resizeMode={"contain"}
                    onLoadStart={() => this.setState({ loading: true })}
                    onLoadEnd={() => {
                    this.setState({ loading: false })
                    }}
                />
                 {this.state.loading}
                <View style={styles.circles}>
                    <Progress.CircleSnail
                        style={styles.progress}
                        color={['#f1c40f', '#ecf0f1']}
                        size={85}
                        thickness={8}
                        spinDuration={250}
                        duration={500}
                    />
                </View>
                <Text style={styles.splashtext}>
                    Welcome To the Future
                </Text>
            </View>

        );
    }

}

