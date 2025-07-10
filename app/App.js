import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View>
      <Button title="Ir para Sobre" onPress={() => router.push('/sobre')} />
    </View>
  );
}
