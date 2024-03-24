import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../colors";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function Join() {
  const [imageUrl, setImageUrl] = useState(null);
  const [libraryPermission, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const profilePicture =
    imageUrl === null ? require("../assets/favicon.png") : { uri: imageUrl };

  const [email, setEmail] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [nickname, setNickname] = useState("");

  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const uploadImage = async () => {
    if (!libraryPermission?.granted) {
      const permission = await requestLibraryPermission();
      if (!permission.granted) {
        return null;
      }
    }

    // upload image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      <View style={styles.navigation}>
        <View style={{ alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => {
              alert("뒤로가기 구현 필요.");
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left-top"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>회원가입</Text>

        <View style={styles.profilePictureContainer}>
          <TouchableOpacity onPress={uploadImage}>
            <Image source={profilePicture} style={styles.profilePicture} />
          </TouchableOpacity>
        </View>

        <Text style={styles.guidanceText}>이메일</Text>
        <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"jane@example.com"}
              style={styles.textInput}
              keyboardType={"email-address"}
              //onChangeText={} : 인증 여부 초기화 필요
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              Alert.alert(
                `인증번호를 발송하시겠습니까?\n유효시간(10분)이내에 입력해주세요.`,
                "",
                [
                  {
                    text: "취소",
                    style: "cancel",
                  },
                  {
                    text: "확인",
                    //onPress: () => { emailVerification(email) }
                  },
                ]
              );
            }}
          >
            <Text style={styles.btnText}>인증번호</Text>
            <Text style={styles.btnText}>전송</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"인증번호"}
              style={styles.textInput}
              keyboardType={"number-pad"}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              alert(`인증번호 확인`);
            }}
          >
            <Text style={styles.btnText}>인증번호</Text>
            <Text style={styles.btnText}>확인</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.guidanceText}>비밀번호</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder={"비밀번호를 입력해주세요"}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            keyboardType={"default"}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>

        <Text style={styles.guidanceText}>비밀번호 확인</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder={"비밀번호를 입력해주세요"}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            keyboardType={"default"}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>

        <Text style={styles.guidanceText}>닉네임</Text>
        <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={"방구석 백종원"}
              style={styles.textInput}
              keyboardType={"default"}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitJoinButton}
          onPress={() => {
            alert(`회원가입.`);
          }}
        >
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
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
