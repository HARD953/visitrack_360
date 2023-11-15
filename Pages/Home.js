import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text, TouchableOpacity, ScrollView, Button,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get("screen");

export default function Home({ navigation }) {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(true);

  const toggleMapVisibility = async () => {
    if (currentLocation) {
      setMapVisible(!mapVisible);
    } else {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
          setMapVisible(true);
        }
      } catch (error) {
        console.error('Error getting location', error);
      }
    }
  };

  const images = [
    // require("../assets/Images/Ora.jpg"),
    require("../assets/Images/oranges.jpeg"),
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
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Votre Header</Text>
        </View> */}
        <View style={styles.mapContainer}>
        {mapVisible ? (
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
          ) : (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: currentLocation.coords.latitude,
                  longitude: currentLocation.coords.longitude,
                }}
                title="You are here"
              />
            </MapView>
          )}
        </View>
        <View style={styles.statisticsContainer}>
      <View style={styles.statistics}>
        <Text style={styles.statisticsText}>Statistiques</Text>
        <Text style={styles.statisticsText}>Statistiques</Text>
        {/* Add your statistics components here */}
      </View>
    </View>
        <View style={styles.row}>
  <View style={[styles.rightView, styles.spaceBetween]}>
    <TouchableOpacity
      onPress={() => navigation.navigate('HomPage1')}
      style={[styles.box, styles.boxRed]}>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-albums" size={60} color="white" />
      </View>
      <Text style={styles.boxText}>Affiche</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('HomPage1')}
      style={[styles.box, styles.boxBlue]}>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-person" size={60} color="white" />
      </View>
      <Text style={styles.boxText}>Profil</Text>
    </TouchableOpacity>
  </View>
  <View style={[styles.rightView, styles.spaceBetween]}>
    <TouchableOpacity
      onPress={() => navigation.navigate('HomPage1')}
      style={[styles.box, styles.boxYellow]}>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-car" size={60} color="white" />
      </View>
      <Text style={styles.boxText}>Parking</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('HomPage1')}
      style={[styles.box, styles.boxGreen]}>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-archive" size={60} color="white" />
      </View>
      <Text style={styles.boxText}>Historique</Text>
    </TouchableOpacity>
  </View>
</View>
        <View>
          <View style={[styles.rightView, styles.spaceBetween]}>
            <Button title="Show My Location" onPress={toggleMapVisibility} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EBF2F6'
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#236198',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    fontSize: FontSize.large,
    fontWeight: '500',
    color: 'white',
  },
  mapContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20, // Ajoutez un espacement horizontal si nécessaire
    marginTop: 20, // Ajustez l'espacement du haut selon vos besoins
  },
  statistics: {
    alignItems: 'center',
  },
  statisticsText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: '#141716',
  },
  carouselContainer: {
    flex: 1,
  },
  carouselImage: {
    height: '100%',
    width: '96%',
    marginLeft:'2%',
    marginRight:'2%',
    marginTop:'1%',
    borderRadius:7
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius:23,
    border:5,
    width:'95%',
    margin:10,
    backgroundColor:'#87A8A4'
  },
  rightView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
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
    borderRadius: 25, // Pour rendre le conteneur circulaire
    overflow: 'hidden', // Pour s'assurer que le contenu ne dépasse pas le cercle
    backgroundColor: '#099138', // Ajoutez la couleur de fond que vous souhaitez
  },
  iconContainer: {
    borderRadius: 50, // Pour rendre le conteneur de l'icône circulaire
    backgroundColor: '#1F4C91', // Ajoutez la couleur de fond que vous souhaitez
    padding: 10, // Ajustez le rembourrage selon vos besoins
    marginBottom: 10, // Espace entre l'icône et le texte
  },
  boxRed: {
    backgroundColor: '#055093',
  },
  boxBlue: {
    backgroundColor: '#1F8F91',
  },
  boxYellow: {
    backgroundColor: '#198173',
  },
  boxGreen: {
    backgroundColor: '#937B05',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FontSize.large,
    marginTop: 5,
  },
});
