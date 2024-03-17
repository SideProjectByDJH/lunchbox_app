import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from "../colors";

import { Image } from 'react-native';
import MainImg from '../resource/img/splash_lunchbox.jpg'

export default function Splash({navigation}) {

  return (
    <View style = {styles.mainContainer}>
        <View style={styles.ImgContainer}>
          <Image
            source={MainImg}
            resizeMode={"stretch"}
            style={styles.ImageStyle}
          />
        </View>

        <View style={styles.submitContainer}>
          <View style={styles.buttonContainer}>
             <TouchableOpacity style={styles.submitButton} onPress={() => {
              navigation.navigate('Login')
            }}>
              <Text style={styles.btnText}>로그인</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.buttonContainer}>
             <TouchableOpacity style={styles.submitButton} onPress={() => {
              //alert(`email: ${email}, password: ${password} 로그인 시도.`)
            }}>
              <Text style={styles.btnText}>회원가입</Text>
            </TouchableOpacity>

          </View>


      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  submitButton: {
    backgroundColor: theme.main,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.white,
  },
  buttonContainer: {
    flex:1,
  },
  mainContainer: {
    flex: 1,
  },
  submitContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  ImageStyle : {
    width: '100%',
    height: '100%',
  },
  ImgContainer:{
    flex: 5.5
  }
})
