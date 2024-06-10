import { Text, View, Card, WingBlank, Button } from "@ant-design/react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

const data = [
  {
    NO: 1,
    TglEntry: "19 01-2022 19:00:00",
    Ruang: "R.Dosen",
    Status: "Selesai",
  },
  {
    NO: 2,
    TglEntry: "19 01-2022 19:00:00",
    Ruang: "R.Satpam",
    Status: "Selesai",
  },
  {
    NO: 3,
    TglEntry: "19 01-2022 19:00:00",
    Ruang: "R.Staff",
    Status: "Batal",
  },
  {
    NO: 4,
    TglEntry: "19 01-2022 19:00:00",
    Ruang: "R.Toilet",
    Status: "Selesai",
  },
  {
    NO: 5,
    TglEntry: "19 01-2022 19:00:00",
    Ruang: "R.Toilet",
    Status: "Selesai",
  },
];

const FormRegister = () => {
  const [room, setRoom] = useState("");

  const renderItem = ({ item }) => {
    const StatusForm = () => {
      if (item.Status == "Selesai") {
        return (
          <Text
            style={[
              style.dataTable,
              { color: "#23B480", position: "relative", left: 25 },
            ]}
          >
            {item.Status}
          </Text>
        );
      } else if (item.Status == "Batal") {
        return (
          <Text
            style={[
              style.dataTable,
              { color: "#F66659", position: "relative", left: 28 },
            ]}
          >
            {item.Status}
          </Text>
        );
      } else {
        return <Text>null</Text>;
      }
    };
    return (
      <View style={style.row}>
        <Text style={style.dataTable}>{item.NO}</Text>
        <Text style={[style.dataTable, { position: "relative", right: 30 }]}>
          {item.TglEntry}
        </Text>
        <Text style={style.dataTable}>{item.Ruang}</Text>
        <StatusForm />
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text style={{ paddingTop: 10, textAlign: "center" }}>
          Form Registrasi Kegiatan Kebersihan
        </Text>
      </View>

      <View style={{ paddingTop: 10 }}>
        <WingBlank>
          <Card style={{ paddingTop: 10, height: 234 }}>
            <View style={style.SelectRoom}>
              <View style={style.PickerWrapper}>
                <Picker
                  style={style.OptionRoom}
                  selectedValue={room}
                  onValueChange={(item) => setRoom(item)}
                >
                  <Picker.Item label="Pilih Ruangan" value="" />
                  <Picker.Item label="Ruang Rapat" value="meetingRoom" />
                  <Picker.Item label="Ruang Kerja" value="workRoom" />
                  <Picker.Item label="Ruang Istirahat" value="restRoom" />
                </Picker>
              </View>
              <Button style={style.ButtonRoom}>
                <Text style={{ color: "#FFFFFF" }}>SUBMIT</Text>
              </Button>
            </View>
          </Card>
        </WingBlank>
      </View>

      <View style={{ paddingTop: 10 }}>
        <WingBlank>
          <Card style={{ height: 367 }}>
            <View style={style.headerTable}>
              <Text style={[style.headerText]}>NO</Text>
              <Text
                style={[style.headerText, { position: "relative", right: 30 }]}
              >
                Tgl.Entry
              </Text>
              <Text style={style.headerText}>Ruang</Text>
              <Text
                style={[style.headerText, { position: "relative", left: 20 }]}
              >
                Status
              </Text>
            </View>
            <FlatList
              data={data}
              // keyExtractor={(item) => {
              //   item.room_id.string;
              // }}
              renderItem={renderItem}
            ></FlatList>
          </Card>
        </WingBlank>
      </View>
    </View>
  );
};

export default FormRegister;

const style = StyleSheet.create({
  SelectRoom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  OptionRoom: {
    backgroundColor: "#FFFFFF",
    color: "black",
    width: 270,
    height: 46,
    borderWidth: 1,
    borderColor: "#004A99",
    borderRadius: 50,
  },
  ButtonRoom: {
    backgroundColor: "#004A99",
    width: 200,
    color: "white",
    borderRadius: 12,
    marginTop: 30,
  },
  PickerWrapper: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#004A99",
    overflow: "hidden",
    zIndex: 2,
  },
  tableContainer: {
    flex: 1,
    backgroundColor: "#F4F5F5",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  tableListContainer: {
    flex: 1,
  },
  headerTable: {
    flexDirection: "row",
    fontFamily: "Montserrat",
    padding: 7,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 2,
    elevation: 1,
    borderRadius: 12,
    borderColor: "blue",
    padding: 10,
    backgroundColor: "white",
  },
  dataTable: {
    flex: 1,
    fontFamily: "Helvetica",
    fontSize: 12,
  },
});
