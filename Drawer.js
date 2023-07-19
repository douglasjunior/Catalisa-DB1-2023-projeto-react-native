import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ContatoScreen from './screens/ContatoScreen';
import SobreScreen from './screens/SobreScreen';

const NavegadorEmGaveta = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <NavegadorEmGaveta.Navigator>
      <NavegadorEmGaveta.Screen name="Home" component={HomeScreen}  />
      <NavegadorEmGaveta.Screen name="Contato" component={ContatoScreen}  />
      <NavegadorEmGaveta.Screen name="Sobre" component={SobreScreen}  />
     </NavegadorEmGaveta.Navigator>
    </NavigationContainer>
  )
}

export default App;
