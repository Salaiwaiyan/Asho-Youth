import React, {useContext, useState} from "react";
import {View, StyleSheet, Text, Modal, ActivityIndicator} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import WebView from "react-native-webview";
import LoadingComponent from "../../Components/LoadingComponent";
import DetailHeaderBarComponent from "../../Components/DetailHeaderBarComponent";
import {AuthContext} from "../../App";
import LottieView from "lottie-react-native";

const PostDetailScreen = props => {
    const [loading, setLoading] = useState(true)
    const {showModal, setShowModal} = useContext(AuthContext);
    const link = props.route.params.url
    return (
        <View style={styles.container}>
            <DetailHeaderBarComponent link={link}/>
            <Modal transparent visible={showModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.subContainer}>
                        <ActivityIndicator color={COLORS.primary} size={80}/>
                        <Text style={{
                            ...FONTS.body3,
                            textAlign: "center",
                            color: COLORS.primary,
                            marginTop: SIZES.padding * 2
                        }}>ထွက်ရန်စောင့်ဆိုင်းပေးပါခင်ဗျာ။</Text>
                    </View>
                </View>
            </Modal>
            <WebView source={{uri: link}} startInLoadingState={true} renderLoading={() => {
                return (
                    <LoadingComponent/>
                )
            }} showsVerticalScrollIndicator={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
    },
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.78)"
    },
    subContainer: {
        width: SIZES.width / 1.5,
        height: SIZES.height / 3,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 2,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding
    }
})

export default PostDetailScreen
