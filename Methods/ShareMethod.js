import { Share } from "react-native";

export const ShareMethod = async (link) => {
  try {
    const result = await Share.share({
      message: link,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {

      } else {

      }
    } else if (result.action === Share.dismissedAction) {

    }
  } catch (error) {
    alert(error.message);
  }
}
