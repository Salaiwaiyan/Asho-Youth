import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Share, useWindowDimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import { decode } from "html-entities";
import RenderHtmlComponent from "./RenderHtmlComponent";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useNavigation } from "@react-navigation/native";
import { ShareMethod } from "../Methods/ShareMethod";
import { rewardAd } from "../Methods/rewardAd";

const ListCardComponent = props => {
  const navigation = useNavigation();
  const [data, setData] = useState(props.data);
  const [loading, setLoading] = useState(true);
  const imgUrl = data._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["full"]["source_url"];
  const excerpt = data.excerpt.rendered;
  const title = data.title.rendered;
  const date = data.date_gmt;
  const link = data.link;
  const handleClick = () => {
    navigation.navigate("PostDetailScreen", { url: link });
    rewardAd()
  };
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={handleClick}>
      {loading && (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width="100%" height={250} borderRadius={SIZES.radius} />
        </SkeletonPlaceholder>
      )}
      <Image style={loading ? styles.emptyImg : styles.img}
             onLoadEnd={() => setLoading(false)}
             source={{ uri: imgUrl }} />
      <Text style={styles.title}>{decode(title)}</Text>
      <View style={styles.timeContainer}>
        <Text style={{ ...FONTS.body5, color: COLORS.textSecondary }}>March 17, 2022</Text>
        <TouchableOpacity onPress={() => ShareMethod(link)} activeOpacity={.5} style={{ marginEnd: SIZES.padding - 5 }}>
          <Ionicons color={COLORS.textSecondary} size={25} name="share-social-outline" />
        </TouchableOpacity>
      </View>
      <RenderHtmlComponent html={excerpt} />
      <TouchableOpacity style={styles.readMoreBtn} onPress={handleClick}>
        <View style={styles.readMoreTextContainer}>
          <Foundation color={COLORS.primary} name="indent-more" size={20} />
          <Text style={styles.readMoreText}>Read Detail this post</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.textSecondary,
    marginBottom: SIZES.padding * 2,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.textPrimary,
    paddingVertical: SIZES.padding,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: SIZES.radius,
  },
  emptyImg: {
    display: "none",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  readMoreBtn: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: COLORS.textPrimary,
    borderRadius: SIZES.roundRadius,
    marginVertical: SIZES.padding * 2,
  },
  readMoreTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  readMoreText: {
    ...FONTS.body4,
    color: COLORS.primary,
    marginStart: SIZES.padding,
  },
});

export default ListCardComponent;
