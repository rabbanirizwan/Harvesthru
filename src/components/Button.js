import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const NextButton = ({ navigation, screen }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.push(screen)}
            style={[styles.button, { width: screenWidth / 2.2 }]}>
            <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
    )
}
export default NextButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#9ACD00",
        alignSelf: "center",
        borderRadius: 30,
        paddingVertical: 18,

        marginVertical: 30,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        // marginBottom:550

    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
})