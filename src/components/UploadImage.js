import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const UploadImage = ({navigation}) => {
    return (
        <TouchableOpacity>
            <Image
                resizeMethod="resize"
                resizeMode="contain"
                source={require("../assets/images/upload.png")}
                style={{width:screenWidth/3,height:screenWidth/3,alignSelf:"center"}}
            />
        </TouchableOpacity>
    )
}
export default UploadImage
const styles = StyleSheet.create({

})