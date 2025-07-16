import { useRouter } from 'expo-router';
import {Ionicons} from '@expo/vector-icons' 
import {Text,SafeAreaView,StyleSheet,View,Image,TouchableOpacity, TextInput} from 'react-native';
import sloganServiçoEG from '../assets/sloganServiçoEG.png';


export default function telaUser1() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topo} >

         <TouchableOpacity  onPress={() => router.push('/')}>
            <Text style={styles.linkcor}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => router.push('/perfilUser1')}>
            <Ionicons name="person" size={32} color="black" />
        </TouchableOpacity>

        </View>
      <View style={styles.content}>


      <View >
        <TextInput placeholder="Pesquisa" style={styles.input} />
        </View>
      <Image source={sloganServiçoEG} style={styles.logo} />  

        <View style={styles.descricao}>

       <Text style={styles.Info2}>CPF:</Text>
      <Text style={styles.Info3}>Adonai Roberto de Oliveira Narciso</Text>
      <Text style={styles.Info3}>Adonai Roberto de Oliveira Narciso</Text>
      <Text style={styles.Info3}>Adonai Roberto de Oliveira Narciso</Text>

      </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#10483B',
    justifyContent: 'center',
  },

  content: {
    alignItems: 'center',
    gap: 20,
    padding:8,
  },

  logo: {
    width: 250,
    height: 150,
  },

  descricao: {
   gap:"35",
   padding:"50",
  backgroundColor: '#10483B',
  justifyContent: 'flex-start', 
  alignItems: 'flex-start', 
     
  },
  Info:{

    backgroundColor: '#10483B',
    color: 'white',
    width: 258,
    height: 46,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // do Android
    elevation: 5,
    borderRadius: 10,
},
  
Info2:{

    backgroundColor: '#10483B',
    color: 'white',
    width: 166,
    height: 46,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Do Android
    elevation: 5,
    borderRadius: 10,
},
 Info3:{

    backgroundColor: '#10483B',
    color: 'white',
    width: 258,
    height: 46,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Do Android
    elevation: 5,
    borderRadius: 10,
},
  topo:
  
  {
    flex:1, 
    bottom:10,
   alignItems:"center",
     flexDirection:"row",
    gap:210,
    top:10,
    padding:50,
     justifyContent: "center"
    
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  input:{
    backgroundColor:"#C5DBD6",


  }
});
