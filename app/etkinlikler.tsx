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
  
  export default function EventsScreen() {
    const router = useRouter();
  
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
  
            <Text style={styles.title}>Etkinlikler</Text>
          </View>
  
          {/* Search */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchBox}>
              <Image source={require('../assets/Icon/Icon/büyüteç.png')} style={styles.searchIcon} />
              <TextInput
                placeholder="Etkinlik adı, konu ya da tarih ara..."
                placeholderTextColor="#777"
                style={styles.input}
              />
            </View>
          </View>
  
          {/* Filtre */}
          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterButton}><Text>Tümü</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}><Text>Bugün</Text></TouchableOpacity>
          </View>
  
          {/* Bugünkü Etkinlikler */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bugün</Text>
  
            <View style={styles.eventItem}>
              <Image source={require('../assets/Icon/calendar.png')} style={styles.eventIcon} />
              <Text style={styles.eventText}>Ekip Toplantı</Text>
            </View>
            <View style={styles.separator} />
  
            <View style={styles.eventItem}>
              <Image source={require('../assets/Icon/conference.png')} style={styles.eventIcon} />
              <Text style={styles.eventText}>Konferans</Text>
            </View>
            <View style={styles.separator} />
  
            <View style={styles.eventItem}>
              <Image source={require('../assets/Icon/online.png')} style={styles.eventIcon} />
              <Text style={styles.eventText}>Çevrimiçi Seminer</Text>
            </View>
          </View>
        </ScrollView>
  
        {/* Alt Navigasyon */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Image source={require('../assets/Icon/Icon/Home.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/search')}>
            <Image source={require('../assets/Icon/Icon/Icon/Search.png')} style={styles.navIcon} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.plusButton} onPress={() => router.push('/create')}>
            <Image source={require('../assets/Icon/plus.png')} style={styles.plusIcon} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Image source={require('../assets/Icon/Icon/Bell.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Image source={require('../assets/Icon/Icon/profile.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
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
      paddingBottom: 16,
    },
    headerTopRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 100, // yükseklik tanımla, 80 veya daha büyük yapabilirsin 
    },
    icon: { width: 24, height: 24 },
    logo: { width: 60, height: 60, borderRadius: 30 },
    title: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    searchWrapper: {
      paddingHorizontal: 20,
      marginTop: 12,
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
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 14,
      marginBottom: 10,
      paddingHorizontal: 20,
    },
    filterButton: {
      backgroundColor: '#f1e9f1',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 20,
    },
    section: { paddingHorizontal: 20, paddingTop: 10 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
    eventItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    eventIcon: { width: 32, height: 32, marginRight: 12 },
    eventText: { fontSize: 16 },
    separator: {
      height: 1,
      backgroundColor: '#e0d0e0',
      marginVertical: 8,
    },
  
    // Alt Navigasyon
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      width: width,
    },
    navIcon: {
      width: 24,
      height: 24,
      tintColor: '#444',
    },
    plusButton: {
      backgroundColor: '#BEA9BC',
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -25,
    },
    plusIcon: {
      width: 24,
      height: 24,
      tintColor: '#fff',
    },
  });
  