import React from 'react'
import { View, StyleSheet, Text, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const Pricing = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.productName} >
                <Text style={styles.textName}>Pricing</Text>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                    {/* <Text style={{ color: "#979797", fontSize: 20, fontWeight: "bold" }}>$</Text> */}
                    <Image
                        resizeMode="contain"
                        resizeMethod="resize"
                        source={require("../assets/images/dollar.png")}
                        style={{ height: 16, width: 16 }}
                    />
                    <TextInput
                        style={{ flex: 1, borderWidth: 0, paddingVertical: 10 }}
                        underlineColorAndroid="transparent"
                        keyboardType="number-pad" />
                </View>

            </View>
            <View style={styles.unit}>
                <Text style={{ color: "#979797", fontSize: 14, fontFamily: "Nunito-SemiBold", paddingLeft: 5 }}> / lbs</Text>
                <TouchableOpacity style={styles.dropdown}>
                    <Image
                        resizeMode="contain"
                        resizeMethod="resize"
                        source={require("../assets/images/drop_down.png")}
                        style={{ height: 12, width: 12, marginLeft: 10 }}
                    />
                </TouchableOpacity>

            </View>
        </View>

    )
}
export default Pricing

const styles = StyleSheet.create({
    dropdown: {
        padding: 10
    },
    unit: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",


    },
    parent: {
        marginVertical: 40,
        flexDirection: "row",
        alignItems: "center"
        // flexDirection:"row"
    },
    productName: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#DADADA",
        borderRadius: 10,
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
        fontFamily: "Nunito-Regular",
        fontSize: 14
    }

})
