import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const AddMedicineScreen = () => {
  const [medicineName, setMedicineName] = useState('');

  const handleAddMedicine = () => {
    if (medicineName.trim()) {
      // Logic to save the medicine or proceed to next step
      Alert.alert('Medicine Added', `Medicine Name: ${medicineName}`);
      setMedicineName(''); // Clear the input after adding
    } else {
      Alert.alert('Error', 'Please enter a valid medicine name');
    }
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
      <Button title="Add Medicine" onPress={handleAddMedicine} />
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
});

export default AddMedicineScreen;
