import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style";
 
const CarItem = () => {
  return (
    <View style={styles.carContanier}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
