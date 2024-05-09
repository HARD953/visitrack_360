import React, { useState ,useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Components/globalContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);
  const [resetPasswordConfirmation, setResetPasswordConfirmation] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const { loading,login }=useContext(AuthContext)

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordModalVisible(true);
  };

  const showModal = (message) => {
    setModalMessage(message);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleResetPassword = async () => {
    try {
      // Logique de réinitialisation du mot de passe ici...

      // Si la réinitialisation réussit :
      showModal('Réinitialisation du mot de passe réussie !');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      // Si la réinitialisation échoue :
      showModal('Échec de la réinitialisation du mot de passe');
    }
  };

  return (
    <ImageBackground source={require('../assets/Images/back10.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Audit de visibilité</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry={!showPassword}
            placeholderTextColor="black"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.showPasswordIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>{login(email,password)}}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isForgotPasswordModalVisible}
          onRequestClose={() => setIsForgotPasswordModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {!resetPasswordConfirmation ? (
                <>
                  <Text style={styles.modalText}>Veuillez saisir votre numéro de téléphone :</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Numéro de téléphone"
                    keyboardType="numeric"
                    placeholderTextColor="black"
                  />
                  <View style={styles.modalButtons}>
                    <Button title="Annuler" onPress={() => setIsForgotPasswordModalVisible(false)} />
                    <Button title="Confirmer"  />
                  </View>
                </>
              ) : (
                <Text style={styles.modalText}>Votre mot de passe a été réinitialisé avec succès !</Text>
              )}
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={hideModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>{modalMessage}</Text>
              <TouchableOpacity onPress={hideModal}>
                <Text>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#2E4053',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#3949AB',
    borderBottomWidth: 2,
    borderRadius: 8,
    paddingLeft: 8,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input1: {
    flex: 1,
    height: 100,
    borderColor: '#3949AB',
    borderBottomWidth: 2,
    borderRadius: 8,
    paddingLeft: 8,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  showPasswordIcon: {
    padding: 0,
    margin: 0,
  },
  loginButton: {
    backgroundColor: '#3F51B5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
    color: '#2E4053',
    fontSize: 14,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    height: '20%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default LoginPage;
