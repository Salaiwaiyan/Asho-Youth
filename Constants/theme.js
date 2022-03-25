import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const COLORS = {
    primary: "#ff0000",
    secondary: "#69a7fc",
    black: "#18191a",
    red:"red",
    white: "#FFFFFF",
    lightGray: "#F5F5F6",
    lightGray2: "rgba(217,217,217,0.42)",
    lightGray3: "#EFEFF1",
    lightGray4: "#3a3a3a",
    transparent: "transparent",
    darkgray: '#898C95',
    gold:"#F4B400",
    textPrimary : "#050505",
    textSecondary : "#41434e"
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 5,
    roundRadius: 30,
    padding: 10,
    padding2: 12,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    width,
    height
};

export const FONTS = {
    largeTitle: {fontFamily: "Inter-Regular", fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: {fontFamily: "Inter-SemiBold", fontSize: SIZES.h1},
    h2: {fontFamily: "Inter-SemiBold", fontSize: SIZES.h2},
    h3: {fontFamily: "Inter-SemiBold", fontSize: SIZES.h3, lineHeight: 27},
    h4: {fontFamily: "Inter-SemiBold", fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: "Inter-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: "Inter-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: "Inter-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: "Inter-Regular", fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: "Inter-Regular", fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
