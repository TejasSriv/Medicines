import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MedicationDetailsScreenRouteProp, MedicationDetailsScreenNavigationProp, Medicine } from '../types';
import StorageService from '../services/StorageService';

function MedicationDetailsScreen(): React.JSX.Element {
    const [form, setForm] = useState('');
    const [dosage, setDosage] = useState('');
    const navigation = useNavigation<MedicationDetailsScreenNavigationProp>();
    const route = useRoute<MedicationDetailsScreenRouteProp>();
    const { medicineName } = route.params;

    async function handleSaveDetails(): Promise<void> {
        if (!dosage || !form) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Save the details and navigate back or to the next screen
        const newMedicine: Medicine = {
            id: Date.now().toString(),
            name: medicineName,
            form,
            dosage,
        }


        Alert.alert('Success', 'Medication details saved');
        // Here you would typically save the dosage and form data to storage or pass it back
        try{
            await StorageService.addMedicine(newMedicine);
        Alert.alert('Medicine details saved successfully!');
        } catch(error) {
            Alert.alert('Error saving details');
            console.log('Error saving medicine: ', error);
        }
        
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Select Form</Text>
            <Picker
                selectedValue={form}
                style={styles.picker}
                onValueChange={(itemValue) => setForm(itemValue)}
            >
                <Picker.Item label="Select Form" value="" />
                <Picker.Item label="Tablet" value="Tablet" />
                <Picker.Item label="Syrup" value="Syrup" />
                <Picker.Item label="Injection" value="Injection" />
                <Picker.Item label="Capsule" value="Capsule" />
                <Picker.Item label="Cream" value="Cream" />
                <Picker.Item label="Other" value="Other" />
            </Picker>

            <Text style={styles.label}>Enter Dosage</Text>
            <TextInput
                style={styles.input}
                placeholder="Dosage (e.g., 500 mg, 10 ml)"
                value={dosage}
                onChangeText={setDosage} />

            <Button title="Save Details" onPress={handleSaveDetails} />
        </View>
    );
}

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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});

export default MedicationDetailsScreen;
