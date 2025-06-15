import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Profilim() {
  const router = useRouter();

  const profileItems = [
    { label: 'Bildirimler', onPress: () => router.push('/bildirimler') }, // Bildirimler ekranına yönlendirme
    { label: 'Favori Ekipler', onPress: () => router.push('/favori-ekipler') }, // Favori Ekipler ekranına yönlendirme
    { label: 'Değerlendirmelerim', onPress: () => router.push('/degerlendirmelerim') }, // Değerlendirmelerim ekranına yönlendirme
    { label: 'Dosyalarım', onPress: () => router.push('/dosyalarim') }, // Dosyalarım ekranına yönlendirme
    { label: 'Gruplarım', onPress: () => router.push('/gruplarim') }, // Gruplarım ekranına yönlendirme
  ];

  const settingsItems = [
    { label: 'Yardım Destek', onPress: () => router.push('/yardim-destek') }, // Yönlendirme eklendi
    { label: 'Bildirim Ayarları', onPress: () => router.push('/bildirim-ayarlari') }, // Yönlendirme eklendi
    { label: 'Uygulamayı Değerlendir', onPress: () => router.push('/uygulamayi-degerlendir') }, // Yönlendirme eklendi
    { label: 'Çıkış Yap', onPress: () => router.push('/cikis-yap') }, // Yönlendirme eklendi (örnek olarak, genellikle çıkış için farklı bir işlem yapılır)
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      {/* HEADER */}
      <View style={styles.header}>
        {/* Back Icon */}
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
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Menu button pressed')}>
          <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.iconImage} />
        </TouchableOpacity>

      </View>

      {/* Hoş Geldin Kartı */}
      <TouchableOpacity style={styles.welcomeCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>FA</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.welcomeText}>Hoş Geldin!</Text>
          <Text style={styles.nameText}>Feyza Gülsüm Alakuş</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>

      {/* Profilim */}
      <Text style={styles.sectionTitle}>Profilim</Text>
      <View style={styles.card}>
        {profileItems.map(({ label, onPress }, i) => (
          <TouchableOpacity
            key={label}
            style={[styles.listItem, i !== profileItems.length - 1 && styles.divider]}
            onPress={onPress} // Router yönlendirmesi burada tetikleniyor
          >
            <Text style={styles.listItemText}>{label}</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Ayarlar */}
      <Text style={styles.sectionTitle}>Ayarlar</Text>
      <View style={styles.card}>
        {settingsItems.map(({ label, onPress }, i) => (
          <TouchableOpacity
            key={label}
            style={[styles.listItem, i !== settingsItems.length - 1 && styles.divider]}
            onPress={onPress}
          >
            <Text style={styles.listItemText}>{label}</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5B7C3',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Öğeleri dikeyde ortalar
    paddingTop: 45,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: '#C5B7C3',
  },
  iconButton: {
    padding: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
     marginTop: 12, // Kaldırıldı, çünkü header zaten alignItems: 'center' ile ortalayacak
  },
  welcomeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#C5B7C3',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  welcomeText: {
    fontSize: 14,
    color: '#555',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
  },
  arrow: {
    fontSize: 18,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 12,
    marginBottom: 8,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 4,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#C5B7C3',
  },
});