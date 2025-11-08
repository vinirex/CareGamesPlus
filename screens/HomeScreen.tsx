import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { initAppleHealth, initGoogleFit, getDailySteps } from "../services/wearableApi";

export default function HomeScreen() {
  const [steps, setSteps] = useState<{ apple: number; google: number }>({ apple: 0, google: 0 });

  const connectWearables = async () => {
    await initAppleHealth();
    await initGoogleFit();
    const data = await getDailySteps();
    setSteps(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo de Atividade</Text>
      <Text style={styles.steps}>Apple Health: {steps.apple} passos</Text>
      <Text style={styles.steps}>Google Fit: {steps.google} passos</Text>
      <Button title="Conectar Wearables" onPress={connectWearables} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 20 },
  steps: { fontSize: 18, marginVertical: 4 },
});
