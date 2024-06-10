import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SplashScreen,
  AuthLogin,
  Home,
  FormRegister,
  DetailCeklisKebersihan,
  LaporanRekapKegiatan,
  Profile,
} from "../components/pages";
import React from "react";
import MasterReferensi from "../components/pages/MasterReferensi";
import MasterRoom from "../components/pages/MasterReferensi/room/index.js";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthLogin"
        component={AuthLogin}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...styleHeader,
          title: "Home",
        }}
      />

      <Stack.Screen
        name="FormRegister"
        component={FormRegister}
        options={{
          ...styleHeader,
          title: "Form Register",
        }}
      />

      <Stack.Screen
        name="DetailCeklisKebersihan"
        component={DetailCeklisKebersihan}
        options={{
          ...styleHeader,
          title: "Detail Ceklist Kebersihan",
        }}
      />

      <Stack.Screen
        name="LaporanRekapKegiatan"
        component={LaporanRekapKegiatan}
        options={{
          ...styleHeader,
          title: "Laporan",
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          ...styleHeader,
          title: "Profile",
        }}
      />

      <Stack.Screen
        name="MasterReferensi"
        component={MasterReferensi}
        options={{
          ...styleHeader,
          title: "Master Referensi",
        }}
      />

      <Stack.Screen
        name="MasterRoom"
        component={MasterRoom}
        options={{
          ...styleHeader,
          title: "Master Room",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const style = StyleSheet.create({
  header: {
    backgroundColor: "#004A99",
    height: 100,
  },
  screenOptions: {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: "#fff",
    },
  },
});

const styleHeader = {
  headerStyle: style.header,
  headerTintColor: "#FFFFFF",
  headerTitleAlign: "center",
};
