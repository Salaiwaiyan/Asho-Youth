import AsyncStorage from "@react-native-async-storage/async-storage";

export const addPoint = async () => {
  let points = await AsyncStorage.getItem("Points");
  if (points === null) {
    points = 0;
    await AsyncStorage.setItem("Points", `${Number(points) + 1}`);
  } else {
    await AsyncStorage.setItem("Points", `${Number(points) + 1}`);
  }
};
