import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title = "Vivace App" }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 16,
        backgroundColor: '#4F8EF7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;