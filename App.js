import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import ContatoScreen from './screens/ContatoScreen';
import SobreScreen from './screens/SobreScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavegadorEmAbas = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NavegadorEmAbas.Navigator>
        <NavegadorEmAbas.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name='home' size={size} color={color} />
            }
          }}
          name="Home" component={HomeScreen} />
        <NavegadorEmAbas.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name='contacts' size={size} color={color} />
            }
          }}
          name="Contato" component={ContatoScreen} />
        <NavegadorEmAbas.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name='information' size={size} color={color} />
            }
          }}
          name="Sobre" component={SobreScreen} />
      </NavegadorEmAbas.Navigator>
    </NavigationContainer>
  )
}

export default App;
