import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import SubmitButton from "../components/common/SubmitButton";
import InputBox from "../components/common/InputBox";
import Title from "../components/common/Title";

export default function ProfileUpdate() {
  const [imageUrl, setImageUrl] = useState(null);
  const [libraryPermission, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
  const profilePicture = imageUrl === null ? require("../assets/favicon.png") : { uri: imageUrl };

  const [nickname, setNickname] = useState("기존 닉네임");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [isCheckNewPasswordVisible, setCheckNewPasswordVisible] = useState(false);

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
        <Title title="개인 정보 변경" />

        <View style={styles.profilePictureContainer}>
          <Pressable onPress={uploadImage}>
            <Image source={profilePicture} style={styles.profilePicture} />
          </Pressable>
        </View>

        <InputBox
          title="닉네임"
          placeholder="기존 닉네임"
          value={nickname}
          onChangeText={setNickname}
          isPassword={false}
        />
        <InputBox
          title="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요."
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={!isCurrentPasswordVisible}
          isPassword={true}
          isPasswordVisible={isCurrentPasswordVisible}
          setPasswordVisible={setCurrentPasswordVisible}
        />
        <InputBox
          title="새 비밀번호"
          placeholder="변경할 비밀번호를 입력하세요."
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!isNewPasswordVisible}
          isPassword={true}
          isPasswordVisible={isNewPasswordVisible}
          setPasswordVisible={setNewPasswordVisible}
        />
        <InputBox
          title="새 비밀번호 확인"
          placeholder="변경할 비밀번호를 다시 입력하세요."
          value={checkNewPassword}
          onChangeText={setCheckNewPassword}
          secureTextEntry={!isCheckNewPasswordVisible}
          isPassword={true}
          isPasswordVisible={isCheckNewPasswordVisible}
          setPasswordVisible={setCheckNewPasswordVisible}
        />
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
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});
