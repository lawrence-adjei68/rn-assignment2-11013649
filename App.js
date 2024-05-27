import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>My name is <Text style={styles.myName}>Patrick Kushigbor</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#317d45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 24,
  },
  myName : {
    fontWeight: 'bold',
  },
});
