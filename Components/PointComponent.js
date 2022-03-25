import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { FONTS, SIZES } from "../Constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const PointComponent = props => {
  const [count, setCount] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      async function test() {
        let points = await AsyncStorage.getItem("Points");
        if (points === null) {
          await setCount(0);
        } else {
          await setCount(Number(points));
          if (points >= 1000) {
            let number = Math.abs(points) > 999 ? Math.sign(points) * ((Math.abs(points) / 1000).toFixed(10)) + "k" : Math.sign(points) * Math.abs(points);
            setCount(number);
          }
        }
      }
      test().then(() => {

      });

    }, []),
  );

  return (
    <Text style={[styles.coinText, { color: props.textColor } , props.style]}>{count} {props.text}</Text>
  );
};

const styles = StyleSheet.create({
  coinText: {
    ...FONTS.h3,
    textAlign: "center",
  },
});

export default PointComponent;
