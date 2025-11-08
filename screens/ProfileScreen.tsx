import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.info}>Nome: João da Silva</Text>
      <Text style={styles.info}>Empresa: Vivace Corp</Text>
      <Text style={styles.info}>Plano: Premium Executive</Text>

      <Button title="Sair" color="#FF3B30" onPress={() => console.log("Logout")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 8 },
});
