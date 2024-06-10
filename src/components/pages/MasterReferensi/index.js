import { IconOutline } from "@ant-design/icons-react-native";
import { Card, WingBlank, Button } from "@ant-design/react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Text, Modal } from "react-native";

const MasterReferensi = () => {
  const navigation = useNavigation();

  return (
    <View>
      <WingBlank>
        <Card style={style.card}>
          <View style={{ marginTop: 25 }}>
            <WingBlank>
              {/* Master Room */}
              <Button
                style={style.button}
                onPress={() => navigation.navigate("MasterRoom")}
              >
                <View style={[style.buttonView]}>
                  <Text style={{ color: "#000000" }}>Master Room</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/* ganti password */}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Master Pegawai</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/* ganti foto profile */}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>Master Job Type</Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>

              {/*Master Ceklist Cleaning*/}
              <Button style={style.button}>
                <View style={style.buttonView}>
                  <Text style={{ color: "#000000" }}>
                    Master Ceklist Cleaning
                  </Text>
                  <IconOutline name="right" size={20} />
                </View>
              </Button>
            </WingBlank>
          </View>
        </Card>
      </WingBlank>
    </View>
  );
};
export default MasterReferensi;

const style = StyleSheet.create({
  cardId: {
    flexDirection: "row",
  },
  card: {
    height: 456,
    marginTop: 10,
    borderRadius: 12,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
  button: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingLeft: 0,
    paddingRight: 0,
  },
});
