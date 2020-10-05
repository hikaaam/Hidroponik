import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import db from '../auth/DB';
import { ActivityIndicator } from 'react-native-paper';
import Moment from 'moment';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
var s = require('../../assets/style');

class logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data : {
      //   data:[1, 2, 3, 4]
      // },
      isLoading: true
    };
  }
  componentDidMount() {
    let id = this.props.route.params.id;
    let sensors = this.props.route.params.sensor;
    let link = db.state.linkLocal;
    let log = "http://" + link + "/hidroponik/statistik/" + id + "/status/any/sensor/"+sensors;
    console.log(log)
    fetch(log).then((data) => data.json()).then((json) => {
      console.log(json.data)
      this.setState({
        data: json,
        isLoading: false,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        
      })
    })
  }
  CardViewRender(data) {
    console.log(data.length)
    if (data.length >= 1) {
      return data.map((value) => {
        var warna = "";
        var link = "";
        var ext = "";
        if (value.sensor == "tds") {
          warna = "orange";
          link = "pupuk";
          ext = "PPM"
        }
        else if (value.sensor == "temp") {
          warna = "#a83232";
          link = "temperature";
          ext = "°C"
        }
        else if (value.sensor = "wl") {
          warna = db.state.IconcolorActive;
          link = "waterlevel";
          ext = "PPM"
        }
        else {
          warna = "#32a844"
          link = "other";
          ext = "%"
        }
        return (
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            // marginTop:10,
            marginHorizontal: 8,
            padding: 10,
            // backgroundColor: warna,
            borderColor: '#2c3e50',
            borderRadius: 2,
            // borderTopWidth:1,
            borderBottomWidth: 1.2,
            height: 110,
            marginBottom: 10
          }}>
            <View style={s.notifIcon}>
              <Icon3 name='seedling' size={35} color={warna} />
            </View>
            <View style={s.notifDate}>
              <Text style={s.notifDateText}
              >{Moment(value.created_at).format("DD-MMM HH:mm A")}</Text>
            </View>
            <View style={s.notifbox}>
              <Text style={{
                fontFamily: 'Roboto',
                fontWeight: '700',
                fontSize: 18,
                bottom: 5,
                color: "black"
              }} >
                {value.id_prototype} ( {value.sensor} )
            </Text>
              <Text style={{
                color: db.state.IconcolorActive,
                fontSize: this.state.width / 18,
                fontWeight: 'bold'
              }}>
                {value.value}{ext}
              </Text>
            </View>
          </View>
        );
      })
    }
    else {
      return (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: Dimensions.get("screen").height / 1.2,
          width: Dimensions.get("window").width
        }}>
          <Text style={{
            fontSize: 30,
            color: db.state.IconcolorActive,
            marginBottom: 10
          }}>You Have 0 Notifications</Text>
          <Icon2 name="bell" size={70} color={db.state.IconcolorActive} />
        </View>
      );
    }
  }
  createButton(next, prev) {
    let prev_bool = prev == null ? true : false;
    let next_bool = next == null ? true : false;
    let prev_color = prev_bool ? db.state.Iconcolor : db.state.IconcolorActive;
    let next_color = next_bool ? db.state.Iconcolor : db.state.IconcolorActive;
    return (
        <View style={{
            width: this.state.width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical:this.state.height/20
        }}>
            <TouchableOpacity
                style={{
                    width: this.state.width / 4,
                    height: this.state.width / 12,
                    backgroundColor: prev_color,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => {
                    if (!prev_bool) {
                        this.gantiData(prev)
                    }
                }}
                disabled={prev_bool}
            >
                <Text
                    style={{
                        color: '#eee'
                    }}
                >Prev Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: this.state.width / 4,
                    height: this.state.width / 12,
                    backgroundColor: next_color,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={
                    () => {
                        if (!next_bool) {
                            this.gantiData(next)
                        }
                    }
                }
                disabled={next_bool}
            >
                <Text
                    style={{
                        color: '#eee'
                    }}
                >Next Data</Text>
            </TouchableOpacity>
        </View>
    );
}
async gantiData(link) {
    try {
        var response = await fetch(link).then((resp) => resp.json());
        let last_page = response.last_page;
        let next_page = response.next_page_url;
        let prev_page = response.prev_page_url;
        let data = response.data;
        let formated_data;
  
        this.setState({
            data: response
        })
    } catch (error) {
        console.log(error)
    }
}
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    } else {
      return (
        <View style={{
          flex:1
        }}>
          <ScrollView>
            <View>
              {this.CardViewRender(this.state.data.data)}
            </View>
          </ScrollView>
          <View>
            {this.createButton(this.state.data.prev_page_url,this.state.data.next_page_url)}
          </View>
        </View>

      );
    }
  }
}

export default logs;
