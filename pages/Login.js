import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../colors";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  // State variable to hold the password
  const [password, setPassword] = useState('');

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto"/>
      <View style={styles.navigation}>
        <View
          style={{alignItems: 'flex-start'}}
        >
          <TouchableOpacity
            onPress={() => {
              alert("뒤로가기 구현 필요.")
            }}
          >
            <MaterialCommunityIcons name="arrow-left-top" size={20} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>로그인</Text>
        <Text style={styles.guidanceText}>이메일</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'이메일을 입력해주세요'}
            style={styles.textInput}
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.guidanceText}>비밀번호</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'비밀번호를 입력해주세요'}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            keyboardType={'default'}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
        <View
          style={styles.passwordMissingTouchable}
        >
          <TouchableOpacity
            onPress={() => {
              alert("비밀번호를 잊어버렸어요")
            }}
          >
            <Text
              style={styles.passwordMissingText}
            >비밀번호를 잊어버렸어요</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          alert(`email: ${email}, password: ${password} 로그인 시도.`)
        }}>
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  navigation: {
    justifyContent: 'space-between',
    marginTop: 60,
  },
  submitButton: {
    backgroundColor: theme.main,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionText: {
    color: theme.main,
    fontSize: 44,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.white,
  },
  guidanceText: {
    fontSize: 14,
    color: theme.black,
  },
  textInput: {
    padding: 10,
    flex: 1,
  },
  passwordMissingText: {
    color: theme.grey,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 10,
    padding: 5,
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
    alignItems: 'center',
  }
})
