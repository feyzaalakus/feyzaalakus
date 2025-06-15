import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // İkonlar için FontAwesome kullanacağız

export default function MyGroupsScreen() {
  const router = useRouter();

  // Örnek grup verileri
  const dummyGroups = [
    { id: '1', name: 'Mobil Uygulama Geliştiriciler', description: 'React Native ve Expo projeleri', icon: 'mobile' },
    { id: '2', name: 'Boğaziçi Bilgisayar Mezunları', description: 'Mezunlar ağı ve etkinlikleri', icon: 'university' },
    { id: '3', name: 'Yapay Zeka Çalışma Grubu', description: 'Güncel AI konuları ve araştırmalar', icon: 'lightbulb-o' },
    { id: '4', name: 'UX/UI Tasarımcıları', description: 'Kullanıcı deneyimi ve arayüz tartışmaları', icon: 'paint-brush' },
    { id: '5', name: 'Veri Bilimi Meraklıları', description: 'Python, R ve veri analiz teknikleri', icon: 'database' },
    { id: '6', name: 'Gönüllülük Kulübü', description: 'Sosyal sorumluluk projeleri', icon: 'hand-peace-o' },
  ];

  const renderGroupItem = ({ item }) => (
    <TouchableOpacity
      style={styles.groupItem}
      onPress={() => console.log('Group pressed:', item.name)}
    >
      <View style={styles.groupIconContainer}>
        <FontAwesome name={item.icon || 'group'} size={24} color="#C5B7C3" />
      </View>
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupDescription}>{item.description}</Text>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );

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
        <Text style={styles.sectionTitle}>Katıldığım Gruplar</Text>
        {dummyGroups.length > 0 ? (
          <FlatList
            data={dummyGroups}
            renderItem={renderGroupItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.groupListContainer}
          />
        ) : (
          // Eğer hiç grup yoksa gösterilecek boş durum mesajı
          <View style={styles.emptyStateContainer}>
            <View style={styles.emptyStateIconContainer}>
              <FontAwesome name="users" size={48} color="#C5B7C3" />
            </View>
            <Text style={styles.emptyStateTitle}>Grubunuz Bulunmamaktadır</Text>
            <Text style={styles.emptyStateMessage}>Henüz katıldığınız bir grup yok. Yeni grupları keşfetmek ister misiniz?</Text>
            {/* İsteğe bağlı olarak buraya bir "Grup Keşfet" butonu eklenebilir */}
          </View>
        )}
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
    paddingHorizontal: 20,
    backgroundColor: '#fff', // İçerik alanı arka planı
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center', // Başlığı ortaya hizala
  },
  groupListContainer: {
    paddingBottom: 20, // Alt butona çakışmaması için boşluk bırak
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EBE0E9', // Hafif kenarlık
    shadowColor: '#000', // Hafif gölge
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Android için gölge
  },
  groupIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5, // Yuvarlak ikon
    backgroundColor: '#F8F4F7', // İkon arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  groupDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  arrow: {
    fontSize: 18,
    color: '#777',
    marginLeft: 10,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EBE0E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateMessage: {
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
    zIndex: 2,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});