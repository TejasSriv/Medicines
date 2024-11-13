import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddMedicineScreenNavigationProp } from '../types';


function AddMedicineScreen(): React.JSX.Element {
    const navigation = useNavigation<AddMedicineScreenNavigationProp>();

    const [medicineName, setMedicineName] = useState('');

    async function handleProceedToDetails(): Promise<void> {
        if (medicineName.trim()) {
            navigation.navigate('MedicationDetails', { medicineName });
        } else {
            Alert.alert('Error', 'Please enter a valid medicine name');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Medicine Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Medicine Name"
                value={medicineName}
                onChangeText={setMedicineName} />
            <Button title="Proceed to Details" onPress={handleProceedToDetails} />
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
});

export default AddMedicineScreen;
