import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Geri butonu */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image source={require('../assets/Icon/back-icon.png')} style={styles.backIcon} />
          </TouchableOpacity>

          {/* Logo */}
          <Image source={require('../assets/splash-icon.png')} style={styles.logo} />

          {/* Başlık ve açıklama */}
          <Text style={styles.title}>Şifre Sıfırla</Text>
          <Text style={styles.subtitle}>
            Hesabınızla ilişkili e-posta adresini girin ve şifre belirleme talimatlarını gönderelim.
          </Text>

          {/* Form Alanı */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="email@gmail.com"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Şifre Sıfırla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: height * 0.05,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#BEA9BC',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
