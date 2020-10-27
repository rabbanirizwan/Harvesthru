import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Edit = ({ image, name }) => {
    return (
        <View style={styles.parent}>
            <View style={[styles.inner,name=="Photos"?{flex:.3}:{flex:.42}]}>
                <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={image}
                    style={{ height: 30, width: 30 }}
                />
                <Text style={styles.text}>{name}</Text>
            </View>
            <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets/images/edit.png')}
                style={{ height: 20, width: 20 }}
            />
        </View>
    )
}
export default Edit

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: "#353535",
        fontWeight: "bold",
        fontFamily: "Nunito",

    },
    parent: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
       // shadowColor: "gray",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        
        // elevation: 4,
        // backgroundColor:"white"
    },
    inner: {
        flexDirection: "row",
        alignItems: "center",
         //backgroundColor:"red",
        justifyContent: "space-between",
        //flex: .35
    }
})