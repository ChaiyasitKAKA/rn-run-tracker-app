import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Run() {
    return (
        <View style={styles.container}>
            <Text>Run</Text>
            <TouchableOpacity style={styles.floatingBtn} onPress={() => router.push('/add')}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    floatingBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 60,
        right: 30,
        backgroundColor: '#063197',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    container: {
        flex: 1,

    },
})