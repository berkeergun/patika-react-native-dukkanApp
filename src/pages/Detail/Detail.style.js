import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#DAFAF8",
        backgroundColor:"#ffe375",
    },
    body_container:{
        padding:10,
    },
    image:{
        width:deviceSize.width,
        height:deviceSize.height / 3 ,
        resizeMode:"contain",
        backgroundColor:"white"

    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"#000"
    },
    description:{
        fontStyle:"italic",
        marginVertical:5,
        fontSize:18,
    },
    price:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"right",
        color:"#000"
    },
    
})