import {
  StatusBar, Text, View, SafeAreaView,
  Image, TextInput, ScrollView, PixelRatio
} from 'react-native';



import { Button, Switch, Avatar } from 'react-native-paper';

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <StatusBar translucent={false} backgroundColor="#ff00ff" />
          <Text
            style={{
              fontSize: 48,
            }}
          >
            Olá Expo!
            {' '}
            {PixelRatio.get()}
          </Text>

          <Image
            source={{
              uri: 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg'
            }}
            style={{
              height: 300,
              width: 600
            }}
          />

          <TextInput
            placeholder='Informe seu nome'
            style={{
              fontSize: 32,
              borderWidth: 1,
              borderColor: 'black',
              padding: 8,
              margin: 8,
              borderRadius: 8,
            }}
          />

          <Button
            mode='contained'
            onPress={() => alert('Olá, mundo!')}
          >
            Clique aqui!
          </Button>

          <Switch value={true} />

          <Avatar.Icon icon="camera" size={200} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
