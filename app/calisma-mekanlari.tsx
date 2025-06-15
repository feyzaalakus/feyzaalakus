import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Mekan verileri
const studyPlaces = [
  {
    isim: 'Hacettepe Üniversitesi Kütüphanesi Çalışma Odası - 1',
    latitude: 39.8707,
    longitude: 32.7485,
  },
  {
    isim: 'Hacettepe Break Cafe',
    latitude: 39.8712,
    longitude: 32.7469,
  },
  {
    isim: 'Elektronik Çimleri Önü',
    latitude: 39.8723,
    longitude: 32.7475,
  },
  {
    isim: 'Hacettepe Üniversitesi Kütüphanesi Çalışma Odası - 3',
    latitude: 39.8705,
    longitude: 32.7489,
  },
  {
    isim: 'Hacettepe Atatepe Cafe',
    latitude: 39.8699,
    longitude: 32.7493,
  },
];

export default function StudyPlacesScreen() {
  const router = useRouter();

  const handlePlacePress = (place: typeof studyPlaces[0]) => {
    router.push({
      pathname: '/calisma-mekan-konum',
      params: {
        isim: place.isim,
        latitude: place.latitude.toString(),
        longitude: place.longitude.toString(),
      },
    });
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image source={require('../assets/Icon/back-icon.png')} style={styles.icon} />
            </TouchableOpacity>

            <Image source={require('../assets/splash-icon.png')} style={styles.logo} />

            <TouchableOpacity>
              <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Çalışma Mekanları</Text>
        </View>

        {/* Arama Kutusu */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchBox}>
            <Image source={require('../assets/Icon/Icon/büyüteç.png')} style={styles.searchIcon} />
            <TextInput
              placeholder="Mekan adı ara..."
              placeholderTextColor="#777"
              style={styles.input}
            />
          </View>
        </View>

        {/* Yeni Mekan Ekle */}
        <View style={styles.addWrapper}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => router.push('/calisma-mekan-konum')}
          >
            <Text style={styles.addText}>+ Yeni Çalışma Mekanı Ekle</Text>
          </TouchableOpacity>
        </View>

        {/* Mekan Listesi */}
        <View style={styles.section}>
          {studyPlaces.map((place, index) => (
            <TouchableOpacity
              key={index}
              style={styles.placeItem}
              onPress={() => handlePlacePress(place)}
            >
              <Text style={styles.placeText}>{place.isim}</Text>
              <Image source={require('../assets/Icon/forward-icon.png')} style={styles.forwardIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  header: {
    backgroundColor: '#BEA9BC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minHeight: 80,
  },
  icon: { width: 24, height: 24 },
  logo: { width: 60, height: 60, borderRadius: 30, marginTop: 10 },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  searchIcon: { width: 18, height: 18, tintColor: '#777' },
  addWrapper: {
    paddingHorizontal: 20,
    marginTop: 14,
  },
  addButton: {
    backgroundColor: '#E8D4E8',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  addText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  placeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f1f5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  placeText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  forwardIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
    marginLeft: 10,
  },
});
