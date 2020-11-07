import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Product = ({ id, image, nombre, handleOnClick }) => {
  return (
    <View
      key={id}
      style={[styles.container]}
      onTouchStart={(e) => handleOnClick(e, id)}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    textTransform: "capitalize",
    margin: 10,
    textAlign: "center",
  },
});

export default Product;
