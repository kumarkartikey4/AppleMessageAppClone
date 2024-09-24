import React from 'react';
import {Image, FlatList, StyleSheet, View, Text} from 'react-native';
import IconButton from './IconButton';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const Section = ({navigation, data}: any) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => (
        <View style={styles.box}>
          <View style={styles.boxItemLeft}>
            <Image
              source={{uri: item.icon}}
              style={{
                marginRight: 10,
                width: 20,
                height: 20,
                marginHorizontal: 2,
              }}
            />
            <Text style={{fontSize: 14}}>{item.name}</Text>
          </View>
          <View style={styles.boxItemRight}>
            <Text style={{marginRight: 5}}>{item.count}</Text>
            <IconButton
              title=""
              iconUrl="https://img.icons8.com/ios/50/forward--v1.png"
              onPress={() =>
                navigation.navigate('list', {key: item.key})
              }></IconButton>
          </View>
        </View>
      )}
      ItemSeparatorComponent={ItemSeparator}
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
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'lightblue',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxItemLeft: {
    margin: 1,
    // paddingLeft: 10,
    paddingRight: 10,
    // padding: 10,
    width: '100%',
    height: 30,
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'grey',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxItemRight: {
    // margin: 1,
    // paddingLeft: 10,
    paddingRight: 10,
    // padding: 10,
    // width: '100%',
    height: 30,
    flex: 0,
    flexDirection: 'row',
    // backgroundColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '90%',
    marginLeft: 45
},
});

export default Section;
