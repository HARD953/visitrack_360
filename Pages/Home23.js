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

const { height, width } = Dimensions.get("screen");

export default function HomePage2({ navigation }) {
  const [value, setValue] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [image, setImage] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log("Veuillez accorder les autorisations de localisation");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync();

    setLatitude(currentLocation.coords.latitude);
    setLongitude(currentLocation.coords.longitude);
  };

  const getPermissionc = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);

    if (status !== 'granted') {
      console.log('Permission not granted');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri)
  }}

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appB}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage1')}>
            <MaterialIcons name="chevron-left" style={styles.iconeback} />
          </TouchableOpacity>
          <Text style={styles.txt}>Enregistrement 2/2</Text>
        </View>
        <View style={styles.champ}>
          <View style={styles.saisi}>
            <TextInput
              style={styles.inputs}
              placeholder="Emplacement exact"
              placeholderTextColor={Colors.darkText}
              multiline={true}
              numberOfLines={7}
            />
          </View>
          <View style={styles.saisi}>
            <TextInput
              style={styles.inputs}
              placeholder="Observation"
              placeholderTextColor={Colors.darkText}
              multiline={true}
              numberOfLines={7}
            />
          </View>
          <View style={styles.swi}>
            <Text style={styles.textOPD}>ODP</Text>
            <Switch
              value={value}
              circleSize={27}
              onValueChange={() => setValue(!value)}
              activeText=""
              inActiveText=""
            />
          </View>
          <View style={styles.imView}>
            <View style={styless.buttonsContainer}>
              <TouchableOpacity style={styless.uploadButton} onPress={pickImage}>
                <MaterialIcons name="add-a-photo" style={styless.iconeImage} />
                <Text style={styless.buttonText}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styless.takePhotoButton} onPress={takePhoto}>
                <MaterialIcons name="add-a-photo" style={styless.iconeImage} />
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
              <Text style={styles.getLocationButtonText}>location</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={styles.btn}>
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderStyle: 'dashed',
    borderRadius: Spacing,
    borderColor: '#778',
    margin: 20,
  },
  uploadButton: {
    alignItems: 'center',
    paddingRight: 70,
  },
  takePhotoButton: {
    alignItems: 'center',
  },
  iconeImage: {
    fontSize: 50, // Ajustez la taille de l'icône ici
    color: '#5DADE2',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajustez la taille de l'image ici
    marginTop: 20,
  },
  buttonText: {
    // Vous pouvez ajuster cette valeur pour l'espacement souhaité
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
    color: '#5DADE2', // Couleur bleue
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
    height: "100%",
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
    justifyContent: 'center',
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
    backgroundColor: '#5DADE2', // Couleur bleue
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
    backgroundColor: '#5DADE2', // Couleur bleue
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: Spacing,
    height: "50%", // Hauteur augmentée
    marginVertical: 10, // Espace vertical
  },
  getLocationButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontWeight: '800',
  },
});
