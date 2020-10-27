import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailContainer from '../screens/ProductDetail/ProductDetailContainer';
import ProductDetailOne from '../screens/ProductDetailTwo/ProductDetailOnePresenter';
import UploadImagePresenter from '../screens/UploadImage/UploadImagePresenter';
import ReviewPresenter from '../screens/ReviewScreen/ReviewPresenterScreen';
import PreviewScreenPresenter from '../screens/PreviewScreen/PreviewScreenPresenter';

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
        initialRouteName="previewScreen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerLeft: () => (
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("../assets/images/arrow_back.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <Text>Exit</Text>
                    </TouchableOpacity>
                )
            }}
        >
            <Stack.Screen name="ProductDetailOne" component={ProductDetailContainer} options={{ title: "Product Details" }}/>
            <Stack.Screen name="productTwo" component={ProductDetailOne} options={{ title: "Product Details" }}/>
            <Stack.Screen name="uploadImage" component={UploadImagePresenter} options={{ title: "Upload Photos" }}/>
            <Stack.Screen name="reviewScreen" component={ReviewPresenter} options={{title: "Review"}}/>
            <Stack.Screen name="previewScreen" component={PreviewScreenPresenter} options={{title: "Preview"}}/>
        </Stack.Navigator>
    )
}
export default StackScreen