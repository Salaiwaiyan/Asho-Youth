import React from "react";
import { BannerAd, BannerAdSize } from "@react-native-firebase/admob";

const BannerAdComponent = props => {
  return(
    <BannerAd unitId="ca-app-pub-5841782551928007/2647487673" size={BannerAdSize.BANNER}/>
  )
}

export default BannerAdComponent
