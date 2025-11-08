import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import { initAppleHealth, initGoogleFit, getDailySteps } from "../services/wearableApi";

export default function HomeScreen() {
    const [steps, setSteps] = useState<{ apple: number; google: number }>({ apple: 0, google: 0 });

    const connectWearables = async () => {

        await initAppleHealth();
        await initGoogleFit();
        const data = await getDailySteps();
        setSteps(data);
    };

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Care Games Plus</Text>
            <Text style={styles.subtitle}>Resumo de Atividade</Text>
            <Button title="Conectar Wearables" onPress={async () => {
                try {
                    setModalVisible(true);
                    await connectWearables();
                } catch (error) {
                    console.error('Failed to connect wearables:', error);
                    // Handle error appropriately
                }
            }} />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <Text style={styles.steps}>Apple Health: {steps.apple} passos</Text>
                    <Text style={styles.steps}>Google Fit: {steps.google} passos</Text>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center" },
    title: { fontSize: 36, fontWeight: "600", marginTop: 20 },
    subtitle: { fontSize: 24, fontWeight: "600", marginBottom: 20, justifyContent: "center" },
    steps: { fontSize: 18, margin: 4, display: 'flex' },
    Button: { marginTop: 20 },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginTop: 150,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
});
