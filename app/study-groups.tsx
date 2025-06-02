import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudyGroupsScreen() {
  const router = useRouter();

  const groups = [
    { title: 'Matematik', image: require('../assets/Icon/mathematics.jpg') },
    { title: 'Fizik', image: require('../assets/Icon/physics.jpg') },
    { title: 'Programlama', image: require('../assets/Icon/programming.jpg') },
    { title: 'Eğitim Bilimleri', image: require('../assets/Icon/education.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.header}>
        {/* Geri Butonu */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
          <Image source={require('../assets/Icon/back-icon.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Menü Butonu */}
        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Ortadaki Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/splash-icon.png')} style={styles.logo} />
        </View>
      </View>

      <Text style={styles.title}>Çalışma Grupları</Text>

      {/* Grup Kartları */}
      {groups.map((group, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={group.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{group.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#BEA9BC',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 24,
    color: '#333',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
