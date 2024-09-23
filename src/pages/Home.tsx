import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Section from '../components/Section';

const Home = ({navigation}: any) => {
  const data = [
    {
      id: 1,
      key: "all_messages",
      name: 'All Messages',
      count: 899,
      icon: 'https://img.icons8.com/ios/50/messaging-.png',
    },
    {
      id: 2,
      key: "known_senders",
      name: 'Known Senders',
      count: 50,
      icon: 'https://img.icons8.com/material-rounded/96/user-male-circle.png',
    },
    {
      id: 3,
      key: "unknown_senders",
      name: 'Unknown Senders',
      count: 1,
      icon: 'https://img.icons8.com/material/96/change-user-male.png',
    },
    {
      id: 4,
      key: "unread_messages",
      name: 'Unread Messages',
      count: 899,
      icon: 'https://img.icons8.com/cotton/64/topic-push-notification.png',
    },
  ];
  const filteredMessageItems = [
    {
      id: 1,
      key: "all_transactions",
      name: 'All Transactions',
      count: 830,
      icon: 'https://img.icons8.com/external-inkubators-detailed-outline-inkubators/100/external-transaction-finance-and-accounting-inkubators-detailed-outline-inkubators.png',
    },
    {
      id: 2,
      key: "sales",
      name: 'Finance',
      count: 400,
      icon: 'https://img.icons8.com/ios/100/bank-card-back-side--v1.png',
    },
    {
      id: 3,
      key: "orders",
      name: 'Orders',
      count: 23,
      icon: 'https://img.icons8.com/pastel-glyph/128/box--v3.png',
    },
    {
      id: 4,
      key: "reminders",
      name: 'Reminders',
      count: 13,
      icon: 'https://img.icons8.com/sf-regular/100/property-time.png',
    },
    {
      id: 5,
      name: 'Promotions',
      count: 6,
      icon: 'https://img.icons8.com/ios/100/commercial--v1.png',
    },
  ];
  const junkItems = [
    {id: 1, key: "junk", name: 'Junk', icon: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/100/external-spam-email-interface-anggara-basic-outline-anggara-putra-2.png'},
  ];
  const deletedItems = [
    {
      id: 1,
      key: "deleted",
      name: 'Recently Deleted',
      icon: 'https://img.icons8.com/ios/100/delete--v1.png',
    },
  ];
  return (
    <ScrollView>
      <View style={{backgroundColor: '#eeeeee'}}>
        <View style={{marginTop: 50, marginLeft: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Messages</Text>
        </View>
        <View>
          <Section data={data} navigation={navigation} />
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontWeight: 300, color: 'grey', fontSize: 8}}>
            FILTERED BY <Text style={{fontWeight: 600}}>SMS FILTER</Text>
          </Text>
        </View>
        <View>
          <Section data={filteredMessageItems} navigation={navigation} />
        </View>
        <View>
          <Section data={junkItems} navigation={navigation} />
        </View>
        <View>
          <Section data={deletedItems} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
