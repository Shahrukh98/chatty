import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

interface ChatboxProps {
   id: string | number;
   name: string;
   phone: string;
   display: string;
}

const ChatBox: React.FC<ChatboxProps> = (chat) => {
   return (
      <View>
         <View>
            <Image source={{ uri: chat.display }} />
         </View>
         <View>
            <Text>{chat.name}</Text>
            <Text>{chat.phone}</Text>
         </View>
      </View>
   );
};

const ChatScreen = () => {
   const navigation = useNavigation();
   var chats = [
      {
         id: 12141,
         name: 'Zahan',
         phone: '+923164308443',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 14511,
         name: 'Subhan',
         phone: '+923169741890',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 15135,
         name: 'Usman',
         phone: '+923164323453',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 34634,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 12312,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 34645634,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 3436354634,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 346345634,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 3462345534,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
      {
         id: 3447634,
         name: 'Wasif',
         phone: '+923164302142',
         display: 'https://placeimg.com/140/140/any',
      },
   ];

   return (
      <View>
         <View>
            <ScrollView style={{ marginBottom: 65 }}>
               {chats.map((chatboxProps, k) => {
                  return (
                     <View>
                        <TouchableOpacity
                           key={k}
                           onPress={() =>
                              navigation.navigate('Chat', chatboxProps)
                           }>
                           <ChatBox {...chatboxProps} />
                        </TouchableOpacity>
                        <View />
                     </View>
                  );
               })}
            </ScrollView>
         </View>
      </View>
   );
};

export default ChatScreen;
