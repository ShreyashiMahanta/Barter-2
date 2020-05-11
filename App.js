import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogInScreen from './screens/SignupLoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpLogInScreen/>
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
