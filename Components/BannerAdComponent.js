import React from "react";
import {BannerAd, BannerAdSize, TestIds} from "@react-native-firebase/admob";

const BannerAdComponent = props => {
  return(
    <BannerAd unitId="ca-app-pub-7419198634648795/1993808565" size={BannerAdSize.BANNER}/>
  )
}

export default BannerAdComponent
