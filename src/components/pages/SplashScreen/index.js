import { Text, StyleSheet, View, Image } from "react-native";
import { Button, WingBlank, Carousel } from "@ant-design/react-native";

import splashScreen1 from "../../../assets/images/splashScreen1.png";
import splashScreen2 from "../../../assets/images/splashScreen2.png";
import splashScreen3 from "../../../assets/images/splashScreen3.png";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: "90%",
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
});

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Carousel style={styles.wrapper}>
        <View style={{ ...styles.containerHorizontal }}>
          <Image source={splashScreen1} />

          <WingBlank>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 45 }}>
              KEGIATAN LINGKUNGAN HIDUP & KEBERSIHAN
            </Text>
          </WingBlank>
        </View>

        <View style={{ ...styles.containerHorizontal }}>
          <Image source={splashScreen2} />

          <WingBlank>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 45 }}>
              APLIKASI INI DIBUAT UNTUK MEMUDAHKAN PETUGAS, PENGAWAS DAN KEPALA
              RUANGAN DALAM MELAKSANAKAN CHECKLIST KEBERSIHAN
            </Text>
          </WingBlank>
        </View>

        <View style={{ ...styles.containerHorizontal }}>
          <Image source={splashScreen3} />

          <WingBlank>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 70 }}>
              SILAHKAN TEKAN TOMBOL MULAI UNTUK MEMULAI APLIKASI
            </Text>
          </WingBlank>
        </View>
      </Carousel>

      <WingBlank style={{ marginTop: 20, backgroundColor: "#FFFFFF" }}>
        <Button
          type="primary"
          style={{ borderRadius: 50 }}
          onPressIn={() => {
            navigation.navigate("AuthLogin");
          }}
        >
          MEMULAI APLIKASI
        </Button>
      </WingBlank>
    </View>
  );
};

export default SplashScreen;
