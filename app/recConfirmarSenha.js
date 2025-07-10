import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function recConfirmarSenha() {
     const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.content}>
    <Image
source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
style={styles.logo} />

<Text style={styles.titulo}>Enviamos um código no email designado</Text>   
<View/>
        <View style={styles.comando} > 
        <TextInput 
          placeholder="Código"
          style={styles.input}
        />
        </View>

          <View style={styles.button}>
                <TouchableOpacity>
      <Text style={styles.buttonText} onPress={() => router.push("/mudarSenha")}>Trocar Senha</Text>
                </TouchableOpacity>
          </View>

      </View>
                  <TouchableOpacity style={styles.voltar} >
                          <Text style={styles.linkcor} onPress={() => router.back()}> Voltar</Text>
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

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },


  titulo:{
    color:'#C5DBD6',
      fontFamily: 'sans-serif',
      fontWeight:'bold',
      fontSize: 16,
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
comando:{
alignItems:"center",
justifyContent:"center",
flexDirection: "column",
},
  button: {
    backgroundColor: '#FFD700',
    width: 280,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
 

  voltar:{
  position: 'absolute',
  bottom: 40,
  left: 0,
  },


  linkcor: {
    color: '#FFD700',
    textAlign: 'center',
    width: 100,
  },
});