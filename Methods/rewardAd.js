import {RewardedAd, RewardedAdEventType, TestIds} from "@react-native-firebase/admob";
import {ToastAndroid} from "react-native";
import {addPoint} from "./addPoint";

export const rewardAd = (modalContext) => {
    const rewarded = RewardedAd.createForAdRequest("ca-app-pub-7419198634648795/1993808565", {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    });
    let eventListener = rewarded.onAdEvent((type, error, reward) => {
        if (type === RewardedAdEventType.LOADED) {
            rewarded.show()
        }
        if (type === RewardedAdEventType.EARNED_REWARD) {
            modalContext.setShowModal(true)
            setTimeout(() => {
                modalContext.setShowModal(false)
                addPoint().then(() => {
                    ToastAndroid.show("Congratulation 🥳 You got 1 point 🥳🥳🥳🥳🥳", ToastAndroid.LONG)
                })
            }, 20000)
        }
    });
    rewarded.load()
    return () => {
        eventListener = null
    }
}
