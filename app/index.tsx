import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login"); // 3 saniye sonra login ekranına geç
    }, 3000);

    return () => clearTimeout(timer); // bileşen unmount edilirse timer'ı temizle
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.icon}
      />
      <Text style={styles.title}>MenTör</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEA9BC",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 136,
    height: 136,
    borderRadius: 68,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
