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
    //     const routesLength = useNavigationState(state => state.routes.length);
    // console.log('routesLength', routesLength);
    return (
        <Stack.Navigator
            initialRouteName="ProductDetailOne"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,

                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        if (navigation.canGoBack()) {
                            navigation.goBack()
                        } else {

                        }

                    }} style={{ paddingLeft: 20 }}>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("../assets/images/arrow_back.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.canGoBack() && navigation.popToTop()}
                        style={{ paddingRight: 20 }}>
                        <Text style={{fontSize:14,fontFamily:"Nunito-Regular"}}>Exit</Text>
                    </TouchableOpacity>
                )
            })}
        >
            <Stack.Screen name="ProductDetailOne" component={ProductDetailContainer}
                options={{
                    title: "Product Details",
                    headerTitleStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 16
                    },
                }} />
            <Stack.Screen name="productTwo" component={ProductDetailOne}
                options={{
                    title: "Product Details",
                    headerTitleStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 16
                    },
                }} />
            <Stack.Screen name="uploadImage" component={UploadImagePresenter}
                options={{
                    title: "Upload Photos",
                    headerTitleStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 16
                    },
                }} />
            <Stack.Screen name="reviewScreen" component={ReviewPresenter}
                options={{
                    title: "Review",
                    headerTitleStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 16
                    },
                }} />
            <Stack.Screen name="previewScreen" component={PreviewScreenPresenter}
                options={{
                    title: "Preview",
                    headerTitleStyle: {
                        fontFamily: 'Nunito-ExtraBold',
                        fontSize: 16
                    },
                }} />
        </Stack.Navigator>
    )
}
export default StackScreen