import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import LoadingBar from '../../components/LoadingBar'
import styled from 'styled-components/native'
const BoxShadow = styled.View`
box-shadow:0px 8px 8px silver;
  elevation: 4;
  padding-vertical:10px;
  background-color:white;
  padding-horizontal:10px
`
const DescriptionHeading = styled.Text`
font-size:14px;
font-family:Nunito-Bold
`
const Description =styled.Text`
font-size:12px;
font-family:Nunito-Light
`
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const PreviewScreenPresenter = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <BoxShadow>
                <LoadingBar option={3} loading="four" />
            </BoxShadow>

            <Image
                source={require("../../assets/images/apple.png")}
                resizeMethod="resize"
                resizeMode="cover"
                style={styles.image}
            />

           <View style={styles.detail}>
               <View>
               <Text style={styles.text}>Fuji Apples</Text>
               <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={require("../../assets/images/organic.png")}
                style={{
                    width:screenWidth/5,
                   height:screenWidth/10,
                   }}
               />
               </View>
               
               <Image
                resizeMode="cover"
                resizeMethod="resize"
                source={require("../../assets/images/price.png")}
                style={{width:screenWidth/3,height:screenWidth/10}}
               />
           </View>
           <View style={styles.desc}>
               <DescriptionHeading>Description</DescriptionHeading>
               <Description>Fuji Apples grown in Sally’s backyard. Pesticide-free. 20lbs left until 1/27. Eat fresh or use for baking!</Description>
           </View>

        </SafeAreaView>
    )

}
export default PreviewScreenPresenter

const styles = StyleSheet.create({
    desc:{
        paddingHorizontal:20,
        marginVertical: 20
    },
    parent: {
        flex: 1,
        //justifyContent: "space-between",
        backgroundColor: "white",
        //paddingHorizontal:10
    },
    image: {
        width: screenWidth / 1.1,
        alignSelf: "center",
        borderRadius: 20,
        marginVertical: 20
    },
    detail:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
      
     

    },
    text:{
        fontSize:16,
       fontFamily:"Nunito-ExtraBold"
    }
})