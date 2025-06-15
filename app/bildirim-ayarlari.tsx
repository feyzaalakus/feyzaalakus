import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function BildirimAyarlariScreen() {
  const router = useRouter();

  const [yorumBildirimleriAcik, setYorumBildirimleriAcik] = useState(true);
  const [mesajBildirimleriAcik, setMesajBildirimleriAcik] = useState(true);
  const [kampanyaBildirimleriAcik, setKampanyaBildirimleriAcik] = useState(false);
  const [genelDuyurularAcik, setGenelDuyurularAcik] = useState(true);

  const saveNotificationSettings = () => {
    console.log('Bildirim ayarları kaydediliyor:', {
      yorumBildirimleriAcik,
      mesajBildirimleriAcik,
      kampanyaBildirimleriAcik,
      genelDuyurularAcik,
    });
    Alert.alert('Ayarlar Kaydedildi', 'Bildirim ayarlarınız başarıyla kaydedildi.');
  };

  const NotificationToggleItem = ({ label, value, onValueChange }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationLabel}>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#C5B7C3" }}
        thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Image
            source={require('../assets/Icon/back-icon.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Logo */}
        <Image
          source={require('../assets/splash-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Menü İkonu */}
        <TouchableOpacity onPress={() => console.log('Menu button pressed')} style={styles.iconButton}>
          <Image
            source={require('../assets/Icon/Icon/Menu.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Main Content Area */}
      {/* contentContainer'daki marginTop kaldırıldı */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Bildirim Ayarları</Text>

        <View style={styles.card}>
          <NotificationToggleItem
            label="Yorum Bildirimleri"
            value={yorumBildirimleriAcik}
            onValueChange={setYorumBildirimleriAcik}
          />
          <View style={styles.divider} />
          <NotificationToggleItem
            label="Mesaj Bildirimleri"
            value={mesajBildirimleriAcik}
            onValueChange={setMesajBildirimleriAcik}
          />
          <View style={styles.divider} />
          <NotificationToggleItem
            label="Kampanya ve Promosyonlar"
            value={kampanyaBildirimleriAcik}
            onValueChange={setKampanyaBildirimleriAcik}
          />
          <View style={styles.divider} />
          <NotificationToggleItem
            label="Genel Duyurular"
            value={genelDuyurularAcik}
            onValueChange={setGenelDuyurularAcik}
          />
        </View>

        {/* Ayarları Kaydet Butonu */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={saveNotificationSettings}
        >
          <Text style={styles.saveButtonText}>Ayarları Kaydet</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: '#C5B7C3',
    height: 150,
    borderBottomLeftRadius: 20,
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20, // Card'ın üst boşluğu
    paddingBottom: 40,
    // marginTop: -80, // <<<< BU SATIR KALDIRILDI veya 0 olarak değiştirildi
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 1,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
    marginBottom: 30,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  notificationLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 15,
  },
  saveButton: {
    backgroundColor: '#C5B7C3',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});