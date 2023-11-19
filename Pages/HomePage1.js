import { SelectList } from 'react-native-dropdown-select-list'
import axios from "axios";
import React, { useState,useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Font from "../constants/Font";
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';
import HomPage2 from './HomePage2';

const { height, width } = Dimensions.get("screen");

export default function HomPage1({ navigation }) {

  const [entreprise, setEntreprise] = useState('');
  const [marque1, setMarque1] = useState('');
  const [marque, setMarque] = useState('');
  const [commune, setCommune] = useState('');
  const [typeSupport, setTypeSupport] = useState('');
  const [surface, setSurface] = useState('');
  const [canal, setCanal] = useState('');
  const [canal1, setCanal1] = useState('');
  const [etatSupport, setEtatSupport] = useState('');
  const [etatSupport1, setEtatSupport1] = useState('');
  const [visibilite, setVisibilite] = useState('');
  const [visibilite1, setVisibilite1] = useState('');
  const [duree, setDuree] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://auditapi.up.railway.app/api/marque/');
        const formattedData = response.data.results.map((item) => ({
          key: item.id.toString(),
          value: item.marque,
        }));
        setMarque1(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('https://auditapi.up.railway.app/api/canal/');
        const formattedData = response.data.results.map((item) => ({
          key: item.id.toString(),
          value: item.canal,
        }));
        setCanal1(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData1();
  }, []);
  
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get('https://auditapi.up.railway.app/api/etat/');
        const formattedData = response.data.results.map((item) => ({
          key: item.id.toString(),
          value: item.etat,
        }));
        setEtatSupport1(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData2();
  }, []);
  
  // useEffect(() => {
  //   const fetchData4 = async () => {
  //     try {
  //       const response = await axios.get('https://auditapi.up.railway.app/api/site/');
  //       const formattedData = response.data.results.map((item) => ({
  //         key: item.id.toString(),
  //         value: item.marque,
  //       }));
  //       set(formattedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData4();
  // }, []);
  
  // useEffect(() => {
  //   const fetchData5 = async () => {
  //     try {
  //       const response = await axios.get('https://auditapi.up.railway.app/api/type/');
  //       const formattedData = response.data.results.map((item) => ({
  //         key: item.id.toString(),
  //         value: item.type,
  //       }));
  //       setTypeSupport1(formattedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData5();
  // }, []);
  
  useEffect(() => {
    const fetchData6 = async () => {
      try {
        const response = await axios.get('https://auditapi.up.railway.app/api/visibilite/');
        const formattedData = response.data.results.map((item) => ({
          key: item.id.toString(),
          value: item.visibilite,
        }));
        setVisibilite1(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData6();
  }, []);

  const entrepri=[
    {key:'1',value:'Commercial'},
    {key:'2',value:'Non Commercial'}
  ]
  // const marq=[
  //   {key:'1',value:'Orange'},
  //   {key:'2',value:'Moov'},
  //   {key:'3',value:'MTN'}
  // ]
  const comm = [
    { key: '1', value: 'Abobo' },
    { key: '2', value: 'Adjamé' },
    { key: '3', value: 'Plateau' },
    { key: '4', value: 'Treichville' },
    { key: '5', value: 'Bassam' },
    { key: '6', value: 'Cocody' },
    { key: '7', value: 'Yopougon' },
  ]
  const types=[
    {key:'1',value:'Abri bâche'},
    {key:'2',value:'Affiche'},
    {key:'3',value:'Arche'},
    {key:'4',value:'Banderole'},
    {key:'5',value:'Barrière brandée'},
    {key:'6',value:'Chevalets'},
    {key:'7',value:'Cube'},
    {key:'8',value:'Guirlandes'},
  ]

  const site=[
    {key:'1',value:'Commercial'},
    {key:'2',value:'Non Commercial'}
  ]
  
  // const canals=[
  //   {key:'1',value:'Agence'},
  //   {key:'2',value:'Boutique'},
  //   {key:'3',value:'Franchise'},
  //   {key:'4',value:'Magasin'},
  //   {key:'5',value:'Mini Franchise'},
  //   {key:'6',value:'Mûr'}
  // ]
  // const etats=[
  //   {key:'1',value:'Bon'},
  //   {key:'2',value:'Défraichis'},
  //   {key:'3',value:'Détérioré'}
  // ]
  // const visibile=[
  //   {key:'1',value:'Bonne'},
  //   {key:'2',value:'Dégradé'},
  //   {key:'3',value:'Moyenne'},
  //   {key:'4',value:'Obstruée'}
  // ]
  
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
              <SelectList
              placeholder='Marque ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setMarque(val)}
              data={marque1}
              save="value"
              value={marque}
              onChangeText={setMarque}
            />
            </View>
            <SelectList
              placeholder='Commune ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setCommune(val)}
              data={comm}
              save="value"
              value={commune}
              onChangeText={setCommune}
            />
            <SelectList
              placeholder='Type support ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setTypeSupport(val)}
              data={types}
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
              data={canal1}
              save="value"
              value={canal}
              onChangeText={setCanal}
            />
            <SelectList
              placeholder='Etat support ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setEtatSupport(val)}
              data={etatSupport1}
              save="value"
              value={etatSupport}
              onChangeText={setEtatSupport}
            />
            <SelectList
              placeholder='Visibilité ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setVisibilite(val)}
              data={visibilite1}
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
    height: height,
    backgroundColor:'#F4F8F7'
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
