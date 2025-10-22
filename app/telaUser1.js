import { useRouter } from 'expo-router';
import {Ionicons} from '@expo/vector-icons' 
import {Text,SafeAreaView,StyleSheet,View,Image,TouchableOpacity, TextInput} from 'react-native';
import sloganServiçoEG from '../assets/sloganServiçoEG.png';


import { auth } from '../firebase.config'

export default function telaUser1() {
  const user = auth.currentUser;
  const router = useRouter();

  return (

    
    <SafeAreaView style={styles.container}>
    <View style={styles.topo} >

         <TouchableOpacity  onPress={() => router.push('/')}>
            <Text style={styles.linkcor}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => router.push('/teste1')}>
            <Ionicons name="person" size={32} color="black" />
        </TouchableOpacity>

        </View>
      <View style={styles.content}>


      <Image source={sloganServiçoEG} style={styles.logo} />  
      <View >
        <TextInput placeholder="Pesquisar" style={styles.input} />
        <Image
            source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
            style={styles.iconeEG}/>
        </View>

      </View>

          <View style={styles.inputDoServidor}>



          </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    gap: 20,
    padding: 8,
    backgroundColor: '#00291c', 
  },

  topo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#C5DBD6',
    width: 250,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },

  iconeEG:{

      height:50,
      width:50,

  },


  inputDoServidor:{


    
  },
});
