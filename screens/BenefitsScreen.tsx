import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const partners = [
  { id: "1", name: "Spa Diamond", benefit: "20% de desconto em massagens" },
  { id: "2", name: "Academia Vitality", benefit: "Plano corporativo exclusivo" },
  { id: "3", name: "Restaurante Verde Vida", benefit: "10% em refeições saudáveis" },
];

export default function BenefitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benefícios Exclusivos</Text>
      <FlatList
        data={partners}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.partner}>{item.name}</Text>
            <Text style={styles.benefit}>{item.benefit}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 15 },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  partner: { fontSize: 18, fontWeight: "500" },
  benefit: { fontSize: 14, color: "#555" },
});
