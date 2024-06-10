import { Card, Flex, WingBlank } from "@ant-design/react-native";
import { IconOutline } from "@ant-design/icons-react-native";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

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

const MasterRoom = () => {
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
        <Text style={style.dataTable}>{item.NO}</Text>
        <Text style={style.dataTable}>{item.Deskripsi}</Text>
        <CeklistStatus />
      </View>
    );
  };

  return (
    <View>
      <WingBlank>
        <View style={style.card}>
          <Card>
            <ScrollView horizontal>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ marginHorizontal: 15 }}>Action</Text>
                  <Text style={{ marginHorizontal: 15 }}>Room_id</Text>
                  <Text style={{ marginHorizontal: 15 }}>Room_name</Text>
                  <Text style={{ marginHorizontal: 15 }}>Description</Text>
                  <Text style={{ marginHorizontal: 15 }}>Description</Text>
                  <Text style={{ marginHorizontal: 15 }}>Description</Text>
                  <Text style={{ marginHorizontal: 15 }}>Description</Text>
                </View>
              </View>
            </ScrollView>
            <FlatList renderItem={renderItems} data={data}></FlatList>
          </Card>
        </View>
      </WingBlank>
    </View>
  );
};
export default MasterRoom;

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
