import React, {useState,useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from '../Components/globalContext';

const RecapPage = ({ navigation, route }) => {
  // Récupérer les données transmises depuis les écrans précédents
  const { dataFromHomePage1, dataFromHomePage2 } = route.params;
  const { userInfo, splashLoading } = useContext(AuthContext);

  const headers = {
    'Authorization': `Bearer ${userInfo.access}`,
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('entreprise', dataFromHomePage1['entreprise']);
      formData.append('Marque', dataFromHomePage1['marque']);
      formData.append('commune', dataFromHomePage1['commune']);
      formData.append('type_support', dataFromHomePage1['typeSupport']);
      formData.append('surface', dataFromHomePage1['surface']);
      formData.append('surfaceODP', dataFromHomePage2['SurfaceODP']);
      formData.append('canal', dataFromHomePage1['canal']);
      formData.append('etat_support', dataFromHomePage1['etatSupport']);
      formData.append('visibilite', dataFromHomePage1['visibilite']);
      formData.append('duree', dataFromHomePage1['duree']);
      formData.append('description', dataFromHomePage2['emplacementExact']);
      formData.append('observation', dataFromHomePage2['observation']);
      formData.append('ODP', dataFromHomePage2['value']);
      formData.append('latitude', dataFromHomePage2['latitude']);
      formData.append('longitude', dataFromHomePage2['longitude']);

      if (dataFromHomePage2['image']) {
        formData.append('image_support', {
          uri: dataFromHomePage2['image'],
          type: 'image/jpeg/png/jpg', // Assurez-vous de spécifier le type MIME correct
          name: 'imageddd.jpg', // Nom du fichier sur le serveur
        });
      }

      const response = await axios.post(
        'https://auditapi.up.railway.app/api/collectedata/',
        formData,
        {
          headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log('Données soumises avec succès');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission des données :', error);
    }
    navigation.replace('SplashScreens');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Récapitulatif des informations</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Entreprise:</Text>
          <Text style={styles.value}>{dataFromHomePage1["entreprise"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Marque:</Text>
          <Text style={styles.value}>{dataFromHomePage1["marque"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Commune:</Text>
          <Text style={styles.value}>{dataFromHomePage1["commune"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Type de support:</Text>
          <Text style={styles.value}>{dataFromHomePage1["typeSupport"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Surface:</Text>
          <Text style={styles.value}>{dataFromHomePage1["surface"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>SurfaceODP:</Text>
          <Text style={styles.value}>{dataFromHomePage2["SurfaceODP"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Canal:</Text>
          <Text style={styles.value}>{dataFromHomePage1["canal"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>État du support:</Text>
          <Text style={styles.value}>{dataFromHomePage1["etatSupport"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Visibilité:</Text>
          <Text style={styles.value}>{dataFromHomePage1["visibilite"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Durée:</Text>
          <Text style={styles.value}>{dataFromHomePage1["duree"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Emplacement exact:</Text>
          <Text style={styles.value}>{dataFromHomePage2["emplacementExact"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Observation:</Text>
          <Text style={styles.value}>{dataFromHomePage2["observation"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>ODP:</Text>
          <Text style={styles.value}>{dataFromHomePage2["value"] ? 'Oui' : 'Non'}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Latitude:</Text>
          <Text style={styles.value}>{dataFromHomePage2["latitude"]}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Longitude:</Text>
          <Text style={styles.value}>{dataFromHomePage2["longitude"]}</Text>
        </View>
        <View style={styles.imageContainer}>
          {dataFromHomePage2["image"] && (
            <Image
              source={{ uri: dataFromHomePage2["image"] }}
              style={styles.image}
            />
          )}
       </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitText}>Soumettre</Text>
        <MaterialIcons name="check-circle" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {

  },
  submitButton: {
    backgroundColor: '#007AFF', // Couleur du bouton
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '110%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default RecapPage;
