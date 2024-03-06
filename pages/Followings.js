import React from "react";
import {FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {theme} from "../colors";
import DefaultImage from '../assets/default_profile.png';

const DEFAULT_PROFILE_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nickname: '따뜻한냉면',
    avatar: DEFAULT_PROFILE_IMAGE,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    nickname: '잘나가는도시락걸',
    avatar: DEFAULT_PROFILE_IMAGE,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    nickname: '방구쟁이백종원',
    avatar: DEFAULT_PROFILE_IMAGE,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    nickname: '불타는고구마',
    avatar: DEFAULT_PROFILE_IMAGE,
  }
];
const Item = ({nickname, avatar}) => {
  return (
    <View style={styles.item}>
      <Image source={{uri: avatar}} style={styles.image}/>
      <View>
        <Text style={styles.nickname}>{nickname}</Text>
      </View>

    </View>
  )
}

export default function Followings() {

  const renderItem = ({item}) => {
    return (
      <Item nickname={item.nickname} avatar={item.avatar}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>팔로워 리스트</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: theme.white,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomColor: theme.grey,
    borderBottomWidth: 0.75,
  },
  headerTxt: {
    fontSize: 20,
  },
  item: {
    padding: 20,
    borderBottomColor: theme.grey,
    borderBottomWidth: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  nickname: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

