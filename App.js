import React, {createContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {LogBox} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootHomeScreen from "./Screen/AppStackScreen/RootHomeScreen";
import PostDetailScreen from "./Screen/AppStackScreen/PostDetailScreen";
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()
export const AuthContext = createContext()
const App = props => {
    useEffect(() => {
        SplashScreen.hide();
        LogBox.ignoreLogs(['new NativeEventEmitter']);
    }, [])
    const [showModal, setShowModal] = useState(false)
    return (
        <AuthContext.Provider
            value={{
                showModal,
                setShowModal,
            }}
        >
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="RootHomeScreen" component={RootHomeScreen}/>
                    <Stack.Screen name="PostDetailScreen" component={PostDetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App
