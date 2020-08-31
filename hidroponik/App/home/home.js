import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Dimensions, ImageBackground, AsyncStorage, ScrollView, Alert, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
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
                        navigate: this.props.navigation,
                        isLoading: true,
                        isVisible: false,
                      

                };

        }

        getTime() {
                this.setState({
                        Time: moment(new Date()).format('HH:mm A')
                })
        }
        componentDidMount() {
                let id = db.state.profile._uid;
                let linkLocal = 'http://'+db.state.linkLocal+'/hidroponik/api/Prototype/' + id;
                let link = '';
                fetch(linkLocal).then((response) => response.json()).then((responseJson) => {

                        let data = responseJson.data;
                        var datas = [];
                        let panjang = data.length;
                        let i = 0;
                        for (i; i < panjang; i++) {
                                var isi = {
                                        prototype_id: data[i].prototype_id,
                                        created_at: data[i].created_at,
                                        nama:data[i].nama.substr(0,12),
                                        navigate: this.props.navigation
                                }
                                datas.push(isi);

                        }
                        datas.push({ default: this.props.navigation });
                        this.setState({
                                carouselItems: datas
                        })
                });

                this.ticking = setInterval(() => {
                        this.getTime();
                }, 1000);
        }
        componentWillUnmount() {
                clearInterval(this.ticking);
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
                                                onPress={() => { 
                                                        // let linkLocal = 'http://'+db.state.linkLocal+'/hidroponik/api/Prototype';
                                                        // let link ='';
                                                        // let id=db.state.profile._uid;
                                                        // // console.log('/nid nya adalah : '+id);
                                                        // fetch(linkLocal,{
                                                        //         method: 'POST',
                                                        //         headers: {
                                                        //             Accept: 'application/json',
                                                        //             'Content-Type': 'application/json',
                                                        //         },
                                                        //         body: JSON.stringify({
                                                        //            id:id
                                                        //         })
                                                        //     }).then((data)=>{
                                                        //        item.default.replace('home');
                                                        // });
                                                        item.default.replace("addproto");
                                                 }}
                                                style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <View style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: '#424874', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Icon2 color='#fff' name='plus-circle' size={120} />
                                                </View>
                                        </TouchableOpacity>
                                </View>
                        )
                }
                else if(item.noInternet){
                        <TouchableOpacity
                        style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <View style={{ width: 130, height: 130, borderRadius: 100, backgroundColor: '#424874', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon2 color='#fff' name='plus-circle' size={120} /> */}
                                <Text>No Internet Connection</Text>
                        </View>
                </TouchableOpacity>
                }
                else {

                }
                return (
                        <TouchableOpacity style={{
                                backgroundColor: 'floralwhite',
                                borderRadius: 5,
                                height: 350,
                                padding: 20,
                                marginLeft: 25,
                                marginRight: 25,
                        }}
                                onLongPress={() => {
                                        Alert.alert(
                                                'Delete This Prototype',
                                                'Are You Sure?',
                                                [
                                                        {
                                                                text: 'Cancel',
                                                                onPress: () => console.log('Cancel Pressed'),
                                                                style: 'cancel'
                                                        },
                                                        { text: 'OK', onPress: () => { 
                                                                var ling = db.state.linkLocal;
                                                                let linkLocal = 'http://'+ling+'/hidroponik/api/Prototype/'+item.prototype_id;
                                                                let link ='';
                                                                let requestOptions = {
                                                                        method: 'DELETE'
                                                                      };
                                                                fetch(linkLocal,requestOptions).then((data)=>{
                                                                        item.navigate.replace('home');
                                                                }) }
                                                        }
                                                ],
                                                { cancelable: false }
                                        );

                                }}
                                onPress={() => { item.navigate.push('prototype', { id: item.prototype_id }) }}
                        >
                                <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly',
                                        height: "25%",
                                        alignItems: 'center',
                                        borderBottomColor: '#555555aa',
                                        borderBottomWidth: 1,
                                }}>
                                        <Text style={{ fontSize: 24 }}> {item.nama} </Text>
                                        <Icon2 name='seedling' size={25} color={(item.title == 'Online') ? 'red' : 'green'} />
                                </View>
                                <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        height: '70%',
                                        alignItems: 'center'
                                }}>
                                        <Text style={{
                                                position: 'absolute',
                                                top: 10,
                                                left: 0

                                        }}>{moment(item.created_at).fromNow()}</Text>
                                        <Icon2 name='robot' size={90} color='#424874' style={{
                                                marginTop:'20%'
                                        }} />
                                        <Text style={{
                                                marginTop:'5%'
                                        }}>{item.prototype_id}</Text>
                                        <Text style={{
                                                fontSize:12,
                                                opacity:0.7,
                                                color:'red',
                                                marginTop:'2%'
                                        }}>
                                                [Long Press To Delete]
                                        </Text>

                                </View>

                        </TouchableOpacity>

                )

        }

        render() {
                const { replace } = this.props.navigation;
                return (
                        <View style={s.container}
                        // refreshControl={
                        //         <RefreshControl refreshing={true} onRefresh={{

                        //         }} />
                        // }
                        >
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
                                                                        flexDirection: 'column',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'flex-start'
                                                                }}>
                                                                        <Icon2 style={{
                                                                                marginLeft: 15
                                                                        }} name={(this.state.Time.substr(-2) == 'AM' ? 'cloud-sun' : 'cloud-moon')} color='white' size={60} />
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

                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
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
                                                        <Text style={s.bottom_text}>Kontrol</Text>
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