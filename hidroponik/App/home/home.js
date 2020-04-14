import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';
import CardView from 'react-native-cardview'
import moment from 'moment';
import db from "../auth/DB";


var s = require('../../assets/style');
class home extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        count: 1,
                        date: new Date(),
                        Time: '',
                        images: [
                                require('../../assets/image/slider/1.jpg'),
                                require('../../assets/image/slider/2.jpg'),
                                require('../../assets/image/slider/3.jpg'),
                                require('../../assets/image/slider/4.jpg'),
                                require('../../assets/image/slider/5.jpg'),
                        ],
                        carouselItems: [

                                {

                                        title: "Online",
                                        text: "15413516661",
                                },
                                {
                                        title: "Offline",
                                        text: "13543515353",
                                },
                                // {      
                                //         title: "Item 3",
                                //         text: "Text 3",
                                // },
                                // {      
                                //         title: "Item 4",
                                //         text: "Text 4",
                                // },
                                // {      
                                //         title: "Item 5",
                                //         text: "Text 5",

                                // },
                                {
                                        default: true,
                                        navigate: this.props.navigation

                                },

                        ],


                };

        }
        getTime() {
                this.setState({
                        Time: moment(new Date()).format('HH:mm A')
                })
        }
        componentDidMount() {
                setInterval(() => {
                        this.getTime();
                }, 1000);
        }
        _renderItem({ item, index }) {
                if (item.default) {
                        return (
                                <View style={{
                                        backgroundColor: 'floralwhite',
                                        borderRadius: 5,
                                        height: 350,
                                        padding: 25,
                                        paddingVertical: 50,
                                        marginLeft: 25,
                                        marginRight: 25,
                                }}>
                                        <Text style={{ fontSize: 26 }}>Add New Device</Text>
                                        <TouchableOpacity
                                                onPress={() => { item.navigate.push('prototype') }}
                                                style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <View style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: '#424874', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Icon2 color='#fff' name='plus-circle' size={120} />
                                                </View>
                                        </TouchableOpacity>
                                </View>
                        )
                }
                else {

                }
                return (
                        <View style={{
                                backgroundColor: 'floralwhite',
                                borderRadius: 5,
                                height: 350,
                                padding: 50,
                                marginLeft: 25,
                                marginRight: 25,
                        }}>
                                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                                <Text>{item.text}</Text>
                        </View>

                )

        }

        render() {
                const { replace } = this.props.navigation;
                return (
                        <View style={s.container}>
                                <View style={{ flex: 1 }}>

                                        <CardView
                                                style={{ height: 200, width: Dimensions.get('window').width - 30, marginLeft: 15, marginVertical: 10 }}
                                                cardElevation={2}
                                                cardMaxElevation={2}
                                                cornerRadius={5}>
                                                <ImageBackground source={this.state.images[4]}
                                                        style={{ resizeMode: 'cover', width: Dimensions.get('window').width - 30, height: 200, opacity: 0.8 }} >
                                                        <View style={{
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                height: 160,
                                                                borderColor: 'white',
                                                                borderWidth: 1.2,
                                                                margin: 15
                                                        }}>
                                                                <View style={{
                                                                        flexDirection:'column',
                                                                        justifyContent:'center',
                                                                        alignItems:'flex-start'
                                                                }}>
                                                                        <Icon2 style={{
                                                                                marginLeft: 15
                                                                        }} name={(this.state.Time.substr(-2)=='AM' ? 'cloud-sun' : 'cloud-moon' )} color='white' size={60} />
                                                                        <Text style={{
                                                                                color: 'white',
                                                                                fontSize: 55,
                                                                                fontFamily: 'serif',
                                                                                marginLeft: 10
                                                                        }}>{this.state.Time} </Text>
                                                                </View>
                                                                <View style={{
                                                                        width: 150,
                                                                        height: '80%',
                                                                        backgroundColor: 'white',
                                                                        borderColor: 'black',
                                                                        borderWidth: 2.5,
                                                                        marginRight: 10,
                                                                        flexDirection: 'column',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center'

                                                                }}>

                                                                        <Text style={{ fontSize: 70, fontFamily: 'serif' }}>
                                                                                {moment(this.state.date).format('D')}
                                                                        </Text>
                                                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
                                                                                {moment(this.state.date).format('MMMM YYYY')}
                                                                        </Text>
                                                                </View>

                                                        </View>

                                                </ImageBackground>

                                        </CardView>

                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop:50 }}>
                                                <Carousel
                                                        layout={"default"}
                                                        ref={ref => this.carousel = ref}
                                                        data={this.state.carouselItems}
                                                        sliderWidth={300}
                                                        itemWidth={300}
                                                        renderItem={this._renderItem}
                                                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                                        </View>
                                </View>
                                <View style={s.bottom}>
                                        <View style={s.IconContainer}>
                                                <View style={s.tengah}>
                                                        <Icon name="home" size={37} color={db.state.IconcolorActive} />
                                                </View>
                                                <View style={s.tengah}>
                                                        <Text style={s.bottom_text_active}>Home</Text>
                                                </View>
                                        </View>
                                        <TouchableOpacity style={s.IconContainer}
                                                onPress={() => {
                                                        replace('iot')
                                                }}
                                        >
                                                <View style={s.tengah}>
                                                        <Icon name="tune" size={37} color={db.state.Iconcolor} />
                                                </View>
                                                <View style={s.tengah}>
                                                        <Text style={s.bottom_text}>IoT</Text>
                                                </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={s.IconContainer}
                                                onPress={() => {
                                                        replace('notifications')
                                                }}
                                        >
                                                <View style={s.tengah}>
                                                        <Icon name="chat" size={37} color={db.state.Iconcolor} />
                                                </View>
                                                <View style={s.tengah}>
                                                        <Text style={s.bottom_text}>Notifications</Text>
                                                </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={s.IconContainer}
                                                onPress={() => {
                                                        replace('profile')
                                                }}
                                        >
                                                <View style={s.tengah}>
                                                        <Icon name="face" size={37} color={db.state.Iconcolor} />
                                                </View>
                                                <View style={s.tengah}>
                                                        <Text style={s.bottom_text}>profile</Text>
                                                </View>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="home" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>Home</Text>
                        </View>
                    </TouchableOpacity>     */}
                                </View>
                        </View>
                );
        }
}

export default home;

function pindah() {
        this.props.navigation.replace('prototype')
}