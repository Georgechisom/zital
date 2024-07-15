import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './Framework/Screens/Login';
import Signup from './Framework/Screens/Signup';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}> 
    <View style={{ flex: 1 }}>
      <Signup />
    </View>
  </SafeAreaView>
  );
}


// <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   <Login />
    // </View>
    // {/* SafeAreaView is for ios */}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
