import React, {useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../../Constants/theme";
import NoCertificateComponent from "../../Components/NoCertificateComponent";
import GetCertificateComponent from "../../Components/GetCertificateComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const CertificateScreen = props => {
  const [certificate,setCertificate] = useState(null)

  useFocusEffect(
    React.useCallback(() => {
      async function checkPoint() {
        let points = await AsyncStorage.getItem("Points");
        if(Number(points) >= 5000){
          setCertificate(true)
        }else {
          setCertificate(false)
        }
      }
      checkPoint().then(()=>{
      })
    }, [certificate]),
  );


  return(
    <View style={styles.container}>
      {
        certificate ? (
          <GetCertificateComponent/>
        ):(
          <NoCertificateComponent/>
        )
      }
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
})


export default CertificateScreen
