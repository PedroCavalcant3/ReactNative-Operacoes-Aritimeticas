import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  function Soma() {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert("O resultado é: " + resultado);
  }
  function Subtrair() {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert("O resultado é: " + resultado);
  }
  function Dividir() {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert("O resultado é: " + resultado);
  }
  function Multiplicar() {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert("O resultado é: " + resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Soma de Valores</Text>
      <TextInput
        style={styles.input}
        keybordType="numeric"
        placeholder="Digite um número..."
        onChangeText={(num1) => setNum1(num1)}
      />
      <TextInput
        style={styles.input2}
        keybordType="numeric"
        placeholder="Digite um número..."
        onChangeText={(num2) => setNum2(num2)}
      />
      <TouchableOpacity style={styles.btn} onPress={Soma}>
        <Text style={styles.tituloBtn}>Somar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={Subtrair}>
        <Text style={styles.tituloBtn}>Subtrair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={Dividir}>
        <Text style={styles.tituloBtn}>Dividir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={Multiplicar}>
        <Text style={styles.tituloBtn}>Multiplicar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  titulo: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  input: {
    backgroundColor: "#add8e6",
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30
  },
  input2: {
    backgroundColor: "#add8e6",
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30
  },
  tituloBtn: {
    fontSize: 20,
    color: "#fff"
  },
  btn: {
    textAlign: "center",
    backgroundColor: "#ff0000",
    margin: 8,
    borderRadius: 24,
    fontSize: 15,
    padding: 15
  }
});
