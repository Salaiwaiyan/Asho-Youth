import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { COLORS, FONTS, SIZES } from "../Constants/theme";

const NoCertificateComponent = props => {
  return(
    <View style={styles.container}>
      <LottieView style={styles.lottieStyle} source={require("../Lotties/notFound.json")} loop autoPlay/>
      <Text style={styles.text}>Certificate ထုတ်ပေးထားခြင်းမရှိသေးပါ။</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingHorizontal:SIZES.padding
  },
  lottieStyle:{
    height:'60%',
    justifyContent:"flex-end",
    alignItems:"center",
  },
  text:{
    ...FONTS.h4,
    color:COLORS.primary
  }
})

export default NoCertificateComponent
