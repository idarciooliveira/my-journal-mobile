import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

const Detail = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleAuthorInfo() {
    setModalVisible(true);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Governo começa com a preparação para o lançamento do sistema
          governamental que vai melhorar o controle e a distribuição no
          território nacional
        </Text>
        <View style={styles.realeaseContainer}>
          <Text style={styles.realeaseDate}>Publicada 24/08/2020</Text>
          <Text style={styles.category}>Tecnologia</Text>
        </View>
      </View>
      <Image style={styles.thumb} source={require('../../assets/SIGP.png')} />
      <View>
        <Text style={styles.content}>
          Se por algum motivo não conseguiu finalizar a sua candidatura para o
          Seedstars Luanda 2020, temos boas notícias para si, a organização do
          evento decidiu permitir inscrições até ao final do dia (15 de Agosto).
          SEEDSTARS WORLD LUANDA 2020 – ONLINE Inscrições: Startups de todo o
          país serão convidadas a participar da competição deste ano. Com o
          evento online, todas as startups têm acesso, inclusive as que estão
          fora de Luanda, gerando mais inclusão. Treinamento: As startups que
          atenderem aos critérios básicos de seleção terão acesso a módulos de
          treinamento sob demanda através da Seedstars Academy Online.
          Entrevistas de seleção: Os analistas selecionarão as 5 melhores
          startups dentre as que passaram pela Online Seedstars Academy e
          realizarão entrevistas de seleção para encontrar o vencedor que
          representará Angola na competição regional. Inscrições Fecho para
          inscrições: 15 de agosto de 2020 às 23:59 Como inscrever-se? Siga o
          link e Inscreva-se para o Seedstars Luanda 2020 | O evento será online
          e são aceites startups de todo o país… O que está em jogo? Os
          inscritos terão a chance de competir para fazer parte das dez
          principais startups selecionadas para um investimento no programa de
          crescimento avaliado em 50 mil US$ e concorrer ao prêmio Global 500
          mil US$ em investimentos!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => handleAuthorInfo()}
      >
        <Image
          style={styles.authorImage}
          source={require('../../assets/profile.jpg')}
        />
        <Text style={styles.footerText}>Idarcio Oliveira</Text>
      </TouchableOpacity>
      <Modal
        animationType='none'
        transparent={true}
        presentationStyle='overFullScreen'
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image
              style={styles.modalAuthorImage}
              source={require('../../assets/profile.jpg')}
            />
            <Text style={styles.modalAuthorName}>Idarcio Oliveira</Text>
            <Text style={styles.modalAuthorDescription}>
              Se por algum motivo não conseguiu finalizar a sua candidatura para
              o Seedstars Luanda 2020, temos boas notícias para si, a
              organização do evento decidiu permitir inscrições até ao final do
              dia (15 de Agosto). SEEDSTARS WORLD LUANDA 2020 – ONLINE
              Inscrições: Startups de todo o país serão convidadas a participar
              da competição deste ano. Com o evento online, todas as startups
              têm acesso
            </Text>
            <Icon
              name='x-circle'
              onPress={() => {
                setModalVisible(false);
              }}
              size={40}
              color={'#46A3F0'}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
  },
  header: {
    margin: 5,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 5,
    height: 'auto',
    fontWeight: 'bold',
  },
  thumb: {
    width: 400,
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
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  realeaseDate: {
    fontSize: 18,
    width: 'auto',
    borderRadius: 5,
    padding: 5,
    color: '#46A3F0',
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
    marginTop: 5,
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify',
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
  footer: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: 'grey',
  },
  authorImage: {
    resizeMode: 'center',
    borderRadius: 5,
    width: 40,
    height: 40,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 'auto',
    width: 300,
    margin: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalAuthorImage: {
    resizeMode: 'center',
    borderRadius: 5,
    height: 140,
  },
  modalAuthorName: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
  modalAuthorDescription: {
    fontSize: 16,
    padding: 5,
    margin: 5,
    textAlign: 'justify',
    marginBottom: 5,
  },
});

export default Detail;
