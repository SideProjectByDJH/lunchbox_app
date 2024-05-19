import { View, StyleSheet, Image, Pressable } from "react-native";
import { theme } from "../../colors";
import React from "react";

const Item = ({ imgUrl }) => {

  // TODO: post 조회 url 연결
  const viewDetailPost = async () => {
    return null;
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={viewDetailPost}>
        <Image source={imgUrl} style={styles.item} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.grey,
    padding: 0,
    marginVertical: 10,
    marginHorizontal: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  id: {
    color: theme.black,
    fontSize: 14,
  },
  item: {
    width: 100,
    height: 100,
  },
});

export default Item;
