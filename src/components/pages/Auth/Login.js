import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import { WingBlank, Button } from "@ant-design/react-native";

import vectorLogin from "../../../assets/images/vector_login.png";

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
  text: {
    color: "#fff",
    fontSize: 36,
  },
  input: {
    height: 46,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#004A99",
    textAlign: "center",
  },
});

const AuthLogin = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginTop: 275 }}>
        <WingBlank>
          <View style={{ ...styles.containerHorizontal }}>
            <Image source={vectorLogin} />
          </View>
        </WingBlank>
      </View>

      <View>
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 95 }}>
          LOGIN
        </Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <View>
          <TextInput style={styles.input} placeholder="Masukan User-ID Anda" />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Masukan Password Anda"
            secureTextEntry={true}
          />
        </View>

        <WingBlank style={{ marginTop: 10, backgroundColor: "#FFFFFF" }}>
          <Button
            type="primary"
            style={{ borderRadius: 50 }}
            onPressIn={() => {
              navigation.navigate("Home");
            }}
          >
            MASUK
          </Button>
        </WingBlank>
      </View>
    </View>
  );
};

export default AuthLogin;
