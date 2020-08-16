import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Detail = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>
          As melhores Linguagens de programação para se começar em 2020 e as
          ferramentas de trabalho que visam melhoram a sua vida profissional
        </Text>
        <Text style={styles.releaseDate}>Publicada 15/10/2020</Text>
        <Image
          style={styles.thumb}
          source={require('../../assets/thumb.jpg')}
        />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    margin: 5,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 12,
    margin: 5,
    color: '#47A5EF',
  },
  content: {
    fontSize: 16,
    margin: 5,
    textAlign: 'justify',
  },
  thumb: {
    width: 400,
    height: 210,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default Detail;
