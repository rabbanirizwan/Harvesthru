import React from 'react'
import {SafeAreaView,View,Text,StyleSheet} from 'react-native'
import NextButton from '../../components/Button'
import LoadingBar from '../../components/LoadingBar'
import UploadImage from '../../components/UploadImage'

const UploadImagePresenter = () =>{
    return(
      <SafeAreaView style={styles.parent}>
           <LoadingBar option={2} loading="three"/>
           <UploadImage/>
           <NextButton/>
      </SafeAreaView>
    )
}
export default UploadImagePresenter

const styles = StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:10,
        justifyContent:"space-between"
    }
})