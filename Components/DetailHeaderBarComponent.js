import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {useNavigation} from "@react-navigation/native";
import {ShareMethod} from "../Methods/ShareMethod";

const DetailHeaderBarComponent = props => {
    const navigation = useNavigation();
    const [exit, setExit] = useState(true)
    const [count, setCount] = useState(15)
    useEffect(() => {
        let time = setTimeout(() => {
            if (count < 1) {
                setExit(false)
                return clearTimeout(time)
            }
            setCount(count - 1)
        }, 1000)
        if (count < 1) {
            setExit(false)
            return clearTimeout(time)
        }
        return () => {
            clearTimeout(time)
        }
    })
    return (
        <View style={styles.container}>
            {
                exit ? (
                    <View style={{justifyContent: "center", width: 30}}>
                        <Text style={{...FONTS.h3, color: COLORS.black}}>{count}</Text>
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} color={COLORS.textPrimary}/>
                    </TouchableOpacity>
                )
            }

            <Text style={styles.headerText}>Detail</Text>
            <TouchableOpacity onPress={() => ShareMethod(props.link)}>
                <Ionicons name="md-share-social-sharp" size={25} color={COLORS.textPrimary}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.textSecondary,
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.textPrimary
    }
})

export default DetailHeaderBarComponent
