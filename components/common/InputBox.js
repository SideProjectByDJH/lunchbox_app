import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { theme } from "../../colors";

export const InputBox = ({ title, placeholder, value, onChangeText }) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
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
});

export default InputBox;
