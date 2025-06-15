import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // İkonlar için FontAwesome kullanacağız

export default function MyFilesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Image
            source={require('../assets/Icon/back-icon.png')} // Geri ikonu yolu
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Logo (Uygulamanın logosu) */}
        <Image
          source={require('../assets/splash-icon.png')} // Uygulama logosu yolu
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Menü İkonu */}
        <TouchableOpacity onPress={() => console.log('Menu button pressed')} style={styles.iconButton}>
          <Image
            source={require('../assets/Icon/Icon/Menu.png')} // Menü ikonu yolu
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Main Content Area */}
      <View style={styles.contentArea}>
        <View style={styles.filesCard}>
          <View style={styles.filesIconContainer}>
            {/* Dosya veya doküman ikonu gibi bir şey kullanılabilir */}
            <FontAwesome name="files-o" size={48} color="#C5B7C3" />
            {/* Alternatif olarak: <FontAwesome name="file-o" size={48} color="#C5B7C3" /> veya <FontAwesome name="folder-o" size={48} color="#C5B7C3" /> */}
          </View>
          <Text style={styles.filesTitle}>Dosyalarım</Text>
          <Text style={styles.filesMessage}>Henüz herhangi bir dosyanız bulunmamaktadır.</Text>
        </View>
      </View>

      {/* Footer Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/home')} // Ana Sayfa'ya yönlendirme
      >
        <Text style={styles.homeButtonText}>Ana Sayfa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Genel arka plan beyaz
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: '#C5B7C3', // Header rengi
    height: 120, // Header yüksekliği
    borderBottomLeftRadius: 20, // Alt köşeleri yuvarlatılmış
    borderBottomRightRadius: 20,
  },
  iconButton: {
    padding: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // İçerik alanı arka planı
    borderTopLeftRadius: 20, // Üst köşeleri yuvarlatılmış
    borderTopRightRadius: 20,
    marginTop: 20, // Header'ın altına doğru hafifçe taşırmak için
    zIndex: 1, // Header'ın üzerine çıkmasını sağlamak için
  },
  filesCard: { // Önceki ekranlardaki kart stiliyle aynı
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  filesIconContainer: { // İkon arka planı stili
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EBE0E9', // İkonun arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  filesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  filesMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#C5B7C3', // Buton rengi
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute', // Butonu sayfanın altına sabitlemek için
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 2, // Diğer içeriklerin üzerinde olmasını sağlamak için
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});