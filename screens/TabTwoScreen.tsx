import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Loading from "../components/Loader";
import Product from "../components/Product";
export default function TabOneScreen({ navigation }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://prueba2020.monoku.com/api/productos/?stand=93e270b3-f492-493c-b0d2-96e207d77490"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <View style={styles.container}>
      {products.length == 0 && <Loading />}
      <View>
        <Text style={styles.title}>Felicitaciones!</Text>
        <Text style={styles.copy}>
          Escoge una de nuestras {"\n"} prendas únicas
        </Text>
        <View style={styles.list}>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Atrás</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    color: "#522D8B",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  list: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
  },
  copy: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    width: "90%",
    height: 60,
    backgroundColor: "#EEEFF1",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
