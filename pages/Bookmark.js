import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { theme } from "../colors.js";
import Item from "../components/common/Item";
import SampleImg from "../resource/img/splash_lunchbox.jpg";

// const LIMIT = 15;
const DATA = [
  { id: 1, imgUrl: SampleImg },
  { id: 2, imgUrl: SampleImg },
  { id: 3, imgUrl: SampleImg },
  { id: 4, imgUrl: SampleImg },
  { id: 5, imgUrl: SampleImg },
];

export default function Bookmark() {
  // TODO: DB에서 데이터 조회
  /*
  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch("url")
      .then((res) => res.json())
      .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
      .then(() => {
        setOffset(offset + LIMIT);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("loading error")
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onEndReached = () => {
    if (loading) {
      return;
    } else {
      getData();
    }
  };
  */

  const renderItem = ({ item }) => {
    return <Item imgUrl={item.imgUrl} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        // onEndReached={onEndReached}
        // onEndReachedThreshold={0.8}
        // ListFooterComponent={loading && <ActivityIndicator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: theme.white,
    alignItems: "center",
  },
});
