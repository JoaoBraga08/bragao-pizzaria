import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "red"
    },
    header:{
    padding: 6
    },
    headerImage:{
        width: "100%",
        height: 240,
        borderRadius: 8
    },
    restauranteName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color:"black"
    },
 
    subtitle: {
    color: "black",
    marginTop: 4
    },
    tabs:{
        flexDirection:"row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName:{
        color:"black"
    },
    menuList:{
    padding:16,
    flex:1
    },
    menuItem:{
        flexDirection:"row",
        borderBottomColor:"#black",
        borderBottomWidth:1,
        padding:16
    },
    menuContent:{
        flex:1,
        marginRight:16
    },
    itemImage:{
        width:150,
        height:130,
        borderRadius:8,
     
    },
    itemName:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"
    },
    itemDescription:{
        color:"black",
        marginTop:4
    },
    itemPrice:{
        fontSize:16,
        fontWeight:"bold",
        marginTop: 8,
        color:"black"
    },
})
 