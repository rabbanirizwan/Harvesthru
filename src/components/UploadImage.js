import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const UploadImage = ({navigation}) => {

    const [image,setImage] = useState(null)

    const selectImage = ()=>{
        const options = {
            title: 'Select Avatar',
            // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
           
          /**
           * The first arg is the options object for customization (it can also be null or omitted for default options),
           * The second arg is the callback which sends object: response (more info in the API Reference)
           */
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
           
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
           
              setImage(source)
              
            }
          });
    }
    

      console.log(image)
    return (
      
        <TouchableOpacity
        onPress={()=>!image&&selectImage()}
         >
           
            <Image
                resizeMethod="resize"
                resizeMode={image?"cover":"contain"}
                source={image?image:require("../assets/images/upload.png")}
                style={{width:screenWidth/3,height:screenWidth/3,alignSelf:"center"}}
            />
            
        </TouchableOpacity>
   
    )
}
export default UploadImage
const styles = StyleSheet.create({

})