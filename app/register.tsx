import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (email.trim() !== '') {
      router.replace('/home'); // Ana sayfaya yönlendirme
    } else {
      Alert.alert('Hata', 'Lütfen geçerli bir e-posta adresi girin.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Image source={require('../assets/Icon/back-icon.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/splash-icon.png')} style={styles.icon} />
        <Text style={styles.title}>MenTör</Text>
        <Text style={styles.subtitle}>Destek olmaya ya da destek almaya başlamak için giriş yap</Text>
        <Text style={styles.subTitle2}>Bir hesap oluşturun</Text>
        <Text style={styles.instruction}>Bu uygulamaya kaydolmak için e-postanızı girin</Text>

        <TextInput
          placeholder="E-posta adresinizi girin"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Devam Et</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>veya</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google ile Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Apple ile Giriş Yap</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>
          Devam'a tıklayarak Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
  },
  container: {
    backgroundColor: '#BEA9BC',
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 150,
    marginBottom: 20,
    borderRadius: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  subTitle2: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  continueButtonText: {
    color: '#BEA9BC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#ccc',
    marginTop: 20,
    fontSize: 14,
  },
  socialContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  disclaimer: {
    marginTop: 30,
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
