import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.header}>
        {/* Geri Butonu */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Image source={require('../assets/Icon/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Logoyu ortalamak için ayrı View */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/splash-icon.png')} style={styles.logo} />
        </View>

        {/* Menü ikonu sağ üstte kalıyor */}
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Merhaba Feyza, bugün sana nasıl yardımcı olabiliriz?</Text>

        <View style={styles.searchBox}>
          <Image source={require('../assets/Icon/Icon/Icon/Search.png')} style={styles.searchIcon} />
          <TextInput placeholder="Kurs arat. . ." placeholderTextColor="#777" style={styles.searchInput} />
        </View>
      </View>

      {/* Kartlar */}
      <TouchableOpacity style={styles.card}>
        <Image source={require('../assets/Icon/study-group.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Çalışma Grupları</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image source={require('../assets/Icon/mentors.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Mentörler</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image source={require('../assets/Icon/Icon/events.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Etkinlikler</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image source={require('../assets/Icon/Icon/study-space.png')} style={styles.cardImage} />
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Devam Et</Text>
        </TouchableOpacity>
        <Text style={styles.cardText}>Çalışma Mekanları</Text>
      </View>
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 40,
    position: 'relative',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30, // LOGO biraz daha aşağıda başlıyor
    marginBottom: 12,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1e9f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  card: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  continueButton: {
    position: 'absolute',
    bottom: 50,
    left: 16,
    backgroundColor: '#BEA9BC',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
