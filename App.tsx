// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Chat from "./src/screens/Chat";
import Splash from "./src/screens/Splash";

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setInit(true);
    }, 2000);
    return () => {
      clearTimeout(load);
    };
  }, []);

  if (init) {
    return <Chat />;
  } else {
    return <Splash />;
  }
};

export default App;
