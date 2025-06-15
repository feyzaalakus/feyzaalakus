import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TubaGokce() {
  const router = useRouter();

    return (
    <ScrollView style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/Icon/back-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../assets/splash-icon.png')} style={styles.logo} />
        <View style={{ width: 24 }} /> {/* Boşluk için */}
      </View>

      <View style={styles.content}>
        <Image source={require('../assets/Icon/tuba.png')} style={styles.avatar} />
        <Text style={styles.name}>Tuba Gökçe</Text>
        <Text style={styles.university}>Hacettepe Üniversitesi Matematik Bölümü</Text>

        <Text style={styles.sectionTitle}>Hakkımda</Text>
        <Text style={styles.paragraph}>
          Merhaba! Ben Tuba, Hacettepe Üniversitesi Matematik Bölümü 3. sınıf öğrencisiyim. Matematiğe olan ilgimle
          üniversite düzeyindeki Analitik Geometri, Soyut Matematik ve temel matematik derslerinde kendimi geliştirdim.
          Son yıllarda bu alanlarda birçok arkadaşımın konuları anlamasına, soruları çözmesine ve sınavlara hazırlanmasına
          yardımcı oldum.
        </Text>

        <Text style={styles.paragraph}>
          Soyut kavramları birlikte somutlaştırmak, zor gibi görünen matematiksel yapıları anlaşılır hale getirmek
          istiyorsan sana destek olmaktan memnuniyet duyarım.
        </Text>

        <Text style={styles.sectionTitle}>📚 Destek Verdiği Dersler</Text>
        <Text style={styles.paragraph}>• Analitik Geometri</Text>
  <Text style={styles.paragraph}>• Soyut Matematik</Text>
  <Text style={styles.paragraph}>• Lineer Cebir</Text>
        <Text style={styles.sectionTitle}>📅 Uygunluk</Text>
        <Text style={styles.paragraph}>Hafta içi akşamları ve hafta sonu</Text>

        <Text style={styles.quote}>
          “Matematik birlikte çalışıldığında daha anlaşılır ve keyiflidir!”
        </Text>
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
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  university: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#BEA9BC',
    marginTop: 24,
    textAlign: 'center',
  },
});
