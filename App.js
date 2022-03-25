import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootHomeScreen from "./Screen/AppStackScreen/RootHomeScreen";
import PostDetailScreen from "./Screen/AppStackScreen/PostDetailScreen";
const Stack = createNativeStackNavigator()

const App = props => {
  const [login,setLogin] = useState(null)
  useEffect(()=>{
    SplashScreen.hide()
    getData().then(()=>{
      console.log("Success")
    })
    LogBox.ignoreLogs(['new NativeEventEmitter']);
  },[])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('OldUser')
      if(value === null) {
        setLogin(false)
      }else {
        setLogin(true)
      }
    } catch(e) {

    }
  }

  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="RootHomeScreen"  component={RootHomeScreen}/>
          <Stack.Screen name="PostDetailScreen" component={PostDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App