import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../Components/globalContext';
import HomPage1 from './HomePage1';
import HomPage2 from './HomePage2';
import Home from './Home';
import RecapPage from './Recape';
import ProfilePage from './Profile';
import SplashScreens from './Splashsubmit';
// import YourComponent1 from './Pages/Coordonne';

const Stack = createNativeStackNavigator();

export default function Navigue() {
  const { userInfo,splashLoading }=useContext(AuthContext)
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
                        title: 'Lanfiatech',
                        headerStyle: {
                        backgroundColor: '#236198',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerRight: () => (
                        <Ionicons
                            name="ios-archive"
                            size={30}
                            color="white"
                            style={{ marginRight: 20 }}
                            onPress={() => {
                            // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
                    }}
                />
                ),
        })}
  />
        <Stack.Screen name="HomPage1" component={HomPage1} options={({ navigation }) => ({
                      
                        headerStyle: {
                        backgroundColor: '#236198',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerRight: () => (
                        <Ionicons
                            name="ios-archive"
                            size={30}
                            color="white"
                            style={{ marginRight: 20 }}
                            onPress={() => {
                            // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
                    }}
                />
                ),
        })}/>
        <Stack.Screen name="HomPage2" component={HomPage2} options={({ navigation }) => ({
                        title: 'Lanfiatech',
                        headerStyle: {
                        backgroundColor: '#236198',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerRight: () => (
                        <Ionicons
                            name="ios-archive"
                            size={30}
                            color="white"
                            style={{ marginRight: 20 }}
                            onPress={() => {
                            // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
                    }}
                />
                ),
        })}/>
        <Stack.Screen name="RecapPage" component={RecapPage} options={({ navigation }) => ({
                        
                        title: 'Lanfiatech',
                        headerStyle: {
                        backgroundColor: '#236198',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerRight: () => (
                        <Ionicons
                            name="ios-archive"
                            size={30}
                            color="white"
                            style={{ marginRight: 20 }}
                            onPress={() => {
                            // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
                    }}
                />
                ),
        })}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={({ navigation }) => ({
                        title: 'Lanfiatech',
                        headerStyle: {
                        backgroundColor: '#236198',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                        headerRight: () => (
                        <Ionicons
                            name="ios-archive"
                            size={30}
                            color="white"
                            style={{ marginRight: 20 }}
                            onPress={() => {
                            // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
                    }}
                />
                ),
        })}/>
        <Stack.Screen name="SplashScreens" component={SplashScreens} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="LogPage" component={LogPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
            title: 'Ma Page d\'Accueil',
            headerStyle: {
              backgroundColor: 'dodgerblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Ionicons
                name="ios-archive"
                size={30}
                color="white"
                style={{ marginRight: 20 }}
                onPress={() => {
                  // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
            }}
      />
    ),
  })}/>
        <Stack.Screen name="RecapPage" component={RecapPage} options={({ navigation }) => ({
              title: 'Ma Page d\'Accueil',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('HomPage1')}
                >
                <Ionicons
                  name="ios-archive"
                  size={30}
                  color="white"
                  style={{ marginRight: 20 }}
                />
                </TouchableOpacity>
              ),
            })}
            />*/}
      </Stack.Navigator> 
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


