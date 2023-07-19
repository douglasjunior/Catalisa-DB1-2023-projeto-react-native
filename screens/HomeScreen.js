import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Contato')
        }}
      >
        Ir para Contato
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('Sobre')
        }}
      >
        Ir para Sobre
      </Button>
    </View>
  )
};

export default HomeScreen;
