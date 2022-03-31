import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, ActivityIndicator} from "react-native";
import {COLORS, SIZES} from "../Constants/theme";

const WaitingComponent = props => {
    const [exit, setExit] = useState(true)
    const [count, setCount] = useState(30)
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
            <View style={[styles.subContainer,{backgroundColor: exit ? COLORS.primary : 'green'}]}>
                {
                    count ? (
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={styles.alertText}>ထွက်ရန်စောင့်ဆိုင်းပေးပါခင်ဗျ။ {count}s</Text>
                            <ActivityIndicator style={{marginStart:4}} color={COLORS.white}/>
                        </View>
                    ):(
                        <Text style={styles.alertText}>ထွက်လို့ရပါပီခင်ဗျ။</Text>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding
    },
    subContainer: {
        height: 50,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center"
    },
    alertText: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 13
    }
})

export default WaitingComponent
