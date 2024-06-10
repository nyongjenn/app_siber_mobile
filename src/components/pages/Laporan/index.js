import { Card, Flex, WingBlank, Button } from "@ant-design/react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";

const data = [
  {
    NO: 1,
    TglEntry: "19 01-2022 19:00:00",
    Keterangan: "Sudah dibersihkan semua",
    Status: "Selesai",
  },
  {
    NO: 2,
    TglEntry: "19 01-2022 19:00:00",
    Keterangan: "hshshsh",
    Status: "Selesai",
  },
  {
    NO: 3,
    TglEntry: "19 01-2022 19:00:00",
    Keterangan: "hdhdhd",
    Status: "Batal",
  },
  {
    NO: 4,
    TglEntry: "19 01-2022 19:00:00",
    Keterangan: "sdsdsd",
    Status: "Selesai",
  },
  {
    NO: 5,
    TglEntry: "19 01-2022 19:00:00",
    Keterangan: ".sdsds",
    Status: "Selesai",
  },
];

const LaporanRekapKegiatan = () => {
  const ellipsis = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const renderItem = ({ item }) => {
    const StatusForm = () => {
      if (item.Status == "Selesai") {
        return (
          <Text
            style={[
              style.dataTable,
              { color: "#23B480", position: "relative", left: 30 },
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
        <Text
          style={[
            style.dataTable,
            { flex: 1, numberOfLines: 1, ellipsizeMode: "tail", maxLength: 10 },
          ]}
        >
          {ellipsis(item.Keterangan, 15)}
        </Text>
        <StatusForm />
      </View>
    );
  };
  // return LaporanRekapKegiatan
  return (
    <View>
      <Text style={style.text}>Rekap Kegiatan</Text>
      <View>
        <WingBlank>
          <Card style={style.cardTop}>
            <View>
              <View style={style.bodyCard}>
                <Text style={style.startDate}>Tanggal Mulai</Text>
                <Text style={style.startDate}>Tanggal Selesai</Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Button style={style.submit}>
                <Text style={{ color: "#fff" }}>SUBMIT</Text>
              </Button>
            </View>
          </Card>
        </WingBlank>
      </View>

      <View style={{ marginTop: 20 }}>
        <WingBlank>
          <Card style={{ height: 367 }}>
            <View style={style.headerTable}>
              <Text style={[style.headerText]}>NO</Text>
              <Text
                style={[style.headerText, { position: "relative", right: 30 }]}
              >
                Tgl.Entry
              </Text>
              <Text style={[style.headerText, { marginRight: 18 }]}>
                Keterangan
              </Text>
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

export default LaporanRekapKegiatan;

const style = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "Montserrat",
    textAlign: "center",
    marginTop: 15,
  },
  cardTop: {
    marginTop: 12,
    height: 175,
  },
  startDate: {
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 5,
    padding: 10,
  },
  bodyCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  submit: {
    backgroundColor: "#004A99",
    width: 185,
    borderRadius: 20,
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
