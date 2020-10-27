import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const ProductCard = () =>{
    return(
      <View style={styles.parent}>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Produce Name</Text>
            <Text style={[styles.desc,{width:120}]}>Fuji Apples</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Type of Produce</Text>
            <Text style={[styles.desc,{width:120}]}>Fruits</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Pricing</Text>
            <Text style={[styles.desc,{width:120}]}>$2 / lb</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Quantity</Text>
            <Text style={[styles.desc,{width:120}]}>20 lbs</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Delivery Options</Text>
            <Text style={[styles.desc,{width:120}]}>Pick Up, Harvest</Text>
        </View>
        <View style={styles.row}>
            <Text style={[styles.heading,{width:150}]}>Description</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={require("../assets/images/exclamation.png")}
                style={{height:20,width:20}}
                />
            <Text style={[styles.desc,{width:120,color:"#FF5876",  fontFamily:"Nunito-ExtraBold",paddingLeft:10}]}>Missing</Text>
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
    paddingVertical:5
   
},
heading:{
    color:"#353535",
    fontSize:12,
    fontFamily:"Nunito-ExtraBold",
    textAlign:"left",
  //  backgroundColor:"yellow",
    

},
desc:{
    color:"#353535",
    fontSize:12,
    fontFamily:"Nunito-SemiBold",
    textAlign:"left",
    //paddingLeft:10,
    //backgroundColor:"red"
   
   // backgroundColor:"red"
}
})