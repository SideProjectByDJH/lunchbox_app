import { StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "../../colors";

const Title = ({ title }) => {
  return <Text style={styles.sectionText}>{title}</Text>;
};

const styles = StyleSheet.create({
  sectionText: {
    color: theme.main,
    fontSize: 44,
    marginVertical: 20,
  },
});

export default Title;
