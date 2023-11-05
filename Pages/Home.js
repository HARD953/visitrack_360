import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get("screen");

export default function Home({ navigation }) {
  const images = [
    require("../assets/Images/Ora.jpg"),
    require("../assets/Images/oranges.jpeg"),
    require("../assets/Images/téléchargement.jpg"),
    // Ajoutez d'autres images ici
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <Image
          style={styles.carouselImage}
          source={item}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Votre Header</Text>
        </View>
        <View style={styles.imageView}>
          <Carousel
            data={images}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width}
            layout={'default'}
            loop
            autoplay={true}
            autoplayInterval={5000}
          />
        </View>
        <View style={styles.statistics}>
          <Text style={styles.statisticsText}>Statistiques de collecte de supports</Text>
          <Text style={styles.statisticsText}>Statistiques de collecte de supports</Text>
          {/* Ajoutez vos composants de statistiques ici */}
        </View>
        <View style={styles.row}>
          <View style={[styles.rightView, styles.spaceBetween]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomPage1')}
              style={[styles.box, styles.shadow, styles.boxRed]}>
              <Ionicons name="ios-albums" size={60} color="white" />
              <Text style={styles.boxText}>Affiche</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilePage')}
              style={[styles.box, styles.shadow, styles.boxBlue]}>
              <Ionicons name="ios-person" size={60} color="white" />
              <Text style={styles.boxText}>Profil</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rightView, styles.spaceBetween]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomPage2')}
              style={[styles.box, styles.shadow, styles.boxYellow]}>
              <Ionicons name="ios-car" size={60} color="white" />
              <Text style={styles.boxText}>Parking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilePage')}
              style={[styles.box, styles.shadow, styles.boxGreen]}>
              <Ionicons name="ios-archive" size={60} color="white" />
              <Text style={styles.boxText}>Historique</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Ajout d'un espace au bas
  },
  header: {
    backgroundColor: '#236198',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    fontSize: FontSize.large,
    fontWeight:'500',
    color: 'white',
  },
  imageView: {
    height: 300,
  },
  carouselContainer: {
    flex: 1,
  },
  carouselImage: {
    height: '100%',
    width: '100%',
  },
  statistics: {
    margin: 20, // Ajout d'un espace en bas
  },
  statisticsText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: '#586041',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 180,
    paddingHorizontal: 10,
    marginTop:'15%'
  },
  rightView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:'2%'
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  box: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxRed: {
    backgroundColor: '#055093',
  },
  boxBlue: {
    backgroundColor: '#57A3E7',
  },
  boxYellow: {
    backgroundColor: '#FFD700',
  },
  boxGreen: {
    backgroundColor: '#937B05',
  },
  boxText: {
    color: 'white',
    fontWeight:'500',
    fontSize: FontSize.large,
    marginTop: 5,
  },
});
