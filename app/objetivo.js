import { useRouter } from 'expo-router';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function objetivo() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.content}>

       <Image
source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.logo}
        />

   
   <Text style={styles.titulo}>Qual é o seu Objetivo?</Text>
          <View/>

        <View style={styles.button}>

                <TouchableOpacity>
                     <Text style={styles.buttonText} onPress={() => router.push("/cadastroUser")}>Buscar Serviço</Text>
                </TouchableOpacity>
          </View>

  
        <View style={styles.button}>

                <TouchableOpacity>
                     <Text style={styles.buttonText} onPress={() => router.push("/cadastroServ")}>Prestar Serviço</Text>
                </TouchableOpacity>

          </View>

        <View style={styles.Linksdebaixo} >

            <TouchableOpacity>
                    <Text style={styles.linkcor} onPress={() => router.back()}>Voltar</Text>
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

  titulo:{
    color:'#C5DBD6',
      fontFamily: 'sans-serif',
      fontWeight:'bold',
      fontSize: 24,
  },

  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
    padding:1,
    fontSize: 22,
    fontFamily: 'sans-serif',
    color: '#000',
  },


  button: {
    backgroundColor: '#FFD700',
    width: 240,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

    logo: {
    width: 150,
    height: 150,
    },

  Linksdebaixo: {
    flexDirection: 'row',

    width: 300,
  },

  linkcor: {
    color: '#FFD700',
    textAlign: 'center',
    width: 100,

    position: 'absolute',
    left: 0,

  },
});












