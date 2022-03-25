import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../Constants/theme";

const LoadingComponent = props => {
  return(
    <View style={styles.container}>
        <ActivityIndicator size={60} color={COLORS.primary}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default LoadingComponent
