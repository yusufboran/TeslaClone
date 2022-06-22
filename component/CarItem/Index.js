import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style";
import StyleButton from "../StyledButton";

 
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
      <StyleButton 
      type="primary" 
      content={"Custom Order"}
      onPress={()=> console.log("Custom Order")
      } />
       <StyleButton 
      type="secondary" 
      content={"Existing Inventory"}
      onPress={()=> console.log("Existing Inventory")
      } />
     
    </View>
  );
};

export default CarItem;
