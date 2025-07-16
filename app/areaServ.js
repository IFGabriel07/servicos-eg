import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />
       <Text> Informação da Área</Text>
        <TextInput placeholder="" style={styles.input} />
       

        <Text style = {styles.test}> Essa tela está em desenvolvimento, espero a sua compreensão então porfavor clique em voltar</Text>

    
      </View>
        <TouchableOpacity style={styles.voltar} onPress={() => router.back("/")}>
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
    gap: 20,
  },

  logo: {
    width: 150,
    height: 150,
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },

  Linksdebaixo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },

  voltar: {
    position: 'absolute',
    bottom: 40,
    left: 10,
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  test:{
color:"white",

  }
});
