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
        backgroundColor: '#eee',
        flexDirection: 'row',
        height:70,
        justifyContent:'space-evenly',
        alignItems: 'center',
        borderTopColor: '#999',
        borderWidth:1.2
    },
    body:{
      flex: 1 ,
      backgroundColor: '#eee',

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
    bottom_text_active:{
        color: '#424874',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:16,
    },
    bottom_text:{
        color: '#999',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:16,
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
        // marginTop:10,
        marginHorizontal:2,
        padding:10,
        // backgroundColor: '#424874',
        borderColor: '#2c3e50',
        borderRadius: 2,
        // borderTopWidth:1,
        borderBottomWidth:1
    },
    notifbox:{
        marginLeft:40
    },
    notifTitle:{
        // color: '#ecf0f1',
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize:20,
    },
    notifIcon:{
        position:'absolute',
        top:12,
        left:8
    },
    notifText:{
        // fontFamily:'Roboto',
        // fontWeight: '900',
        fontSize:16,
        color:'#333'
    },
   notifDate:{
    position:'absolute',
    top:12,
    right:8
    },
    notifDateText:{
        fontSize:14,
        fontWeight:'700'
    },
    scrollnotif:{
     flex:1
    },
    tengah:{
        flexDirection:'row',
        justifyContent:'center',
    },
    IconContainer:{
        height:'100%',
        width:'22%',
        flexDirection:'column',
        justifyContent:'center'
    },
});