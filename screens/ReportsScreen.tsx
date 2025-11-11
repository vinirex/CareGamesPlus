import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rankings Corporativos</Text>
      <Text style={styles.text}>
        Aqui você verá insights agregados de bem-estar e produtividade da empresa.
      </Text>
      <Text style={styles.placeholder}>📈 Vamos ver quem são os Top Health do Mês...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 10 },
  text: { fontSize: 16, color: "#555", marginBottom: 20 },
  placeholder: { fontSize: 18, color: "#999", textAlign: "center" },
});
