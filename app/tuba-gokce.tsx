import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome ikonları için eklendi

export default function TubaGokce() {
  const router = useRouter();

  return (
    <>
      {/* İçerik */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Üst Başlık - Cem Tepeli ile aynı yapı */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image source={require('../assets/Icon/back-icon.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <View style={styles.appIconContainer}>
            <Image source={require('../assets/splash-icon.png')} style={styles.appIcon} />
          </View>

          <TouchableOpacity style={styles.menuButton}>
            <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>

        {/* İsim ve Avatar - Cem Tepeli ile aynı yapı */}
        <View style={styles.nameRow}>
          <Image source={require('../assets/Icon/tuba.png')} style={styles.avatarSmall} /> {/* Tuba'nın avatarı */}
          <Text style={styles.name}>Tuba Gökçe</Text>
        </View>

        {/* Bilgi Satırları (Üniversite) - Cem Tepeli ile benzer yapı */}
        <View style={styles.infoRow}>
          <FontAwesome name="university" size={16} color="#555" />
          <Text style={styles.infoText}>Hacettepe Üniversitesi Matematik Bölümü</Text>
        </View>
        {/* Email vs. gibi diğer bilgiler burada eklenebilir */}
        {/*
        <View style={styles.infoRow}>
          <FontAwesome name="envelope" size={16} color="#555" />
          <Text style={styles.infoText}>tubagokce@email.com</Text>
        </View>
        */}

        {/* Hakkında Bölümü */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hakkında</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            Merhaba! Ben Tuba, Hacettepe Üniversitesi Matematik Bölümü 3. sınıf öğrencisiyim. Matematiğe olan ilgimle
            üniversite düzeyindeki Analitik Geometri, Soyut Matematik ve temel matematik derslerinde kendimi geliştirdim.
            Son yıllarda bu alanlarda birçok arkadaşımın konuları anlamasına, soruları çözmesine ve sınavlara hazırlanmasına
            yardımcı oldum.
            {'\n\n'}
            Soyut kavramları birlikte somutlaştırmak, zor gibi görünen matematiksel yapıları anlaşılır hale getirmek
            istiyorsan sana destek olmaktan memnuniyet duyarım.
          </Text>
        </View>

        {/* Destek Verdiği Dersler Bölümü */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 Destek Verdiği Dersler</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            • Analitik Geometri{'\n'}
            • Soyut Matematik{'\n'}
            • Lineer Cebir
          </Text>
        </View>

        {/* Uygunluk Bölümü */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📅 Uygunluk</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>Hafta içi akşamları ve hafta sonu</Text>
        </View>

        {/* Alıntı */}
        <View style={styles.section}>
          <Text style={[styles.description, styles.quote]}>
            “Matematik birlikte çalışıldığında daha anlaşılır ve keyiflidir!”
          </Text>
        </View>

        {/* Mesaj Gönder Butonu */}
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageText}>Mesaj Gönder</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Alt Navigasyon - Cem Tepeli ile aynı yapı */}
      <View style={styles.bottomTab}>
        <TouchableOpacity onPress={() => router.push('/home')} style={styles.tabItem}>
          <Image source={require('../assets/Icon/Icon/Home.png')} style={styles.tabIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/search')} style={styles.tabItem}>
          <Image source={require('../assets/Icon/Icon/büyüteç.png')} style={styles.tabIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.tabAdd}>
          <Image source={require('../assets/Icon/plus.png')} style={styles.tabAddIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/bildirimler')} style={styles.tabItem}>
          <Image source={require('../assets/Icon/Icon/Bell.png')} style={styles.tabIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profilim')} style={styles.tabItem}>
          <Image source={require('../assets/Icon/Icon/profile.png')} style={styles.tabIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  header: {
    backgroundColor: '#BEA9BC',
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  appIconContainer: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatarSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    marginLeft: 6,
    color: '#555',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  quote: { // <<<< Bu stil tanımı eksikti, şimdi eklendi
    fontSize: 16,
    fontStyle: 'italic',
    color: '#BEA9BC', // Tema renginizle uyumlu
    marginTop: 24,
    textAlign: 'center',
    },
  messageButton: {
    backgroundColor: '#BEA9BC',
    paddingVertical: 12,
    marginHorizontal: 60,
    marginVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  messageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    zIndex: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  tabAdd: {
    width: 60,
    height: 60,
    backgroundColor: '#BEA9BC',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabAddIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
});