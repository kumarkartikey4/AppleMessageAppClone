import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
    <Text style={styles.loadingText}></Text>
      <ActivityIndicator size="large" color="#090f73" />
      {/* <Text style={styles.loadingText}>Loading...</Text> */}
      <View style={{alignItems: 'center'}}>
        <Image
            source={require('../../assets/icons/blue-white.png')}
            style={styles.loadingImage}
            resizeMode="contain"
        />
        <Text style={styles.loadingText}>Powered by Code Container Stack</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingImage: {
    width: 50, 
    height: 50, 
    marginBottom: 10,
  },
});

export default LoadingScreen;
