import { Button, Text } from "@ant-design/react-native";
import { View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={{ textAlign: "center" }}>INI HALAMAN LOGIN</Text>
      </View>

      <View>
        <Button
          type="primary"
          onPressIn={() => {
            navigation.navigate("FormRegister");
          }}
        >
          <Text>FormRegister</Text>
        </Button>
        <Button
          type="primary"
          onPressIn={() => {
            navigation.navigate("DetailCeklisKebersihan");
          }}
        >
          <Text>CeklistRoom</Text>
        </Button>
        <Button
          type="primary"
          onPressIn={() => {
            navigation.navigate("LaporanRekapKegiatan");
          }}
        >
          <Text>Laporan</Text>
        </Button>

        <Button
          type="primary"
          onPressIn={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text>Profile</Text>
        </Button>

        <Button
          type="primary"
          onPressIn={() => {
            navigation.navigate("MasterReferensi");
          }}
        >
          <Text>Master Referensi</Text>
        </Button>
      </View>
    </View>
  );
};

export default Home;
