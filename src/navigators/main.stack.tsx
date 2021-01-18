import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../screens/Chat';
import ChatList from '../screens/ChatList';

const Stack = createStackNavigator();

const Main = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
               fontWeight: 'bold',
            },
         }}>
         <Stack.Screen name='Chats' component={ChatList} />
         <Stack.Screen
            name='Chat'
            component={Chat}
            options={({ route }: any) => {
               return {
                  title: route.params?.name,
               };
            }}
         />
      </Stack.Navigator>
   );
};

export default Main;
