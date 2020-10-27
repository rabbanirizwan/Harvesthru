import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const LoadingBarOptions = ["Select a Farm", "Product Details", "Upload Photos", "Review"]
const LoadingBar = ({ option, loading }) => {
    const item = LoadingBarOptions.map((val, index) => {
        return (
            <Text style={option == index ? styles.textActive : styles.text} key={index}>{val}</Text>
        )
    })
    return (
        <View>
            <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={loading == "one" && require("../assets/images/loading_one.png") ||
                    loading == "two" && require("../assets/images/loading_two.png") ||
                    loading == "three" && require("../assets/images/loading_three.png") ||
                    loading == "four" && require("../assets/images/loading_four.png")
                }
                style={{
                    //width: screenWidth / 1.05
                    width: "99%"
                }}
            />
            <View style={styles.loadingBarOptions}>
                {item}
            </View>
        </View>
    )
}
export default LoadingBar

const styles = StyleSheet.create({
    loadingBarOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -10
    },
    text: {
        fontFamily: "Nunito-Light",
        fontSize: 12,
        width: "15%",
        textAlign: "center"
    },
    textActive: {
        fontFamily: "Nunito-Light",
        fontSize: 12,
        width: "15%",
        textAlign: "center",
        color: "#9ACD00",
        fontWeight: "bold"
    }
})