import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.card}>
            <Text style={styles.title}>
              As melhores Linguagens de programação para se começar em 2020
            </Text>
            <Image
              style={styles.thumb}
              source={require('../../assets/thumb.jpg')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.card}>
            <Text style={styles.title}>
              As melhores Linguagens de programação para se começar em 2020
            </Text>
            <Image
              style={styles.thumb}
              source={require('../../assets/thumb.jpg')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={styles.card}>
            <Text style={styles.title}>
              As melhores Linguagens de programação para se começar em 2020
            </Text>
            <Image
              style={styles.thumb}
              source={require('../../assets/thumb.jpg')}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#E4E4E4',
  },
  card: {
    width: 350,
    height: 300,
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 16,
    margin: 5,
    padding: 10,
    maxHeight: 60,
    fontWeight: 'bold',
  },
  thumb: {
    width: 340,
    height: 210,
    margin: 5,
    alignSelf: 'center',
  },
});

export default Home;
