import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import splashScreen2 from "../../../assets/images/splashScreen2.png";
import { Card, WingBlank } from "@ant-design/react-native";
import { IconOutline } from "@ant-design/icons-react-native";

const data = [
  {
    NO: 1,
    Deskripsi: "Meja",
    Status: 1,
  },
  {
    NO: 2,
    Deskripsi: "Jendela",
    Status: 0,
  },
  {
    NO: 1,
    Deskripsi: "Tangga",
    Status: 1,
  },
  {
    NO: 1,
    Deskripsi: "Lapangan",
    Status: 1,
  },
];

const renderItems = ({ item }) => {
  const CeklistStatus = () => {
    if (item.Status === 1) {
      return (
        <Text style={[style.dataTable, { marginRight: 35 }]}>
          <IconOutline name="check" size={25} />
        </Text>
      );
    } else if (item.Status === 0) {
      return (
        <Text style={[style.dataTable, { marginRight: 35 }]}>
          <IconOutline name="close" size={25} />
        </Text>
      );
    } else {
      return <Text>null</Text>;
    }
  };
  return (
    <View style={style.row}>
      <Text style={[style.dataTable, { marginRight: 10 }]}>{item.NO}</Text>
      <Text style={style.dataTable}>{item.Deskripsi}</Text>
      <CeklistStatus />
    </View>
  );
};

const DetailCeklisKebersihan = () => {
  return (
    <View style={style.body}>
      <View>
        <Image source={splashScreen2} />
      </View>
      <WingBlank>
        <View style={style.card}>
          <Card>
            <View style={style.header}>
              <Text style={style.heading}>NO</Text>
              <Text style={[style.heading, { position: "relative", left: 5 }]}>
                Deskripsi
              </Text>
              <Text style={[style.heading, { position: "relative", left: 50 }]}>
                Status
              </Text>
            </View>
            <FlatList renderItem={renderItems} data={data}></FlatList>
          </Card>
        </View>
      </WingBlank>
    </View>
  );
};

export default DetailCeklisKebersihan;

const style = StyleSheet.create({
  body: {
    backgroundColor: "#FFFFFF",
    minHeighteight: "100%",
  },
  card: {
    marginBottom: 20,
    marginTop: 50,
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
  header: {
    flexDirection: "row",
    fontFamily: "Montserrat",
    padding: 7,
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 2,
    elevation: 1,
    borderRadius: 12,
    borderColor: "blue",
    paddingTop: 10,
    backgroundColor: "white",
  },
  dataTable: {
    fontFamily: "Helvetica",
    marginHorizontal: 10,
    paddingVertical: 8,
  },
});
