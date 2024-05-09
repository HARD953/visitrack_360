import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-switch';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from "axios";
const { height, width } = Dimensions.get("screen");

export default function HomPage2({ navigation,route }) {
  const [emplacementExact, setEmplacementExact] = useState('');
  const [observation, setObservation] = useState('');
  const [value1, setValue] = useState(false); // Pour le commutateur ODP
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [SurfaceODP, setSurfaceODP] = useState(null);

  const data = [
    { key: '1', value: 'Abobo' },
    { key: '2', value: 'Adjamé' },
    { key: '3', value: 'Plateau' },
    { key: '4', value: 'Treichville' },
    { key: '5', value: 'Bassam' },
    { key: '6', value: 'Cocody' },
    { key: '7', value: 'Yopougon' },
  ]

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log("Veuillez accorder les autorisations de localisation");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});

    setLatitude(currentLocation.coords.latitude);
    setLongitude(currentLocation.coords.longitude);
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permission not granted');
    }
  };

  const pickImage = async () => {
    getPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  const takePhoto = async () => {
    getPermission();

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const { dataFromHomePage1 } = route.params

  const handleSubmit = () => {
    const dataFromHomePage2 = {
      SurfaceODP,
      emplacementExact,
      observation,
      value1,
      value3,
      image,
      latitude,
      longitude,
    };
    navigation.navigate('RecapPage', { dataFromHomePage1, dataFromHomePage2 });
  };
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.champ}>
  
        {/* <SelectList
              placeholder='Commune ...'
              placeholderTextColor={Colors.darkText}
              setSelected={(val) => setObservation(val)}
              data={data}
              save="value"
              value={observation}
            /> */}
            {value1 && (
            <View style={styles.saisi}>
              <TextInput
                style={styles.inputs1}
                placeholder="SurfaceODP"
                placeholderTextColor={Colors.darkText}
                keyboardType='numeric'
                value={SurfaceODP}
                onChangeText={(text) => setSurfaceODP(text)}
              />
            </View>
          )}
        <View style={styles.saisi}>
            <TextInput
              style={styles.inputs}
              placeholder="Emplacement Exat"
              placeholderTextColor={Colors.darkText}
              multiline={true}
              numberOfLines={7}
              onChangeText={(text) => setEmplacementExact(text)}
            />
          </View>
          <View style={styles.saisi}>
            <TextInput
              style={styles.inputs}
              placeholder="Observation"
              placeholderTextColor={Colors.darkText}
              multiline={true}
              numberOfLines={7}
              onChangeText={(text) => setObservation(text)}
            />
          </View>

          {/* <View style={styles.saisi}>
          <TextInput
          style={styles.inputs}
          placeholder="Latitude"
          keyboardType='numeric'
          value={latitude1}
          onChangeText={(text) => setLatitude1(text)}
        />
          </View>
          <View style={styles.saisi}>
          <TextInput
          style={styles.inputs}
          placeholder="Longitude"
          keyboardType='numeric'
          value={longitude1}
          onChangeText={(text) => setLongitude1(text)}
        />
          </View> */}
          <View style={styles.swi}>
            <Text style={styles.textOPD}>Nouveau ?</Text>
            <Switch
              value={value3}
              circleSize={27}
              onValueChange={(newValue1) => {
                setValue3(newValue1);
              }}
              activeText=""
              inActiveText=""
            />
          </View>
          <View style={styles.swi}>
            <Text style={styles.textOPD}>ODP ?</Text>
            <Switch
              value={value1}
              circleSize={27}
              onValueChange={(newValue) => {
                setValue(newValue);
              }}
              activeText=""
              inActiveText=""
            />
          </View>
          
          {/* <View style={styles.swi}>
            <Text style={styles.textOPD}>TTAP</Text>
            <Switch
              value={value2}
              circleSize={27}
              onValueChange={(newValue1) => {
                setValue2(newValue1);
              }}
              activeText=""
              inActiveText=""
            />
          </View>
          <View style={styles.swi}>
            <Text style={styles.textOPD}>TTPAT</Text>
            <Switch
              value={value2}
              circleSize={27}
              onValueChange={(newValue1) => {
                setValue2(newValue1);
              }}
              activeText=""
              inActiveText=""
            />
          </View>
          <View style={styles.swi}>
            <Text style={styles.textOPD}>TAE</Text>
            <Switch
              value={value2}
              circleSize={27}
              onValueChange={(newValue1) => {
                setValue2(newValue1);
              }}
              activeText=""
              inActiveText=""
            />
          </View>
          <View style={styles.swi}>
            <Text style={styles.textOPD}>TAEAT</Text>
            <Switch
              value={value2}
              circleSize={27}
              onValueChange={(newValue1) => {
                setValue2(newValue1);
              }}
              activeText=""
              inActiveText=""
            />
          </View> */}
          <View style={styles.imView}>
            <View style={styless.buttonsContainer}>
              <TouchableOpacity style={styless.uploadButton} onPress={pickImage}>
                <MaterialIcons name="add-a-photo" style={styless.iconeImage} />
                <Text style={styless.buttonText}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styless.uploadButton} onPress={takePhoto}>
                <MaterialIcons name="camera-alt" style={styless.iconeImage} />
                <Text style={styless.buttonText}>Take Picture</Text>
              </TouchableOpacity>
            </View>
            <View style={styless.imageContainer}>
              {image && <Image source={{ uri: image }} style={styless.imagePreview} />}
            </View>
          </View>
          <View style={styles.MapView}>
            <MaterialIcons name="my-location" style={styles.iconeLoc} />
            <View style={styles.coordLoc}>
              <Text>Latitude : {latitude}</Text>
              <Text>Longitude : {longitude}</Text>
            </View>
            <TouchableOpacity onPress={getLocation} style={styles.getLocationButton}>
              <Text style={styles.getLocationButtonText}>Coordonnée</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btntxt}>Terminer</Text>
            <MaterialIcons name="check-circle" style={styles.iconeNext} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width / 14,
    justifyContent: 'center',
    backgroundColor:'#F4F8F7'
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    marginBottom: 20,
    borderStyle: 'dashed',
    borderRadius: Spacing,
    borderColor: '#778',
    margin: 20,
  },
  uploadButton: {
    alignItems: 'flex-start',
    marginVertical:10
  },
  uploadButtonColumn: {
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  iconeImage: {
    fontSize: 50, // Ajustez la taille de l'icône ici
    color: '#5D6D7E',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent:'center'
  },
  imagePreview: {
    marginBottom: 10,
    width: 225,
    height: '95%',
    resizeMode: 'contain', // Utilisez "contain" ou "cover" en fonction de vos besoins
    marginTop: 20,
  },  
  buttonText: {
    fontWeight:'500'
  },
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width / 14,
    height: height,
  },
  appB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "8%",
  },
  iconeback: {
    fontSize: 35,
    color: '#5DADE2', // Couleur bleue
  },
  txt: {
    fontSize: FontSize.large,
    color: '#01579B', // Couleur bleue
    fontFamily: Font["poppins-bold"],
    fontWeight: '700',
    marginVertical: Spacing * 2,
    paddingHorizontal: width / 8,
  },
  champ: {
    height: "80%",
    justifyContent: 'space-around',
  },
  saisi: {
    height: "12%",
  },
  inputs: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.medium,
    paddingHorizontal: Spacing * 1.5,
    paddingTop: Spacing * 1.5,
    borderWidth: 0.5,
    borderColor: '#778',
    borderRadius: Spacing,
    width: "100%",
    height: "85%",
    borderBottomWidth:2
  },
  inputs1: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.medium,
    padding: Spacing * 1.5,
    borderWidth: 0.5,
    borderColor: '#778',
    borderRadius: Spacing,
    width: "100%",
    borderBottomWidth:2
  },
  textOPD: {
    fontSize: FontSize.large,
    fontFamily: Font["poppins-semiBold"],
  },
  swi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center',
    paddingHorizontal: Spacing * 0.5,
  },
  imView: {
    flexDirection: 'row', // Ajout de flexDirection
    height: "24%",
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2, // Épaisseur de la bordure augmentée
    borderStyle: 'dashed',
    borderRadius: Spacing,
    borderColor: '#778',

  },
  iconeImage: {
    fontSize: 80,
    color: 'gray', // Couleur grise
  },
  MapView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: Spacing,
    borderColor: '#778',
  },
  iconeLoc: {
    fontSize: 80,
    color: 'gray', // Couleur grise
  },
  coordLoc: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: "2%",
  },
  btn: {
    backgroundColor: '#5D6D7E', // Couleur bleue
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: Spacing,
    height: "7%",
  },
  btntxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: Font['poppins-bold'],
    fontWeight: '800',
  },
  iconeNext: {
    fontSize: 26,
    color: 'white',
  },
  getLocationButton: {
    backgroundColor: '#5D6D7E', // Couleur bleue
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: Spacing,
    height: "100%",
    width:110, // Hauteur augmentée
    marginVertical: 10, // Espace vertical
  },
  getLocationButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontWeight: '800',
  },
});
