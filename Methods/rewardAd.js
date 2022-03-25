import {RewardedAd, RewardedAdEventType, TestIds} from "@react-native-firebase/admob";
import {ToastAndroid} from "react-native";
import { addPoint } from "./addPoint";

export const rewardAd = () => {
    const rewarded = RewardedAd.createForAdRequest("ca-app-pub-5841782551928007/4156844612", {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    });
    let eventListener = rewarded.onAdEvent((type, error, reward) => {
        if (type === RewardedAdEventType.LOADED) {
            rewarded.show()
        }
        if(type === RewardedAdEventType.EARNED_REWARD){
            addPoint().then(()=>{
                console.log("You have one point")
            })
            ToastAndroid.show("Congratulation 🥳 You got 1 point 🥳🥳🥳🥳🥳",ToastAndroid.LONG)
        }
    });
    rewarded.load()
    return ()=>{
        eventListener = null
    }
}
