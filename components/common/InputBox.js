import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { theme } from "../../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const InputBox = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  isPassword,
  isPasswordVisible,
  setPasswordVisible,
}) => {
  const toggleShowPassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {isPassword ? (
          <MaterialCommunityIcons
            name={isPasswordVisible ? "eye-off" : "eye"}
            style={styles.showPasswordIcon}
            onPress={toggleShowPassword}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  showPasswordIcon: {
    paddingHorizontal: 10,
    color: "#aaa",
    fontSize: 24,
  },
});

export default InputBox;
