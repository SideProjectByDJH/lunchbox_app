import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { theme } from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import SubmitButton from "../components/common/SubmitButton";

const PASSWORD_INDEX = [
  "current password",
  "new password",
  "new password check",
];

export default function ProfileUpdate() {
  const [imageUrl, setImageUrl] = useState(null);
  const [libraryPermission, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const profilePicture =
    imageUrl === null ? require("../assets/favicon.png") : { uri: imageUrl };

  const [nickname, setNickname] = useState("기존 닉네임");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [isCheckNewPasswordVisible, setCheckNewPasswordVisible] =
    useState(false);

  const toggleShowPassword = (index) => {
    if (index === PASSWORD_INDEX[0]) {
      setCurrentPasswordVisible(!isCurrentPasswordVisible);
    } else if (index === PASSWORD_INDEX[1]) {
      setNewPasswordVisible(!isNewPasswordVisible);
    } else if (index === PASSWORD_INDEX[2]) {
      setCheckNewPasswordVisible(!isCheckNewPasswordVisible);
    }
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
        <Text style={styles.sectionText}>개인 정보 변경</Text>

        <View style={styles.profilePictureContainer}>
          <Pressable onPress={uploadImage}>
            <Image source={profilePicture} style={styles.profilePicture} />
          </Pressable>
        </View>

        <Text>닉네임</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="기존 닉네임"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>

        <Text>현재 비밀번호</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="현재 비밀번호를 입력하세요."
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry={!isCurrentPasswordVisible}
          />
          <MaterialCommunityIcons
            name={isCurrentPasswordVisible ? "eye-off" : "eye"}
            style={styles.showPasswordIcon}
            onPress={() => toggleShowPassword(PASSWORD_INDEX[0])}
          />
        </View>

        <Text>새 비밀번호</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="변경할 비밀번호를 입력하세요."
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!isNewPasswordVisible}
          />
          <MaterialCommunityIcons
            name={isNewPasswordVisible ? "eye-off" : "eye"}
            style={styles.showPasswordIcon}
            onPress={() => toggleShowPassword(PASSWORD_INDEX[1])}
          />
        </View>

        <Text>새 비밀번호 확인</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="변경할 비밀번호를 다시 입력하세요."
            value={checkNewPassword}
            onChangeText={setCheckNewPassword}
            secureTextEntry={!isCheckNewPasswordVisible}
          />
          <MaterialCommunityIcons
            name={isCheckNewPasswordVisible ? "eye-off" : "eye"}
            style={styles.showPasswordIcon}
            onPress={() => toggleShowPassword(PASSWORD_INDEX[2])}
          />
        </View>
      </View>

      <SubmitButton
        buttonText="변경"
        onPress={() => {
          alert(`nickname: ${nickname}, password: ${newPassword} 변경 시도.`);
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  navigation: {
    justifyContent: "space-between",
    marginTop: 60,
  },
  mainContainer: {
    flex: 1,
  },
  sectionText: {
    color: theme.main,
    fontSize: 44,
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 10,
    padding: 5,
  },
  textInput: {
    padding: 10,
    flex: 1,
  },
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  showPasswordIcon: {
    paddingHorizontal: 10,
    color: "#aaa",
    fontSize: 24,
  },
});
