import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'



const Product = [{ img: require("../assets/images/apple.png"), set: true },
{ img: require("../assets/images/apple.png"), set: false },
{ img: require("../assets/images/apple.png"), set: false },
{ img: require("../assets/images/apple.png"), set: false },
{ img: require("../assets/images/apple.png"), set: false },
{ img: require("../assets/images/apple.png"), set: false },
{ img: require("../assets/images/apple.png"), set: false },
]
const ProductSilder = () => {
    const [active, setActive] = useState(false)
    const [arrayData,setArray] = useState(Product)

    const onClick = (index) =>{
        //console.log(index)
        let arrayList =[...Product]
       // arrayList[index].set = true
        arrayList.map((val,id)=>id == index ? val.set=true:val.set = false )
        setArray(arrayList)
        
        
    }
    return (

        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.parent}
            horizontal={true}
            data={arrayData}
            renderItem={({ item ,index}) => (<TouchableOpacity
                 onPress={() => onClick(index)} 
                style={[{ height: 110, flex: 1 }, item.set ? styles.activeItem : styles.notActive]}>
                <Image
                    resizeMethod="resize"
                    resizeMode="cover"
                    source={item.img}
                    style={{ height: 100, width: 100, borderRadius: 10 }}
                />
                {item.set && <Text style={styles.text}>Cover</Text>}
            </TouchableOpacity>)}
            keyExtractor={(item, index) => index.toString()}
        />


    )
}
export default ProductSilder

const styles = StyleSheet.create({
    parent: {
        paddingVertical:15
       // backgroundColor:"red"

    },
    activeItem: {
        borderColor: "#9ACD00", borderWidth: 5, borderRadius: 15
    },
    notActive: {
        borderColor: "transparent", borderWidth: 5, borderRadius: 15
    },
    text: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: 12,
        color: "#9ACD00",
        textAlign: "center",
        marginTop: 5
    }
})