import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // sadece useRouter yeterli

export default function LoginScreen() {
  const router = useRouter(); // yönlendirme için router tanımlandı

  const avatars = [
    require('../assets/images/avatar1.png'),
    require('../assets/images/avatar2.png'),
    require('../assets/images/avatar3.png'),
    require('../assets/images/avatar4.png'),
    require('../assets/images/avatar5.png'),
    require('../assets/images/avatar6.png'),
    require('../assets/images/avatar7.png'),
    require('../assets/images/avatar8.png'),
    require('../assets/images/avatar9.png'),
    require('../assets/images/avatar10.png'),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarGrid}>
        {avatars.map((avatar, index) => (
          <Image key={index} source={avatar} style={styles.avatar} />
        ))}
      </View>

      <Text style={styles.slogan}>
        Birlikte Öğren, Birlikte Geliş{'\n'}Her Yerde, Her Zaman
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          console.log('Giriş Yap butonuna basıldı');
          router.push('/register'); // register ekranına yönlendirme
        }}
      >
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('Şifremi Unuttum butonuna basıldı');
          router.push('/forgot-password'); // forgot-password ekranına yönlendirme
        }}
      >
        <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BEA9BC',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingVertical: 40,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    gap: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 5,
  },
  slogan: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginVertical: 30,
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  loginText: {
    color: '#BEA9BC',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
