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
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={styles.card}>
              <Text style={styles.title}>
                Ministerio do ensino superior desenvolve plataforma eletronica
                para ensino
              </Text>
              <View style={styles.realeaseContainer}>
                <Text style={styles.realeaseDate}>24/08/2020</Text>
                <Text style={styles.category}>Educação</Text>
              </View>
              <Image
                style={styles.thumb}
                source={require('../../assets/thumb.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={styles.card}>
              <Text style={styles.title}>
                Tecnofarma, uma plataforma que promete revolucionar o sistema de
                saúde em Angola
              </Text>
              <View style={styles.realeaseContainer}>
                <Text style={styles.realeaseDate}>24/08/2020</Text>
                <Text style={styles.category}>Tecnologia</Text>
              </View>
              <Image
                style={styles.thumb}
                source={require('../../assets/tecnofarma.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={styles.card}>
              <Text style={styles.title}>
                Governo começa com a preparação para o lançamento do sistema
                governamental que vai melhorar o controle e a distribuição no
                território nacional
              </Text>
              <View style={styles.realeaseContainer}>
                <Text style={styles.realeaseDate}>24/08/2020</Text>
                <Text style={styles.category}>Tecnologia</Text>
              </View>
              <Image
                style={styles.thumb}
                source={require('../../assets/SIGP.png')}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
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
    maxHeight: 'auto',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 5,
    height: 'auto',
    fontWeight: 'bold',
  },
  thumb: {
    width: 340,
    height: 280,
    margin: 5,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  realeaseContainer: {
    flex: 1,
    height: 'auto',
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  realeaseDate: {
    backgroundColor: '#46A3F0',
    fontSize: 14,
    width: 'auto',
    borderRadius: 5,
    padding: 5,
    color: '#FFF',
    textAlign: 'center',
  },
  category: {
    backgroundColor: '#000000',
    fontSize: 14,
    width: 'auto',
    borderRadius: 5,
    marginLeft: 5,
    padding: 5,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Home;
