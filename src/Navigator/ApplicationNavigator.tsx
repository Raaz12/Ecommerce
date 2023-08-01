import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../Screens/SignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import MainNavigator from './Main';
import AllProducts from '../components/Homepage/AllProducts';
import ProductDetailsPage from '../components/Homepage/ProductDetailsPage';
import CheckoutScreen from '../Screens/CheckoutScreen';
const Stack = createNativeStackNavigator();
const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='SignupScreen' component={SignupScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='Main' component={MainNavigator} />
                <Stack.Screen name='AllProducts' component={AllProducts} />
                <Stack.Screen name='ProductDetailsPage' component={ProductDetailsPage} />
                <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator