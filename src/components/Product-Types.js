import React from 'react'
import { ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, View, Text } from 'react-native'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const ProductTypes = ({ options, products }) => {
    //console.log(options != "deliveryTypes")
    const item = products.map((val, index) => {
        return (
            <TouchableOpacity key={index}>
                <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={val.img}
                    style={{
                        height: options == "productTypes" ? screenWidth / 5 : screenWidth / 3.5,
                        width: options == "productTypes" ? screenWidth / 5 : screenWidth / 3.5
                    }}
                />
            </TouchableOpacity>
        )
    })
    return (
        <View style={options == "productTypes" ? styles.parent : { marginTop: 0 }}>
            {options == "productTypes" && <Text style={styles.text}>Type of Produce</Text>}
            <ScrollView
                contentContainerStyle={styles.parent}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {item}
            </ScrollView>
        </View>

    )
}
export default ProductTypes

const styles = StyleSheet.create({
    parent: {
        marginTop: 20

    },
    text: {
        fontSize: 14,
        color: "black",
        paddingLeft: 15
    }
})