'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1abc9c',
        flexDirection: 'column',
       
      
    },
    textHeader: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ecf0f1',
        marginLeft:10,
        flex: 1,
    },
    // header: {
    //     backgroundColor: '#16a085',
    //     height: 60,
    //     borderBottomColor: '#ecf0f1',
    //     borderBottomWidth: 1,
    //     flexDirection: "row",
    //     justifyContent: "flex-start",
    //     alignItems: 'center' 
    // },
    bottom: {
        backgroundColor: "#10ac84",
        flexDirection: 'row',
        height:80,
        justifyContent:'space-evenly',
        alignItems: 'center',
        borderTopColor: '#ecf0f1',
        borderWidth:1
    },
    body:{
      flex: 1 ,
      backgroundColor: '#eee' 
    },
    bottom_icons:{
        padding:10,
        alignContent: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        borderColor: '#ecf0f1',
        borderWidth:1,
        borderRadius: 10,
        width:90,
        height:60
    },
    bottom_icon:{
        color: '#ecf0f1',
        marginBottom:5
    },
    bottom_text:{
        color: '#ecf0f1',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:14,
    },
    monitorbtm:{
        flexDirection: 'column',
        justifyContent:'center',
        padding:5,
        marginTop:8
      
    },
    notif:{
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:10,
        marginHorizontal:20,
        padding:10,
        backgroundColor: '#10ac84',
        borderColor: '#2c3e50',
        borderWidth:2,
        borderRadius: 20
    },
    notifText:{
        color: '#ecf0f1',
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize:20,
    },
    scrollnotif:{
     flex:1
    }
});