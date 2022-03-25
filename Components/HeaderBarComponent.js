import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../Constants/theme";

const HeaderBarComponent = props => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     height:70,
     justifyContent:"center"
  },
  headerText: {
    ...FONTS.h2,
    color: COLORS.textPrimary,
  },
})

export default HeaderBarComponent
