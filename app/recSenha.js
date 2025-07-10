
import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function recSenha() {
      const router = useRouter();
  return (
    
    <SafeAreaView style={styles.container}>
          <View style={styles.content}>

        <Image
source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
 style={styles.logo}/>
    <View style={styles.textBox}>  
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirmar Email"
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.button}>
                <TouchableOpacity>
  <Text style={styles.buttonText} onPress={() => router.push("/recConfirmarSenha")}>Prosseguir</Text>
                </TouchableOpacity>
        </View>

      </View>
</View>
           <TouchableOpacity style={styles.voltar}>
              <Text style={styles.linkcor} onPress={() => router.back()}>Voltar</Text>
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

  logo: {
    width: 150,
    height: 150,
    position:"absolute",
    bottom:270,
    
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

textBox:{
alignItems:"center",
justifyContent:"column",
gap:30,


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
