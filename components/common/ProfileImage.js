import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

const ProfileImage = ({ setImageUrl, profilePicture }) => {
  const [libraryPermission, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!libraryPermission?.granted) {
      const permission = await requestLibraryPermission();
      if (!permission.granted) {
        return null;
      }
    }

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
    <View style={styles.profilePictureContainer}>
      <Pressable onPress={uploadImage}>
        <Image source={profilePicture} style={styles.profilePicture} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProfileImage;
