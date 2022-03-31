import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS} from "../../Constants/theme";
import WebView from "react-native-webview";
import LoadingComponent from "../../Components/LoadingComponent";
import DetailHeaderBarComponent from "../../Components/DetailHeaderBarComponent";
import WaitingComponent from "../../Components/WaitingComponent";

const PostDetailScreen = props => {
    const [loading, setLoading] = useState(true)
    const link = props.route.params.url
    return (
        <View style={styles.container}>
            <DetailHeaderBarComponent link={link}/>
            <WaitingComponent/>
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
    }
})

export default PostDetailScreen
