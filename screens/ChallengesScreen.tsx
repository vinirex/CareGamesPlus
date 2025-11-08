import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function ChallengesScreen() {
  const [challenges, setChallenges] = useState([
    { id: "1", title: "10.000 passos por dia", completed: false },
    { id: "2", title: "Dormir 7h por noite", completed: true },
    { id: "3", title: "Beber 2L de água", completed: false },
  ]);

  const toggleChallenge = (id: string) => {
    setChallenges((prev) =>
      prev.map((c) => (c.id === id ? { ...c, completed: !c.completed } : c))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafios Semanais</Text>
      <FlatList
        data={challenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.challengeText, item.completed && styles.done]}>
              {item.title}
            </Text>
            <Button
              title={item.completed ? "Concluído" : "Marcar"}
              color={item.completed ? "#4CAF50" : "#007AFF"}
              onPress={() => toggleChallenge(item.id)}
            />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
  },
  challengeText: { fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#777" },
});
