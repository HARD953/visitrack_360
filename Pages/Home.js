import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';

const { height, width } = Dimensions.get("screen");

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <View style={styles.container}>
          <View style={styles.imageView}>
            <ImageBackground
              style={styles.images}
              source={require("../assets/Images/audi.png")}
              resizeMode='cover'
            />
          </View>
          <View style={styles.statistics}>
            {/* Ajoutez ici vos composants de statistiques */}
            <Text style={styles.statisticsText}>Statistiques de collecte de supports</Text>
            {/* Vous pouvez ajouter des graphiques, des nombres, etc. pour afficher les statistiques */}
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
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width / 14,
    height: height,
  },
  header: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    fontSize: FontSize.large,
    color: 'white',
  },
  imageView: {
    height: "35%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    height: "100%",
    width: "100%",
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: "35%",
    marginVertical: "10%",
    paddingHorizontal: "8%",
  },
  rightView: {
    height: "80%",
    width: "44%",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadow: {
    borderWidth: 0.17,
    shadowColor: '#3333333',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.30,
    shadowRadius: 6,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  box: {
    width: '105%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxRed: {
    backgroundColor: '#FF6F61', // Rouge
  },
  boxBlue: {
    backgroundColor: '#45AAB8', // Bleu-vert
  },
  boxYellow: {
    backgroundColor: '#FFD700', // Jaune
  },
  boxGreen: {
    backgroundColor: '#62CC52', // Vert
  },
  boxLightBlue: {
    backgroundColor: '#7FC7FF', // Bleu clair
  },
  boxDarkBlue: {
    backgroundColor: '#2B65A3', // Bleu foncé
  },
  boxText: {
    color: 'white',
    fontSize: FontSize.large,
    marginTop: 5,
  },
  statisticsText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent:'center'
  },
});
