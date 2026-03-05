import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const run = require('../assets/images/running-man.png')
export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/run');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={run} style={styles.image} />
      <Text style={styles.title}>Run tracker</Text>
      <Text style={styles.subtitle}>วิ่งเพื่อพ่อ</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    marginTop: 10,
  },
});