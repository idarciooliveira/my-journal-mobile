import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/pages/Login';
import Detail from './src/pages/Detail';

export default function App() {
  return (
    <View style={styles.container}>
      <Detail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
