import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './Components/globalContext';
import Navigators from './Components/Navigators';
import { StatusBar } from 'react-native'

// import YourComponent1 from './Pages/Coordonne';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar  backgroundColor="#06bcee" />
      <Navigators />
    </AuthProvider>  
  )
}

export default App

// const Stack = createNativeStackNavigator();

// function App() {
//   const { userInfo,splashLoading }=useContext(AuthContext)

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomPage2">
//         <Stack.Screen name="LogPage" component={LogPage} options={{ headerShown: false }}/>
//         <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
//             title: 'Ma Page d\'Accueil',
//             headerStyle: {
//               backgroundColor: 'dodgerblue',
//             },
//             headerTintColor: 'white',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//             headerRight: () => (
//               <Ionicons
//                 name="ios-archive"
//                 size={30}
//                 color="white"
//                 style={{ marginRight: 20 }}
//                 onPress={() => {
//                   // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'icône est pressée
//             }}
//       />
//     ),
//   })}/>
//         <Stack.Screen name="RecapPage" component={RecapPage} options={({ navigation }) => ({
//               title: 'Ma Page d\'Accueil',
//               headerStyle: {
//                 backgroundColor: 'dodgerblue',
//               },
//               headerTintColor: 'white',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//               headerRight: () => (
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate('HomPage1')}
//                 >
//                 <Ionicons
//                   name="ios-archive"
//                   size={30}
//                   color="white"
//                   style={{ marginRight: 20 }}
//                 />
//                 </TouchableOpacity>
//               ),
//             })}
//             />
//             {splashLoading ? (
//               <Stack.Screen name="splash" component={Splashscreen} options={{ headerShown: false }}/>
//             ):userInfo.access ? (
//               <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
//             ):(
//               <>
//               <Stack.Screen name="Login" component={LogPage} options={{ headerShown: false }}/>
//               <Stack.Screen name="HomPage2" component={HomPage2} options={{ headerShown: false }}/>
//               <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}/>
//               </>
//             )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// const styles = StyleSheet.create({  
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


