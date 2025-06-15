import { FontAwesome } from '@expo/vector-icons'; // Yıldız ikonları için FontAwesome
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function UygulamaDegerlendirScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(0); // Kullanıcının verdiği puan (0-5 arası)
  const [yorum, setYorum] = useState(''); // Kullanıcının yorumu

  // Yıldızları render eden fonksiyon
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <FontAwesome
            name={i <= rating ? 'star' : 'star-o'} // Dolu yıldız veya boş yıldız
            size={40}
            color="#FFD700" // Altın sarısı renk
            style={styles.star}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  // Değerlendirmeyi gönderme fonksiyonu
  const handleSubmitRating = () => {
    if (rating === 0) {
      Alert.alert('Hata', 'Lütfen uygulamayı yıldız vererek puanlayın.');
      return;
    }

    console.log('Uygulama Değerlendirmesi:', {
      puan: rating,
      yorum: yorum,
    });

    // Burada değerlendirmeyi bir API'ye gönderme veya yerel olarak kaydetme mantığı eklenir
    // fetch('YOUR_API_ENDPOINT/submit-rating', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ rating, yorum })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   Alert.alert('Teşekkür Ederiz!', 'Değerlendirmeniz başarıyla gönderildi.');
    //   router.back();
    // })
    // .catch(error => {
    //   Alert.alert('Hata', 'Değerlendirme gönderilirken bir sorun oluştu.');
    //   console.error('Değerlendirme hatası:', error);
    // });

    Alert.alert('Teşekkür Ederiz!', 'Değerlendirmeniz başarıyla gönderildi.');
    router.back(); // Değerlendirme sonrası bir önceki ekrana dön
  };

 // ✅ Kodun JSX kısmı — sadece içerik kısmı (return bloğu):

return (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
        <Image
          source={require('../assets/Icon/back-icon.png')}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Image
        source={require('../assets/splash-icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

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
      <Text style={styles.sectionTitle}>Uygulamayı Değerlendir</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Uygulamaya puan verin:</Text>
        {renderStars()}

        <Text style={styles.label}>Yorumunuz (İsteğe bağlı):</Text>
        <TextInput
          style={styles.commentInput}
          multiline
          numberOfLines={4}
          placeholder="Yorumunuzu buraya yazın..."
          value={yorum}
          onChangeText={setYorum}
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitRating}
        >
          <Text style={styles.submitButtonText}>Değerlendirmeyi Gönder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    // marginTop: -80, // Eğer önceki ekranlarda mor kısım beyazı kapatmıyorsa bunu kaldırın.
                      // Eğer beyaz alanın mor header'ın altından başlamasını istiyorsanız kaldırın.
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
    padding: 20, // Card içeriği için boşluk
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
    marginTop: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 5,
  },
  commentInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: '#C5B7C3',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});