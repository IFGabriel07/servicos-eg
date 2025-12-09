import { useRouter } from 'expo-router';
import {Ionicons} from '@expo/vector-icons' 
import {Text,SafeAreaView,StyleSheet,View,TouchableOpacity} from 'react-native';
import { auth } from '../firebase.config'


export default function perfilUser() { 
  const router = useRouter();
  const user = auth.currentUser;

  return (
    <SafeAreaView style={styles.container}>
    
        <TouchableOpacity style={styles.topo} >
          <Text style={styles.linkcor}onPress={() => router.back('/telaUser1')} >Sair</Text>

        </TouchableOpacity>

      <View style={styles.content}>

      <View style={styles.iconePerfil}>
      <Ionicons name="person" size={64} color="black" />
      </View>

        <View style={styles.descricao}>

        <Text style={styles.Info}>Adonai Roberto de Oliveira Narciso</Text>
       <Text style={styles.Info2}>CPF: ....761.093-..</Text>
      <Text style={styles.Info3}>email: {user.email}</Text>
      <Text style={styles.Info3}>Telefone: (82) 99890-1542</Text>
      <Text style={styles.Info3}>Localização: Maceió - AL</Text>

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
    width: 150,
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
    // Android
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
    // Android
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
    // Android
    elevation: 5,
    borderRadius: 10,
},
  topo:
  
  {
    flex:1,
  flexDirection:"row",
  padding:30,
  marginBottom:'20%',
    justifyContent: "flex-start"
    
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
  },


  iconePerfil:{

    iconWrapper: {
      backgroundColor: '#ccc',
      borderRadius: 50,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    

  }
});
