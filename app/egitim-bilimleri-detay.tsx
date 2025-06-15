// app/egitim-bilimleri-detay.tsx

import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EgitimBilimleriDetay() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Üst Menü */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require('../assets/Icon/back-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../assets/splash-icon.png')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Başlık ve Arama */}
      <View style={styles.content}>
        

        <View style={styles.searchContainerBottom}>
          <TextInput
            style={styles.searchInputBottom}
            placeholder="Ara..."
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>+ Yeni Grup Oluştur</Text>
        </TouchableOpacity>

        {/* Grup Kartları */}
        {groups.map((group, index) => (
          <View key={index} style={styles.groupCard}>
            <View style={styles.groupTitleRow}>
              <Image source={group.icon} style={styles.groupIcon} />
              <Text style={styles.groupTitle}>{group.title}</Text>
            </View>
            <Text style={styles.groupTopics}>{group.topics}</Text>
            <View style={styles.groupInfo}>
              <View style={styles.infoItem}>
                <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
                <Text style={styles.infoText}>{group.time}</Text>
              </View>
              <View style={styles.infoItem}>
                <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
                <Text style={styles.infoText}>{group.members} Üye</Text>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Gruba Katıl</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const groups = [
  {
    title: 'Eğitim Felsefesi Ekibi',
    topics: 'Daimicilik, Esasicilik, İlerlemecilik',
    time: 'Salı, 18:00',
    members: 8,
    icon: require('../assets/Icon/imageb1.png')
  },
  {
    title: 'Eğitim Psikolojisi Ekibi',
    topics: 'Öz Düzenleme, Üst Biliş',
    time: 'Çarşamba, 17:30',
    members: 10,
    icon: require('../assets/Icon/imageb2.png')
  },
  {
    title: 'Türk Eğitim Tarihi Ekibi',
    topics: 'Selçuklular ve Anadolu Beylikleri',
    time: 'Perşembe, 16:00',
    members: 7,
    icon: require('../assets/Icon/imageb3.png')
  },
  {
    title: 'Araştırma Yöntemleri Ekibi',
    topics: 'Temel, Uygulamalı ve Saha Araştırmaları',
    time: 'Cuma, 19:00',
    members: 9,
    icon: require('../assets/Icon/imageb4.png')
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#BEA9BC',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: { width: 24, height: 24 },
  logo: { width: 50, height: 50, borderRadius: 25 },
  content: { padding: 20, gap: 3 },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  createButton: {
    backgroundColor: '#BEA9BC',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  createButtonText: { color: '#fff', fontWeight: 'bold' },
  searchContainerBottom: {
    paddingVertical: 12,
  },
  searchInputBottom: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  groupCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  groupIcon: { width: 20, height: 20, marginRight: 8 },
  groupTitle: { fontSize: 18, fontWeight: 'bold' },
  groupTopics: { fontSize: 14, color: '#666', marginBottom: 12 },
  groupInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoItem: { flexDirection: 'row', alignItems: 'center' },
  infoIcon: { width: 18, height: 18, marginRight: 6 },
  infoText: { fontSize: 14, color: '#333' },
  joinButton: {
    backgroundColor: '#BEA9BC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  joinButtonText: { color: '#fff', fontWeight: 'bold' },
});
