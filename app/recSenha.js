import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function testRecSenha() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
     
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />

        <TextInput
          placeholder="Digite seu Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Confirme seu Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push("/recConfirmarSenha")}>
          <Text style={styles.buttonText}>Enviar Código</Text>
        </TouchableOpacity>

      </View>
        <TouchableOpacity  style={styles.voltar} onPress={() => router.back("/")}>
          <Text style={styles.linkcor}>Voltar</Text>
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
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
voltar:{
    position: 'absolute',
    bottom: 40,
    left: 30,
},

  input: {
    backgroundColor: '#20C997',
    width: 280,
    padding: 12,
    fontSize: 18,
    borderRadius: 8,
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
