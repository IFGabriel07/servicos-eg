import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from 'react-native-paper';
import { useState } from 'react';


export default function index() {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // Signed up 
      const user = userCredential.user;
      console.log("sucesso negão");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }    
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>


        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />

        <TextInput placeholder="Email ou CPF" style={styles.input} onChangeText={a => setEmail(a)} />
        <TextInput placeholder="Senha"  style={styles.input} onChangeText={a => setSenha(a)}/>

        <TouchableOpacity style={styles.button}>
        <Button mode='contained' onPress={handleLogin}>Entrar</Button>
        </TouchableOpacity> 

        <View style={styles.Linksdebaixo}>
          <TouchableOpacity onPress={() => router.push('/recSenha')}>
            <Text style={styles.linkcor}>Esqueceu a senha ?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/objetivo')}>
            <Text style={styles.linkcor}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      
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
    left: 0,
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
