import { View, StyleSheet, Pressable, Text } from "react-native";
import { theme } from "../../colors";
import React from "react";

export const SubmitButton = ({ buttonText, onPress, style }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.submitButton, style]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 35,
  },
  submitButton: {
    backgroundColor: theme.main,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.white,
  },
});

export default SubmitButton;
