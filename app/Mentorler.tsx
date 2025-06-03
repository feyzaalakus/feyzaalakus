import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import { useRouter } from 'expo-router';
  
  export default function MentorsScreen() {
    const router = useRouter();
  
    const mentors = [
      {
        name: 'Cem Tepeli',
        email: 'cem@gmail.com',
        university: 'Hacettepe Üniversitesi',
        avatar: require('../assets/Icon/cem.png'),
      },
      {
        name: 'Alya Korel',
        email: 'alya@gmail.com',
        university: 'Hacettepe Üniversitesi',
        avatar: require('../assets/Icon/alya.png'),
      },
      {
        name: 'Hatice Koç',
        email: 'hatice@gmail.com',
        university: 'Hacettepe Üniversitesi',
        avatar: require('../assets/Icon/hatice.png'),
      },
      {
        name: 'Emine Türk',
        email: 'emine@gmail.com',
        university: 'Hacettepe Üniversitesi',
        avatar: require('../assets/Icon/emine.png'),
      },
      {
        name: 'Tuba Gökçe',
        email: 'tuba@gmail.com',
        university: 'Hacettepe Üniversitesi',
        avatar: require('../assets/Icon/tuba.png'),
      },
    ];
  
    return (
      <View style={styles.container}>
        {/* Üst Bar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Image source={require('../assets/Icon/back-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Image source={require('../assets/splash-icon.png')} style={styles.logo} />
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/Icon/Icon/Menu.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
  
        <Text style={styles.title}>Mentörler</Text>
  
        {/* Arama Kutusu */}
        <View style={styles.searchBar}>
          <Image source={require('../assets/Icon/Icon/büyüteç.png')} style={styles.searchIcon} />
          <TextInput placeholder="Ara..." style={styles.searchInput} />
          <TouchableOpacity>
            <Image source={require('../assets/Icon/Icon/Edit.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
  
        {/* Mentör Ol Butonu */}
        <TouchableOpacity style={styles.mentorButton}>
          <Text style={styles.mentorButtonText}>Mentör Ol</Text>
        </TouchableOpacity>
  
        {/* Mentör Listesi */}
        <ScrollView>
          {mentors.map((mentor, index) => (
            <TouchableOpacity
              key={index}
              style={styles.mentorCard}
              onPress={() => {
                if (mentor.name === 'Cem Tepeli') {
                  router.push('/cem-tepeli');
                }
              }}
            >
              <Image source={mentor.avatar} style={styles.avatar} />
              <View style={styles.mentorInfo}>
                <Text style={styles.mentorName}>{mentor.name}</Text>
                <Text style={styles.mentorEmail}>✉️ {mentor.email}</Text>
                <Text style={styles.mentorUniversity}>🎓 {mentor.university}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: '#BEA9BC',
      paddingTop: 50,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    iconButton: {
      padding: 8,
    },
    icon: {
      width: 24,
      height: 24,
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 12,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      borderRadius: 12,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginHorizontal: 4,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 6,
    },
    mentorButton: {
      backgroundColor: '#BEA9BC',
      borderRadius: 10,
      paddingVertical: 10,
      margin: 20,
      alignItems: 'center',
    },
    mentorButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    mentorCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginHorizontal: 20,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    mentorInfo: {
      flex: 1,
    },
    mentorName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    mentorEmail: {
      fontSize: 14,
      color: '#555',
    },
    mentorUniversity: {
      fontSize: 14,
      color: '#555',
    },
  });
  