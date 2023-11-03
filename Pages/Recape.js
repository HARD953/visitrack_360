import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image ,ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
const RecapPage = ({ navigation, route }) => {
  // Récupérer les données transmises depuis les écrans précédents
  const { dataFromHomePage1, dataFromHomePage2 } = route.params
  const handleSubmit = async () => {
    try {
      // Définissez les données à envoyer au serveur
      const dataToSend = {
        "entreprise":dataFromHomePage1["entreprise"],
        "marque":dataFromHomePage1["marque"],
        "commune":dataFromHomePage1["commune"],
        "typeSupport":dataFromHomePage1["typeSupport"],
        "surface":dataFromHomePage1["surface"],
        "canal":dataFromHomePage1["canal"],
        "etatSupport":dataFromHomePage1["etatSupport"],
        "visibilite":dataFromHomePage1["visibilite"],
        "duree":dataFromHomePage1["duree"],
        "emplacementExact":dataFromHomePage1["emplacementExact"],
        "observation":dataFromHomePage2["observation"],
        "odp":dataFromHomePage2["odp"],
        "image":dataFromHomePage2["image"],
        "latitude":dataFromHomePage2["latitude"],
        "longitude":dataFromHomePage2["longitude"],
      };
      // Effectuez une requête POST vers votre point d'API
      const response = await axios.post('https://auditapi.up.railway.app/api/donneescollectees/', dataToSend);

      if (response.status === 200) {
        // Soumission réussie
        console.log('Données soumises avec succès');
        // Vous pouvez ajouter une logique supplémentaire ici, telle qu'un message de réussite pour l'utilisateur.
      }
    } catch (error) {
      // Gérez les erreurs qui se sont produites pendant la requête
      console.error('Erreur lors de la soumission des données :', error);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici.
    }
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
          <Text style={styles.value}>{dataFromHomePage2["odp"] ? 'Oui' : 'Non'}</Text>
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
          <View style={styles.imageContainer}>
            <Image source={{ uri: dataFromHomePage2["image"] }} style={styles.image} />
          </View>
        )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Ajoutez ici la logique de soumission des données au serveur
        }}
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
  value: {},
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
