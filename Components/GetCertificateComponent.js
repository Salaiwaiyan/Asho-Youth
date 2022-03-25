import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../Constants/theme";
import LottieView from "lottie-react-native";

const GetCertificateComponent = props => {
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.certificateImage} source={require("../Images/certificate.png")}/>
      </View>
      <LottieView source={require("../Lotties/success.json")} autoPlay loop/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
    justifyContent:"center",
    alignItems:"center",
    padding:SIZES.padding
  },
  certificateImage:{
    width:350,
    height:250,
    resizeMode:"cover"
  },
  imageContainer:{
    backgroundColor:COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

})

export default GetCertificateComponent
