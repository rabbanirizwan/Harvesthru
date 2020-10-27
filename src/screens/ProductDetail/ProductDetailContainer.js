import React from 'react'
import {View,SafeAreaView,StyleSheet,Text} from 'react-native'
import ProductDetailPresenter from './ProductDetailPresenter'

const ProductDetailContainer = (props) =>{
    return(
     <ProductDetailPresenter navigation={props.navigation}/>
    )
}

export default ProductDetailContainer
