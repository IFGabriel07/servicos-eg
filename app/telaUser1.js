import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import sloganServiçoEG from '../assets/sloganServiçoEG.png';
import { auth } from '../firebase.config';
import { ScrollView } from 'react-native';


export default function telaUser1() {
  const user = auth.currentUser;
  const router = useRouter();
 const fotoDavid = "https://i.ibb.co/vCffvcqn/IMG3.png";

  return (
    <SafeAreaView style={styles.container}>

      {/* Topo */}
      <View style={styles.topo}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.linkcor}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/perfilUser1')}>
          <Ionicons name="person" size={32} color="black" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image source={sloganServiçoEG} style={styles.logo} />

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#555"
            style={styles.input}
          />
          <Ionicons name="search" size={20} color="#555" style={styles.searchIcon} />
        </View>

        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2233c6a5948a2262c9823f373096279d' }}
          style={styles.iconeEG}
        />
      </View>

<ScrollView contentContainerStyle={styles.cardsContainer}>
  {[
    {
      nome: "David Henrique de Souza Lima",
      profissao: "Informática",
      valor: "R$20,00",
      nota: "5,0",
      foto: fotoDavid
    },
    {
      nome: "Elijamerson Lourenço dos Santos",
      profissao: "Professor",
      valor: "R$150,00",
      nota: "5,0",
      foto: fotoDavid
    },
    {
      nome: "Iran Santana Batista Filho",
      profissao: "Babá",
      valor: "R$160,00",
      nota: "0,0",
      foto: fotoDavid
    },
    {
      nome: "Givanildo Lourenço de Farias",
      profissao: "Encanador",
      valor: "R$220,00",
      nota: "0,0",
      foto: fotoDavid
    },
    {
      nome: "Sandro Vagane de Oliveira",
      profissao: "Mecânico",
      valor: "R$10,00",
      nota: "0,0",
      foto: fotoDavid
    },
    {
      nome: "Miguel Andrade Moura",
      profissao: "Eletricista",
      valor: "R$165,60",
      nota: "0,0",
      foto: fotoDavid
    },
    {
      nome: "Matheus dos Santos Lima",
      profissao: "Informática",
      valor: "R$160,00",
      nota: "0,0",
      foto: fotoDavid
    }
  ].map((item, index) => (
    <View key={index} style={styles.card}>
      <Image source={{ uri: item.foto }} style={styles.cardFoto} />

      <Text style={styles.cardNome}>{item.nome}</Text>
      <Text style={styles.cardProfissao}>Profissão: {item.profissao}</Text>
      <Text style={styles.cardValor}>Valor {item.valor}</Text>

      <View style={styles.cardNota}>
        <Text style={styles.cardNotaTexto}>{item.nota}</Text>
        <Ionicons name="star" size={16} color="#FFD700" />
      </View>
    </View>
  ))}
</ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00291c',
    alignItems: 'center',
    paddingTop: 20,
  },

  topo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 10,
  },

  linkcor: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 18,
  },

  logo: {
    width: 240,
    height: 120,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 15,
  },

  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C5DBD6',
    width: 250,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
  },

  searchIcon: {
    marginLeft: 10,
  },

  iconeEG: {
    height: 50,
    width: 50,
  },

  cardsContainer: {
  paddingBottom: 40,
  paddingTop: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 15,
},

card: {
  backgroundColor: '#F2F2F2',
  width: 160,
  padding: 10,
  borderRadius: 12,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 4,
},

cardFoto: {
  width: 70,
  height: 70,
  borderRadius: 100,
  marginBottom: 8,
},

cardNome: {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 13,
  marginBottom: 4,
},

cardProfissao: {
  fontSize: 12,
  color: '#333',
  textAlign: 'center',
  marginBottom: 4,
},

cardValor: {
  fontSize: 12,
  color: '#0A5135',
  fontWeight: 'bold',
  marginBottom: 4,
},

cardNota: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
},

cardNotaTexto: {
  fontSize: 12,
  fontWeight: 'bold',
},


});
