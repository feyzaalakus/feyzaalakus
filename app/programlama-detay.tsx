// app/programlama-detay.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProgramlamaDetay() {
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

      {/* Arama ve Buton */}
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ara..."
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>+ Yeni Grup Oluştur</Text>
        </TouchableOpacity>

        {/* Web Tabanlı Programlama */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/imagep1.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Web Tabanlı Programlama</Text>
          </View>
          <Text style={styles.groupTopics}>HTML, CSS, BOOTSTRAP Ekibi</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Salı, 18:00 - 20:00</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>8 Üye</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gruba Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

      {/* C#-2 Ekibi */}
<View style={styles.groupCard}>
  <View style={styles.groupTitleRow}>
    <Image source={require('../assets/Icon/imagep2.png')} style={styles.groupIcon} />
    <Text style={styles.groupTitle}>C#-2 Ekibi</Text>
  </View>
  <Text style={styles.groupTopics}>Değişkenler, Veri Tipleri</Text>
  <View style={styles.groupInfo}>
    <View style={styles.infoItem}>
      <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
      <Text style={styles.infoText}>Çarşamba, 19:00 - 21:00</Text>
    </View>
    <View style={styles.infoItem}>
      <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
      <Text style={styles.infoText}>6 Üye</Text>
    </View>
    <TouchableOpacity style={styles.joinButton}>
      <Text style={styles.joinButtonText}>Gruba Katıl</Text>
    </TouchableOpacity>
  </View>
</View>

{/* Python Ekibi */}
<View style={styles.groupCard}>
  <View style={styles.groupTitleRow}>
    <Image source={require('../assets/Icon/imagep3.png')} style={styles.groupIcon} />
    <Text style={styles.groupTitle}>Python Ekibi</Text>
  </View>
  <Text style={styles.groupTopics}>Matematiksel Fonksiyonlar, SymPy Kütüphanesi</Text>
  <View style={styles.groupInfo}>
    <View style={styles.infoItem}>
      <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
      <Text style={styles.infoText}>Perşembe, 17:00 - 19:00</Text>
    </View>
    <View style={styles.infoItem}>
      <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
      <Text style={styles.infoText}>10 Üye</Text>
    </View>
    <TouchableOpacity style={styles.joinButton}>
      <Text style={styles.joinButtonText}>Gruba Katıl</Text>
    </TouchableOpacity>
  </View>
</View>


        {/* Veritabanı Programlama */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/imagep3.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Veritabanı Programlama</Text>
          </View>
          <Text style={styles.groupTopics}>MySQL, Server</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Cuma, 18:30 - 20:30</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>7 Üye</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gruba Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

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
  content: { padding: 20, gap: 20 },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  createButton: {
    backgroundColor: '#BEA9BC',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  createButtonText: { color: '#fff', fontWeight: 'bold' },
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
