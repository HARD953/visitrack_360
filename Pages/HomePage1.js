import { SelectList } from 'react-native-dropdown-select-list'

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import Font from "../constants/Font";
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';
import HomPage2 from './HomePage2';

const { height, width } = Dimensions.get("screen");

export default function HomPage1({ navigation }) {

  const [entreprise, setEntreprise] = useState('');
  const [marque, setMarque] = useState('');
  const [commune, setCommune] = useState('');
  const [typeSupport, setTypeSupport] = useState('');
  const [surface, setSurface] = useState('');
  const [canal, setCanal] = useState('');
  const [etatSupport, setEtatSupport] = useState('');
  const [visibilite, setVisibilite] = useState('');
  const [duree, setDuree] = useState('');

  const data = [
    { key: '1', value: 'Abobo' },
    { key: '2', value: 'Adjamé' },
    { key: '3', value: 'Plateau' },
    { key: '4', value: 'Treichville' },
    { key: '5', value: 'Bassam' },
    { key: '6', value: 'Cocody' },
    { key: '7', value: 'Yopougon' },
  ]
  
  const navigateToHomePage2 = () => {
    const dataFromHomePage1 = {
      entreprise,
      marque,
      commune,
      typeSupport,
      surface,
      canal,
      etatSupport,
      visibilite,
      duree,
    };
    navigation.navigate('HomPage2', { dataFromHomePage1 });
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.container}>
          <View style={styles.appB}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="chevron-left" style={styles.iconeback} />
            </TouchableOpacity>
            <Text style={styles.txt} >Enregistrement   1/2</Text>
          </View>
          <View style={styles.champ}>
            <View style={styles.saisi} >
              <TextInput
                style={styles.inputs}
                placeholder='Entreprise'
                placeholderTextColor={Colors.darkText}
                value={entreprise}
                onChangeText={setEntreprise}
              />
            </View>
            <View style={styles.saisi} >
              <TextInput
                style={styles.inputs}
                placeholder='Marque'
                placeholderTextColor={Colors.darkText}
                value={marque}
                onChangeText={setMarque}
              />
            </View>
            <SelectList
              placeholder='Commune ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setCommune(val)}
              data={data}
              save="value"
              value={commune}
              onChangeText={setCommune}
            />
            <SelectList
              placeholder='Type support ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setTypeSupport(val)}
              data={data}
              save="value"
              value={typeSupport}
              onChangeText={setTypeSupport}
            />

            <View style={styles.saisi} >
              <TextInput
                style={styles.inputs}
                placeholder='Surface'
                placeholderTextColor={Colors.darkText}
                keyboardType='numeric'
                value={surface}
                onChangeText={setSurface}
              />
            </View>

            <SelectList
              placeholder='Canal ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setCanal(val)}
              data={data}
              save="value"
              value={canal}
              onChangeText={setCanal}
            />
            <SelectList
              placeholder='Etat support ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setEtatSupport(val)}
              data={data}
              save="value"
              value={etatSupport}
              onChangeText={setEtatSupport}
            />
            <SelectList
              placeholder='Visibilité ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setVisibilite(val)}
              data={data}
              save="value"
              value={visibilite}
              onChangeText={setVisibilite}
            />
            <View style={styles.saisi} >
              <TextInput
                style={styles.inputs}
                placeholder='Durée'
                placeholderTextColor={Colors.darkText}
                keyboardType='numeric'
                value={duree}
                onChangeText={setDuree}  
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={navigateToHomePage2}>
              <Text style={styles.btntxt}>Suivant </Text>
              <MaterialIcons name="navigate-next" style={styles.iconeNext} />
            </TouchableOpacity>
          </View>
        </View>


      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width / 14,
    height: height
  },
  appB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '8%'

  },
  iconeback: {
    fontSize: 35,
    color: Colors.primary
  },
  txt: {
    fontSize: FontSize.large,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    fontWeight: '700',
    marginVertical: Spacing * 2,
    paddingHorizontal: width / 8
  },
  champ: {
    height: '80%',
    justifyContent: 'space-around',
    // backgroundColor: "#767"
  },
  saisi: {
    // height: "8%"
  },
  inputs: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.medium,
    padding: Spacing * 1.5,
    borderWidth: 0.5,
    borderColor: '#778',
    borderRadius: Spacing,
    width: "100%",
  },
  label: {
    fontSize: FontSize.small,
    marginVertical: height / 100
  },
  select: {
    borderWidth: 0.5,
    fontSize: FontSize.medium,
    borderColor: '#778',
  },
  btn: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: Spacing,
    height: "7%"
  },
  btntxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: Font['poppins-bold'],
    fontWeight: '800'
  },
  iconeNext: {
    fontSize: 32,
    color: 'white',

  },
});
