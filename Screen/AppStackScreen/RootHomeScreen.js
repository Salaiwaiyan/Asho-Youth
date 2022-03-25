import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../Constants/theme";
import ArticleScreen from "./ArticleScreen";
import CertificateScreen from "./CertificateScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const StackBottom = createBottomTabNavigator()
const RootHomeScreen = props => {
  return(
     <StackBottom.Navigator screenOptions={{
       headerShown:false,
       tabBarStyle:{
         height:'7%'
       },
     }}>
       <StackBottom.Screen options={{
         tabBarShowLabel:false,

         tabBarIcon:({focused})=>{
           return(
             <View style={styles.tabContainer}>
               <Ionicons color={focused ? COLORS.primary : COLORS.textSecondary} name={focused ? "ios-cube" : "ios-cube-outline"} size={20}/>
               <Text style={[styles.navigationText,{color : focused ? COLORS.primary : COLORS.textSecondary}]}>Home</Text>
             </View>
           )
         }
       }} name="HomeScreen" component={HomeScreen}/>
       <StackBottom.Screen options={{
         tabBarShowLabel:false,
         tabBarIcon:({focused})=>{
           return(
               <View style={styles.tabContainer}>
                 <Ionicons color={focused ? COLORS.primary : COLORS.textSecondary} name={focused ? "newspaper" : "newspaper-outline"} size={20}/>
                 <Text style={[styles.navigationText,{color : focused ? COLORS.primary : COLORS.textSecondary}]}>Articles</Text>
               </View>
           )
         }
       }} name="ArticleScreen" component={ArticleScreen}/>
       <StackBottom.Screen options={{
         tabBarShowLabel:false,
         tabBarIcon:({focused})=>{
           return(
             <View style={styles.tabContainer}>
               <FontAwesome color={focused ? COLORS.primary : COLORS.textSecondary} name={focused ? "star" : "star-o"} size={20}/>
               <Text style={[styles.navigationText,{color : focused ? COLORS.primary : COLORS.textSecondary}]}>Certificate</Text>
             </View>
           )
         }
       }} name="CertificateScreen" component={CertificateScreen}/>
     </StackBottom.Navigator>
  )
}

const styles = StyleSheet.create({
  navigationText:{
    ...FONTS.body5,
  },
  tabContainer:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
  }
})

export default RootHomeScreen

