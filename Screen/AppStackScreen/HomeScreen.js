import React from "react";
import {StatusBar, View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import BannerAdComponent from "../../Components/BannerAdComponent";
import LottieView from "lottie-react-native";
import AboutComponent from "../../Components/AboutComponent";
import PointComponent from "../../Components/PointComponent";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}/>
            <HeaderBarComponent text="Home"/>
            <View style={styles.pointContainer}>
                <LottieView style={styles.pointLottie} source={require("../../Lotties/pointFrame.json")} autoPlay loop/>
                <View style={styles.pointTextContainer}>
                    <Text style={styles.pointHeaderText}>My Points</Text>
                    <PointComponent style={styles.pointText}/>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <AboutComponent/>
            </View>
            <View style={styles.bannerAd}>
                <BannerAdComponent/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
    },
    bannerAd: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: '0%',
        left: '10%'
    },
    pointContainer: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        padding: SIZES.padding * 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pointLottie: {
        height: 80,
    },
    aboutContainer: {
        flex:0.8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        padding: SIZES.padding * 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
    },
    pointHeaderText: {
        ...FONTS.h2,
        color: COLORS.primary
    },
    pointText: {
        ...FONTS.h3,
        color: COLORS.textPrimary
    },
    pointTextContainer: {
        marginRight:SIZES.padding
    }
});

export default HomeScreen;
