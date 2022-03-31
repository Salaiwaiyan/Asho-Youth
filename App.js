import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {LogBox} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootHomeScreen from "./Screen/AppStackScreen/RootHomeScreen";
import PostDetailScreen from "./Screen/AppStackScreen/PostDetailScreen";
import RNBootSplash from "react-native-bootsplash";

const Stack = createNativeStackNavigator()

const App = props => {
    useEffect(() => {
        RNBootSplash.hide({fade: true});
        LogBox.ignoreLogs(['new NativeEventEmitter']);
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="RootHomeScreen" component={RootHomeScreen}/>
                <Stack.Screen name="PostDetailScreen" component={PostDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
