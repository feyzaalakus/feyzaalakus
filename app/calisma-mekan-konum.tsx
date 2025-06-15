import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export default function MapViewScreen() {
  const router = useRouter();
  const { isim, latitude, longitude } = useLocalSearchParams();

  const lat = parseFloat(latitude as string);
  const lon = parseFloat(longitude as string);

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: lat, longitude: lon }} title={isim as string} />
      </MapView>

      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Image
          source={require('../assets/Icon/back-icon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.text}>{isim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    zIndex: 100, // Haritanın üstünde olsun
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
