import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

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

const formatTimestamp = (timestamp: any) => {
  const now = moment();
  const date = moment(timestamp);

  if (date.isSame(now, 'day')) {
    // If it's today, show time only
    return date.format('h:mm A'); // e.g., "5:09 PM"
  } else if (date.isAfter(now.subtract(7, 'days'))) {
    // If it's within the week, show weekday
    return date.format('dddd'); // e.g., "Sunday"
  } else {
    // If it's more than a week old, show date
    return date.format('DD/MM/YY'); // e.g., "17/02/24"
  }
};

const sorted = (data: any) => {
  return data.sort((a: any, b: any) => {
    return moment(b.timestamp).diff(moment(a.timestamp));
  });
};
const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const MessageList: React.FC<MessageListProps> = ({route, navigation}) => {
  const pageKey = route.params.key;
  let senders: Sender[] = [];

  if (data.categories[pageKey]) {
    senders = sorted(data.categories[pageKey]); // Access safely now
  } else {
    const allData = [];
    for (const category in data.categories) {
      allData.push(...data.categories[category]);
    }

    const sortedData = sorted(allData);
    if (pageKey === 'unread_messages') {
      senders = sortedData.filter((item: any) => item.status === 'unread');
    } else {
      senders = sortedData;
    }
  }

  return (
    <FlatList
      style={styles.container}
      data={senders}
      keyExtractor={item => item.id} // Use a unique key for each item
      renderItem={({item}) => (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('detail', {key: item})}>
            <View style={styles.box}>
              <View style={styles.boxItemLeft}>
                <Image
                  source={{
                    uri:
                      item.status === 'unread'
                        ? 'https://img.icons8.com/ios-filled/50/228BE6/full-stop.png'
                        : 'https://img.icons8.com/ios-glyphs/30/FFFFFF/full-stop.png',
                  }}
                  style={{marginRight: 5, width: 10, height: 10}}
                />
                <Image
                  source={{
                    uri: 'https://img.icons8.com/material-rounded/24/user-male-circle.png',
                  }}
                  style={{marginRight: 5, width: 20, height: 20}}
                />
                <Text>{item.id}</Text>
              </View>
              <View style={styles.boxItemRight}>
                <Text style={{marginRight: 5}}>
                  {formatTimestamp(item.timestamp)}
                </Text>
                <IconButton
                  title=""
                  iconUrl="https://img.icons8.com/ios/50/forward--v1.png"
                  onPress={() => navigation.navigate('detail', {key: item})}
                />
              </View>
            </View>
            <View style={{marginLeft: 50, marginEnd: 20}}>
              <Text>
                {item.content.length > 44
                  ? `${item.content.slice(0, 44)}...`
                  : item.content}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    backgroundColor: 'white',
    // borderRadius: 15,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxItemLeft: {
    margin: 1,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxItemRight: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#0000006B',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '90%',
    marginLeft: 50,
    marginTop: 10,
  },
});

export default MessageList;
