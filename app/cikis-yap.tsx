import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Yönlendirme için useRouter

export default function CikisYapScreen() {
  const router = useRouter();

  // Çıkış yapma işlemini gerçekleştirecek fonksiyon
  const handleLogout = () => {
    // Burada gerçek çıkış (logout) mantığı uygulanır.
    // Örnekler:
    // 1. Kullanıcı oturum tokenını silme (AsyncStorage, SecureStore vb. kullanarak)
    //    AsyncStorage.removeItem('userToken');
    // 2. Redux/Context API'deki kullanıcı state'ini temizleme
    //    dispatch({ type: 'LOGOUT' });

    console.log('Kullanıcı çıkış yapıyor...'); // Konsola loglama

    // Çıkış işlemi tamamlandıktan sonra giriş ekranına veya ana ekrana yönlendirme
    // router.replace('/login'); // Eğer bir giriş ekranınız varsa
    router.replace('/'); // Uygulamanın ana başlangıç ekranına yönlendirme (örnek)

    // Kullanıcıya bir bildirim gösterebiliriz (opsiyonel)
    Alert.alert('Çıkış Yapıldı', 'Başarıyla çıkış yaptınız.', [
      { text: 'Tamam', onPress: () => console.log('Çıkış yapıldı bildirimi kapatıldı') },
    ]);
  };

  // Çıkışı iptal etme ve bir önceki ekrana dönme
  const handleCancel = () => {
    console.log('Çıkış işlemi iptal edildi.');
    router.back(); // Bir önceki ekrana geri dön
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Çıkış Yap</Text>
      <Text style={styles.message}>Hesabınızdan çıkış yapmak istediğinizden emin misiniz?</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Evet, Çıkış Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>İptal Et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5B7C3', // Profilim ekranıyla uyumlu arka plan
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: '#FF6347', // Kırmızı tonu, dikkat çekici
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%', // Genişliği belirle
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#fff', // Beyaz arka plan
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%', // Genişliği belirle
    alignItems: 'center',
    borderWidth: 1, // Kenarlık ekle
    borderColor: '#C5B7C3', // Kenarlık rengi
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});