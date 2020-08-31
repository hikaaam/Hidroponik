import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import db from '../auth/DB';
import moment from 'moment';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
class statistik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {
                labels: ["01:00", "02:00"],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                        ]
                    }
                ]
            },
            heigth: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            color: '',
            nama: '',
            ext: '',
            id: '',
            status: '',
            icon: ''
        }
    }
    async componentDidMount() {
        let data = this.props.route.params;
        console.log(data);
        this.setState({
            color: data.color,
            nama: data.name,
            ext: data.ext,
            id: data.temp,
            status: data.status.charAt(0).toUpperCase() + data.status.substring(1),
            icon: data.icon
        })
        let link = "http://" + db.state.linkLocal + "/hidroponik/statistik/" + data.id + "/status/today/sensor/" + data.sensor;
        try {
            var response = await fetch(link).then((resp) => resp.json());
            let last_page = response.last_page;
            let next_page = response.next_page_url;
            let prev_page = response.prev_page_url;
            let data = response.data;
            let formated_data;
            if (data.length >= 1) {
                formated_data = this.createData(data)
                // console.log(formated_data)
            }
            else {
                formated_data = {
                    labels: ["01:00", "02:00"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                            ]
                        }
                    ]
                }
            }
            this.setState({
                last_page: last_page,
                next_page: next_page,
                prev_page: prev_page,
                data: formated_data,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
        }

    }
    formatDate(tanggal) {
        return moment(tanggal).format("HH:mm");
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
                paddingHorizontal: 20
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

            if (data.length >= 1) {
                formated_data = this.createData(data)
            }
            else {
                formated_data = {
                    labels: ["01:00", "02:00"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                            ]
                        }
                    ]
                }
            }
            this.setState({
                last_page: last_page,
                next_page: next_page,
                prev_page: prev_page,
                data: formated_data
            })
        } catch (error) {
            console.log(error)
        }
    }
    createData(data) {
        let label = [];
        let datas = [];

        data.map((val) => {
            label.push(this.formatDate(val.created_at))
            datas.push(parseInt(val.value))
        })

        return {
            labels: label,
            datasets: [
                {
                    data: datas
                }
            ]
        }
    }
    CreateDetail(label,data){
        return(
            label.map((value,i)=>{
                return(
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 0.8,
                        height: this.state.width / 6,
                        marginHorizontal:20

                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            marginTop: this.state.width / 28,
                            left: this.state.width / 30,
                        }}>
                            <Icon name="clock" size={30} color={db.state.IconcolorActive} />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: this.state.width / 24
                            }}>
                                {value}
                            </Text>

                        </View>
                        <View style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center'
                        }}>
                            <Icon name={this.state.icon} color={this.state.color} size={32} />
                            <Text style={{
                                fontWeight: '600',
                                fontSize: this.state.width / 15,
                                marginLeft:"10%"
                            }}>
                                {data[i] + this.state.ext}
                            </Text>
                        </View>

                    </View>
                )
            })
        )
    }
    body() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                        backgroundColor: '#eee',
                        flex: 1,
                        borderTopRightRadius: 45,
                        borderTopLeftRadius: 45,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <ActivityIndicator color={db.state.IconcolorActive} size="large" animating />
                </View>
            )
        }
        else {
            return (
                <View
                    style={{
                        backgroundColor: '#eee',
                        flex: 1,
                        borderTopRightRadius: 45,
                        borderTopLeftRadius: 45,
                        paddingHorizontal: 20
                    }}
                >
                    <LineChart
                        data={this.state.data}
                        width={this.state.width - 40} // from react-native
                        height={220}
                        // yAxisLabel="$"
                        yAxisSuffix={this.state.ext}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: this.state.color,
                            backgroundGradientFrom: this.state.color,
                            backgroundGradientTo: this.state.color,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginTop: 40,
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'center'
                    }} >

                        {this.createButton(this.state.next_page, this.state.prev_page)}
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginTop: "5%"
                    }}>
                        <View style={{
                            width: this.state.width / 4,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Icon name={this.state.icon} size={40} color={this.state.color} />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: this.state.width / 30,
                                    fontWeight: 'bold'
                                }}>{this.state.nama}</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontWeight: 'bold',
                                    fontSize: this.state.width / 27
                                }}>{this.state.ext}</Text>
                            </View>
                        </View>
                        <View style={{
                            width: this.state.width / 4,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    marginLeft: 10,
                                    fontWeight: 'bold',
                                    fontSize: this.state.width / 30
                                }}>{this.state.status}</Text>
                                <Text style={{
                                    marginLeft: 10,
                                    fontWeight: '400',
                                    fontSize: this.state.width / 33
                                }}> {this.state.data.labels[0]} - {this.state.data.labels[this.state.data.labels.length - 1]} </Text>
                            </View>
                        </View>
                    </View>
                    <Text
                        style={{
                            marginLeft: 20,
                            marginTop: "3%",
                            paddingBottom: "3%",
                            fontWeight: "700",
                            fontSize: this.state.width / 22,
                            borderBottomWidth:0.4
                        }}
                    >Details</Text>
                    <ScrollView>
                       {this.CreateDetail(this.state.data.labels,this.state.data.datasets[0].data)}
                    </ScrollView>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={{
                backgroundColor: db.state.IconcolorActive,
                flex: 1
            }}>
                <View style={{
                    paddingHorizontal: 30,
                    paddingBottom: 20
                }}>
                    <Text style={{
                        color: '#eee',
                        fontWeight: "bold",
                        fontSize: this.state.width / 24
                    }}>
                        {this.state.status}'s {this.state.nama}
                    </Text>
                </View>
                {this.body()}
            </View>
        );
    }
}

export default statistik;
