import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import data from '../data/Messages';
import IconButton from '../components/IconButton';

// Define types for the message list
interface Sender {
  id: string;
  sender: {
    name: string;
    avatar: string;
    userId: string;
  };
  content: string;
  timestamp: string;
  status: string;
}

// Define the keys for categories as a union type
type CategoryKeys = 'sales' | 'promotions' | 'orders' | 'reminders';

// Define the type for navigation route parameters
interface RouteParams {
  key: CategoryKeys; // Restrict pageKey to valid category keys
}

interface MessageListProps {
  route: {
    params: RouteParams;
  };
  navigation: any;
}


const MessageList: React.FC<MessageListProps> = ({ route, navigation }) => {
  const pageKey = route.params.key;
  let senders: Sender[] = [];

  if (data.categories[pageKey]) {
    senders = data.categories[pageKey]; // Access safely now
  } else {
    for (const category in data.categories) {
      senders.push(...data.categories[category]);
    }
  }

  return (
    <FlatList
      style={styles.container}
      data={senders}
      keyExtractor={(item) => item.id} // Use a unique key for each item
      renderItem={({ item }) => (
        <View style={styles.box}>
          <View style={styles.boxItemLeft}>
            <Image
              source={{
                uri: item.status === 'unread' 
                  ? 'https://img.icons8.com/ios-filled/50/228BE6/full-stop.png' 
                  : 'https://img.icons8.com/ios-glyphs/30/FFFFFF/full-stop.png',
              }}
              style={{ marginRight: 5, width: 10, height: 10 }}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/material-rounded/24/user-male-circle.png',
              }}
              style={{ marginRight: 5, width: 20, height: 20 }}
            />
            <Text>{item.id}</Text>
          </View>
          <View style={styles.boxItemRight}>
            <Text style={{ marginRight: 5 }}>{item.timestamp}</Text>
            <IconButton
              title=""
              iconUrl="https://img.icons8.com/ios/50/forward--v1.png"
              onPress={() => navigation.navigate('list', { key: item })}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  box: {
    margin: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxItemLeft: {
    margin: 1,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxItemRight: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#0000006B',
  },
});

export default MessageList;
