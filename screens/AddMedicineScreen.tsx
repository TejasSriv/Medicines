import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const AddMedicineScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    setIsScanning(false);
    // Process the barcode data, maybe fetch data from a database
    Alert.alert('Barcode Scanned', `Barcode data: ${data}`);
    // You could auto-fill the medicineName or other fields based on the barcode
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Medicine Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Medicine Name"
        value={medicineName}
        onChangeText={setMedicineName}
      />

      <Button title="Scan Barcode" onPress={() => setIsScanning(true)} />

      {isScanning && (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={handleBarcodeScanned}
          captureAudio={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default AddMedicineScreen;
