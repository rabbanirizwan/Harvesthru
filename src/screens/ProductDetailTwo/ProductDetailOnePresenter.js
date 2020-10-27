import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TextInput } from 'react-native'
import NextButton from '../../components/Button';
import LoadingBar from '../../components/LoadingBar'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const ProductDetailOne = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <LoadingBar option={1} loading="two" />
            <View style={[styles.descContainer]}>
                <Text style={styles.desc}>Almost done!</Text>
                <Text style={styles.desc}>Share some details to help buyers know about your product! Some ideas are: </Text>
                <View style={styles.bulletpointContainer}>
                    <Text style={styles.bulletpoint}>• Do you sell your product by bulk?</Text>
                    <Text style={styles.bulletpoint}>• Any cooking tips?</Text>
                </View>
            </View>
            <View style={styles.productName} >
                <Text style={styles.textName}>Description</Text>
                <TextInput
                    placeholder="Please describe your listing...                "
                    maxLength={1100}
                    multiline={true}
                    style={[styles.textInput, { height: screenHeight / 5 }]}
                />
            </View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <NextButton/>
        </SafeAreaView>
    )
}
export default ProductDetailOne

const styles = StyleSheet.create({
    textInput: {
        textAlignVertical: "top",
        paddingHorizontal: 30
    },
    parent: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 10,
        justifyContent:"space-between"
    },
    bulletpointContainer: {
        marginVertical: 10
    },
    descContainer: {
        width: "80%",
        alignSelf: "center",
        marginVertical: 30
    },
    desc: {
        fontWeight: "700",
        fontSize: 13,
        color: "#4A4A4A",

    },
    bulletpoint: {
        color: "#666666",
        fontSize: 13,

    },
    productName: {
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 10,
        marginHorizontal:10
        // marginTop: 50,
        // marginBottom: 30
        //flex:1
    },
    textName: {
        position: "absolute",
        top: -10,
        left: 20,
        backgroundColor: "white",
        paddingHorizontal: 10,
        fontSize:14
    }
})