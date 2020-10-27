import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const ProductCard = () =>{
    return(
      <View style={styles.parent}>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Produce Name</Text>
            <Text style={[styles.desc,{width:100}]}>Fuji Apples</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Type of Produce</Text>
            <Text style={[styles.desc,{width:100}]}>Fruits</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Pricing</Text>
            <Text style={[styles.desc,{width:100}]}>$2 / lb</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Quantity</Text>
            <Text style={[styles.desc,{width:100}]}>20 lbs</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Delivery Options</Text>
            <Text style={[styles.desc,{width:100}]}>Pick Up, Harvest</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:170}]}>Description</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={require("../assets/images/exclamation.png")}
                style={{height:20,width:20}}
                />
            <Text style={[styles.desc,{width:100,color:"#FF5876",fontWeight:"bold"}]}>Missing</Text>
            </View>
            
        </View>
      </View>
    ) 
}
export default ProductCard

const styles = StyleSheet.create({
parent:{
    padding:15,
    paddingBottom:0,
    alignItems:"flex-start"
},
row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   // backgroundColor:"pink",
 
    paddingHorizontal:10,
    paddingVertical:10
   
},
heading:{
    color:"#353535",
    fontSize:16,
    fontWeight:"bold",
    textAlign:"left",
  //  backgroundColor:"yellow",
    

},
desc:{
    color:"#353535",
    fontSize:12,
    fontWeight:"200" ,
    textAlign:"left",
    paddingLeft:10
   
   // backgroundColor:"red"
}
})