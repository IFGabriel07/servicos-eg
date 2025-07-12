import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function mudarSenha() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />

        <TextInput
          placeholder="Crie uma Nova Senha"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirme a Nova Senha"
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.sucesso}>✅ Senha alterada com sucesso!</Text>

      </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>Ir Para Tela de Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00291c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 20,
  },
  
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#20C997',
    width: 280,
    padding: 12,
    fontSize: 18,
    borderRadius: 8,
  },
  sucesso: {
    color: '#00FF7F',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    width: 280,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  linkcor: {
    color: '#FFD700',
    marginTop: 15,
    fontSize: 16,
  },
});
