import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function objetivo() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Qual é o seu objetivo?</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/cadastroUser")}>
          <Text style={styles.buttonText}>Buscar Serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/cadastroServ")}>
          <Text style={styles.buttonText}>Prestar Serviço</Text>
        </TouchableOpacity>


      </View>

      <TouchableOpacity style={styles.voltar} onPress={() => router.back("/index")}>
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
  },

  content: {
    alignItems: 'center',
    gap: 30,
  },

  logo: {
    width: 150,
    height: 150,
  },

  titulo: {
    color: '#C5DBD6',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FFD700',
    width: 240,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  voltar: {
    position: 'absolute',
    bottom: 40,
    left: 30,
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
