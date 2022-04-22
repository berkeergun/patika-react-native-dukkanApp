import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"#FCD63B",
        borderColor:"#bdbdbd",
        borderWidth:1,
        margin:10,
        flexDirection:"row",
        borderRadius:10,
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:"contain",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:"space-between"
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"#000"
    },
    price:{
        textAlign:"right",
        color:"#000",
        fontSize:16,
        fontStyle:"italic",
        fontWeight:"500"
    },
    
})