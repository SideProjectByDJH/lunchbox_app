import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView, Platform, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { theme } from "../colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

export default function ProfileUpdate() {
    const [imageUrl, setImageUrl] = useState(null);
    const [libraryPermission, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
    const profilePicture = imageUrl === null ? require('../assets/favicon.png') : { uri: imageUrl };

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
                <Text style={styles.sectionText}>개인 정보 변경</Text>

                <View>
                    <Pressable onPress={uploadImage}>
                        <Image
                            source={profilePicture}
                            style={styles.profilePicture}
                        />
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
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
    mainContainer: {
        flex: 1,
    },
    sectionText: {
        color: theme.main,
        fontSize: 44,
        marginVertical: 20,
    },
    profilePicture: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
})
