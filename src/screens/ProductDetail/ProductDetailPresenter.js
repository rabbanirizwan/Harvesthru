import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TextInput, ScrollView, Switch } from 'react-native'
import LoadingBar from '../../components/LoadingBar';
import ToggleSwitch from 'toggle-switch-react-native'
import ProductTypes from '../../components/Product-Types';
import Pricing from '../../components/Pricing';
import NextButton from '../../components/Button';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const productOptions = [
    { img: require("../../assets/images/product-icons/seeds.png") },
    { img: require("../../assets/images/product-icons/veggies.png") },
    { img: require("../../assets/images/product-icons/plants.png") },
    { img: require("../../assets/images/product-icons/fruits.png") },
    { img: require("../../assets/images/product-icons/other.png") }
]
const deliveryOptions = [
    { img: require("../../assets/images/delivery.png") },
    { img: require("../../assets/images/pickup.png") },

]
const ProductDetailPresenter = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[styles.parent,]}>
            <ScrollView
               showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollview}>
                <LoadingBar option={1} loading="one"/>
                <View style={styles.productName} >
                    <Text style={styles.textName}>Produce Name</Text>
                    <TextInput style={{paddingLeft:30}} />
                </View>
                <ToggleSwitch
                    isOn={isEnabled}
                    label="Organic"
                    thumbOnStyle={{ paddingHorizontal: 13 }}
                    thumbOffStyle={{ paddingHorizontal: 13 }}
                    labelStyle={{ color: "black", fontSize: 14, paddingLeft:5,paddingRight:40, color: "#4A4A4A" }}
                    trackOnStyle={{ backgroundColor: "#9ACD00", width: 55 }}
                    trackOffStyle={{ backgroundColor: "#E5E5E5", width: 55 }}
                    size="medium"
                    onToggle={() => setIsEnabled(!isEnabled)}
                />
                <ProductTypes options="productTypes" products={productOptions} />
                <Pricing />
                <Text style={styles.deliveryOptionText}>Delivery Options</Text>
                <Text style={styles.selectText}>(can select several)</Text>
                <ProductTypes option="deliveryTypes" products={deliveryOptions} />
                <NextButton navigation={navigation} screen="productTwo" />
            </ScrollView>

        </SafeAreaView>
    )
}
export default ProductDetailPresenter

const styles = StyleSheet.create({
    deliveryOptionText: {
        fontSize: 14,
        color: "black",
        paddingLeft:15
    },
    selectText: {
        color: "#979797",
        fontSize: 12,
        paddingLeft:15,
        marginTop:10
    },
    scrollview: {
        justifyContent: "flex-start",
        paddingHorizontal:10
        // flex: 1
    },
    parent: {
        paddingHorizontal: 10,
        backgroundColor: "white",
        flex: 1

    },
    productName: {
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 30
        //flex:1
    },
    textName: {
        position: "absolute",
        top: -10,
        left: 20,
        backgroundColor: "white",
        paddingHorizontal: 10
    }

})
