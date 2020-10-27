import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import NextButton from '../../components/Button'
import LoadingBar from '../../components/LoadingBar'
import UploadImage from '../../components/UploadImage'

const UploadImagePresenter = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <LoadingBar option={2} loading="three" />
            <View style={styles.upload}>
                <UploadImage />
                <Text style={styles.text}>Upload photos of your item!</Text>
            </View>

            <NextButton navigation={navigation} screen="reviewScreen" />
        </SafeAreaView>
    )
}
export default UploadImagePresenter

const styles = StyleSheet.create({
    upload: {
        alignItems: "center"
    },
    parent: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    text: {
        fontFamily: "Nunito-Regular",
        color: "#979797",
        fontSize: 12
    }
})