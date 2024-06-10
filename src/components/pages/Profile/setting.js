// Profile.js
import React, { useState } from "react";
import { Button } from "@ant-design/react-native";
import { View, Text, Modal } from "react-native";

const ModalSetting = ({ modalSettings, setmodalSettings }) => {
  return (
    <Modal
      visible={modalSettings}
      onRequestClose={() => setmodalSettings(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <Text>Setting</Text>
      <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
        <Button title="Close" onPress={() => setmodalSettings(false)}>
          <Text>Close</Text>
        </Button>
      </View>
    </Modal>
  );
};
export default ModalSetting;
