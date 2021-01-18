import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/navigators/main.stack';

const App = () => {
   return (
      <>
         <NavigationContainer>
            <Main />
         </NavigationContainer>
      </>
   );
};

export default App;
