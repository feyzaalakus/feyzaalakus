// app/fizik-detay.tsx

import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function FizikDetay() {
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

        {/* Mekanik-1 Ekibi */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/image1f.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Mekanik-1 Ekibi</Text>
          </View>
          <Text style={styles.groupTopics}>Vektörler, Newton Hareket Yasaları</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Çarşamba, 20:00</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>5/10</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gruba Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mekanik-2 Ekibi */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/image2f.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Mekanik-2 Ekibi</Text>
          </View>
          <Text style={styles.groupTopics}>Katı Cisimlerin Dinamiği</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Perşembe, 18:00</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>6/10</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gruba Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Kuantum Fiziği Ekibi */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/image3f.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Kuantum Fiziği Ekibi</Text>
          </View>
          <Text style={[styles.groupTopics, { opacity: 0.5 }]}>Siyah Cisim Işıması</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Salı, 19:00</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>4/8</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gruba Katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Nötron Fiziği Ekibi */}
        <View style={styles.groupCard}>
          <View style={styles.groupTitleRow}>
            <Image source={require('../assets/Icon/image4f.png')} style={styles.groupIcon} />
            <Text style={styles.groupTitle}>Nötron Fiziği Ekibi</Text>
          </View>
          <Text style={styles.groupTopics}>Nötron Kaynakları, Reaksiyonlar ve Mekanizması</Text>
          <View style={styles.groupInfo}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>Cumartesi, 16:00</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/Icon/Icon/profile_kişi.png')} style={styles.infoIcon} />
              <Text style={styles.infoText}>7/12</Text>
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
