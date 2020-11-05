import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions,Platform} from 'react-native'
import Edit from '../../components/edit'
import LoadingBar from '../../components/LoadingBar'
import styled from 'styled-components/native'
import ProductSilder from '../../components/product-slider'
import ProductCard from '../../components/ProductCard'
const BoxShadow = styled.View`
 box-shadow:0px 8px 8px silver;
  elevation: 8;
  padding-vertical:10px;
  background-color:white
`
const BoxShadowOne = styled.View`
 box-shadow:0px 10px 8px silver;
  elevation: 8;
  padding-vertical:10px;
  background-color:white
`
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const ReviewPresenter = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.loading}>
                <LoadingBar option={2} loading="four" />
            </View>

           
                <BoxShadowOne style={ Platform.OS=="ios"?{ marginTop: 0 }:{marginTop:20}}>
                    <Edit name="Photos" image={require("../../assets/images/checked.png")} />
                </BoxShadowOne>
                <View style={{ height: 150,}}>
                    <ProductSilder />
                </View>



                <BoxShadow style={{ marginTop: 0, borderTopWidth: 1, borderTopColor: "#E5E5E5" }}>
                    <Edit name="Product Details" image={require("../../assets/images/exclamation.png")} />
                </BoxShadow>
            

            <ProductCard />
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => navigation.push("previewScreen")}
                    style={[styles.previewButton, { height: screenHeight / 15 }]}>
                    <Text style={styles.previewText}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.publishButton, { height: screenHeight / 15 }]}>
                    <Text style={styles.publishText}>Publish</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default ReviewPresenter

const styles = StyleSheet.create({
    previewButton: {
        borderTopWidth: 1,
        borderTopColor: "#9ACD00",
        flex: .5,
        backgroundColor: "white",
        height: 100,
        alignItems: "center",
        justifyContent: "center"

    },
    publishButton: {
        flex: .5,
        backgroundColor: "#9ACD00",
        alignItems: "center",
        justifyContent: "center"
    },
    previewText: {
        color: "#9ACD00",
        fontSize: 15,
        fontFamily: "Nunito-Regular"
    },
    publishText: {
        fontSize: 15,
        color: "white",
        fontFamily: "Nunito-Bold"
    },
    parent: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        //paddingHorizontal:10
    },
    loading: {
        paddingHorizontal: 10
    },
    footer: {
        flexDirection: "row"
    }
})