import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../Constants/theme";
import axios from "axios";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import ListCardComponent from "../../Components/ListCardComponent";
import LoadingComponent from "../../Components/LoadingComponent";
import BannerAdComponent from "../../Components/BannerAdComponent";

const ArticleScreen = props => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMoreData, setLoadMoreData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchData = () => {
    axios.get(`https://app.ashofund.com/wp-json/wp/v2/posts?page=${page}&_embed`)
      .then(async function(response) {
        setData([...data, ...response.data]);
        setLoading(false);
      })
      .catch(function(error) {
        setLoadMoreData(false);
      });
  };
  const loadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setLoadMoreData(true);
    setPage(1);
    setData([]);
    fetchData();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.container}>
      <HeaderBarComponent text="Articles" />
      <View style={styles.bannerAD}>
        <BannerAdComponent />
      </View>
      {
        loading ? (
          <LoadingComponent />
        ) : (
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={loadMore}
            ListFooterComponent={loadMoreData ? (
              <ActivityIndicator style={{ marginBottom: 5 }} color={COLORS.primary} size={20} />) : null}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            } showsVerticalScrollIndicator={false} data={data} keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <ListCardComponent data={item} />
              );
            }} />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
  bannerAD: {
    position: "absolute",
    bottom: "1%",
    left: "10%",
    zIndex: 1000,
  },

});

export default ArticleScreen;
