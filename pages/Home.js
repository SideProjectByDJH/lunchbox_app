import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";
import { theme } from "../colors";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SampleImg from '../resource/img/splash_lunchbox.jpg';


const DATA = [
  {
    id: '0',
    nickname: '방구석 백종원',
    date: '2024-04-01',
    loveitCount: '1,234',
    saveCount: '345',
    menu: [
      {id:0, menuName: '닭가슴살 조림'},
      {id:1, menuName: '브로콜리 찜'},
      {id:2, menuName: '계란말이'}
    ],
     ingredients: [
      {id:1, ingredientName: '닭가슴살'},
      {id:2, ingredientName: '브로콜리'},
      {id:3, ingredientName: '계란'},
      {id:4, ingredientName: '간장'},

    ],
  },
  {
    id: '1',
    nickname: '짜장면 요리사',
    date: '2024-04-23',
    loveitCount: '2,024',
    saveCount: '777',
    menu: [
      {id:3, menuName: '닭가슴살 짜장면'},
      {id:4, menuName: '야채튀김'},
      {id:5, menuName: '장조림'}
    ],
     ingredients: [
      {id:5, ingredientName: '닭가슴살'},
      {id:6, ingredientName: '짜파게티'},
      {id:7, ingredientName: '샐러리'},
      {id:8, ingredientName: '튀김가루'},
      {id:9, ingredientName: '돼지고기'},

    ],
  },

]
// const menuList = DATA.map((ele, i) => {
//       return (
//          <TouchableOpacity style={styles.tags} key={i}>
//           <Text>{ele.menu}</Text>
//         </TouchableOpacity>
//       );
// });




const postItem = ({ item }) => (

  <View style={styles.unitContainer}>
    <View style={styles.nickNameContainer}>
      <Image source={SampleImg} style={styles.userImage}/>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </View>
    <View style={styles.imgContainer}>
      <Image source={SampleImg} style={styles.lunchImage}/>



    </View>
    <View style={styles.imgInfoContainer}>
        <View >
          <Text style={styles.dateText}>{item.date}</Text>
        </View>

        <View style={styles.imgDetailInfoContainer}>
          <View style={styles.imgInfoComponent}>
            <Icon name="bookmark"/>
            <Text style={{marginLeft:5}}>{item.saveCount}</Text>
          </View>
          <View style={styles.imgInfoComponent}>
            <Icon name="heart"/>
            <Text style={{marginLeft:5}}>{item.loveitCount}</Text>
          </View>
        </View>

      </View>
    <View style={styles.menuContainer}>
      <Text style={styles.nickname}>메뉴</Text>
        <View style={styles.tagsContainer}>
          {
            item.menu.map(subMenu => {
              const colorNum = subMenu.menuName.length % 4;
              let colorVar = theme.tagA;
              if(colorNum == 0) {
                colorVar = theme.tagB;
              } else if(colorNum == 1){
                colorVar = theme.tagC;
              }else if(colorNum == 2){
                colorVar = theme.tagD;
              }

              return (
                <TouchableOpacity style={[styles.tags, {backgroundColor: colorVar}]}  key={subMenu.id}>
                  <Text>{subMenu.menuName}</Text>
                </TouchableOpacity>

              );
            })
          }

        </View>
    </View>
    <View style={styles.ingredientsContainer}>
      <Text style={styles.nickname}>재료</Text>
        <View style={styles.tagsContainer}>
           {
            item.ingredients.map(ingredientItem => {
              const colorNum = ingredientItem.ingredientName.length % 4;
              let colorVar = theme.tagA;
              if(colorNum == 0) {
                colorVar = theme.tagB;
              } else if(colorNum == 1){
                colorVar = theme.tagC;
              }else if(colorNum == 2){
                colorVar = theme.tagD;
              }
              return (
                <TouchableOpacity style={[styles.tags, {backgroundColor: colorVar}]} key={ingredientItem.id}>
                  <Text>{ingredientItem.ingredientName}</Text>
                </TouchableOpacity>

              );
            })
          }


        </View>
    </View>

  </View>

);


export default function Home() {
  return (

  <View style={styles.container}>
    <FlatList
        data={DATA}
        renderItem={postItem}
        keyExtractor={item => item.id}
      />

  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  unitContainer: {
    paddingHorizontal: 10,
    marginTop : 20,
    marginBottom : 10,
  },

  nickNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  imgContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  imgInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgDetailInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuContainer: {
    padding:10,
    marginBottom:10,
  },
  ingredientsContainer: {
    padding:10,
    marginBottom:10,
  },

  tagsContainer: {
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postCountInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },


  userImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  nickname: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },

  lunchImage: {
    width: 350,
    height: 350,
  },
  imgInfoComponent: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 10,
    marginLeft: 10,
  },

  tags: {
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    marginRight: 5,
  },
  dateText: {
    textAlign:'left',
    marginRight: 30,
  },

  ///////////////////////

  navigation: {
    justifyContent: "space-between",
    marginTop: 60,
  },
  submitButton: {
    backgroundColor: theme.main,
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  submitJoinButton: {
    backgroundColor: theme.main,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  sectionText: {
    color: theme.main,
    fontSize: 44,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.white,
  },
  guidanceText: {
    fontSize: 14,
    color: theme.black,
    marginTop: 7,
  },
  textInput: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 5,
    padding: 5,
    flex: 2,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 5,
    padding: 5,
  },
  inputButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 35,
  },
  mainContainer: {
    flex: 1,
  },
  passwordMissingTouchable: {
    alignItems: "center",
  },
});
