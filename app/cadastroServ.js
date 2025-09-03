import { useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity, Animated } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const router = useRouter();
export default function cadastroServ() {

  const [newEmail, setNewEmail] = useState("");
  const [newSenha, setNewSenha] = useState("");

  async function cadastrarSev() {
    try {
      const sev = await createUserWithEmailAndPassword(auth, newEmail, newSenha)
      const seridor = sev.user
      console.log(seridor)
      router.push("r/index")
    }

    catch (error) {
      const errorCode = error.code
      const errorMessage = error.errorMessage
      console.log(errorCode)
      console.log(errorMessage)
    }
  }

  const [showEndereco, setShowEndereco] = useState(false);
  const slideAnim = useRef(new Animated.Value(600)).current;

  const abrirEndereco = () => {
    setShowEndereco(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fecharEndereco = () => {
    Animated.timing(slideAnim, {
      toValue: 600,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowEndereco(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>



      <View style={styles.content}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />
        <TextInput placeholder="Nome" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} value={newEmail} onChangeText={a => setNewEmail(a)} />

        <TextInput placeholder="senha" style={styles.input} secureTextEntry={true} value={newSenha} onChangeText={a => setNewSenha(a)} />

        <TextInput placeholder="Número de telefone" style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={abrirEndereco}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>

      </View>     

      <TouchableOpacity style={styles.voltar} onPress={() => router.back("/")}>
        <Text style={styles.linkcor}>Voltar</Text>
      </TouchableOpacity>


      {showEndereco && (
        <Animated.View style={[styles.overlay, { transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.modalCard}>
            <Image
              source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
              style={styles.logo}
            />

            <TextInput placeholder="Estado" style={styles.input} />
            <TextInput placeholder="Cidade" style={styles.input} />

           
        <TouchableOpacity style={styles.button} onPress={cadastrarSev}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>


            <TouchableOpacity style={styles.voltarModal} onPress={fecharEndereco}>
              <Text style={styles.linkcor}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

      )}

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
    fontSize: 18,
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

  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)', // escurece o fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
  voltarModal: {
    marginTop: 20,
    bottom: 0,
    right: 115,
  },

  modalCard: {
    backgroundColor: '#00291c',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    gap: 30,
    alignItems: 'center',
  },

});
