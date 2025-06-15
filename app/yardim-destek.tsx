import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function HelpSupportScreen() {
  const router = useRouter();

  const helpSupportItems = [
    { label: 'Sık Sorulan Sorular (SSS)', icon: 'question-circle-o', onPress: () => console.log('SSS tıklandı') },
    { label: 'Destek Talebi Oluştur', icon: 'life-ring', onPress: () => console.log('Destek Talebi Oluştur tıklandı') },
    { label: 'Canlı Destek', icon: 'headphones', onPress: () => console.log('Canlı Destek tıklandı') },
  ];

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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Yardım & Destek</Text>
        <View style={styles.card}>
          {helpSupportItems.map(({ label, icon, onPress }, i) => (
            <TouchableOpacity
              key={label}
              style={[styles.listItem, i !== helpSupportItems.length - 1 && styles.divider]}
              onPress={onPress}
            >
              <View style={styles.listItemLeft}>
                {/* İkonu geçici olarak yorum satırı yaptık */}
                {/* {icon && <FontAwesome name={icon} size={20} color="#C5B7C3" style={styles.listItemIcon} />} */}
                <Text style={styles.listItemText}>{label}</Text>
              </View>
              <AntDesign name="right" size={16} color="#777" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => console.log('Geri bildirimde bulun tıklandı')}
      >
        <Text style={styles.bottomButtonText}>Geri bildirimde Bulun</Text>
      </TouchableOpacity>
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
    paddingTop: 20,
    paddingBottom: 100,
    marginTop: -80,
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
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    marginRight: 15,
    width: 20,
    textAlign: 'center',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
    textDecorationLine: 'none',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bottomButton: {
    backgroundColor: '#C5B7C3',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});