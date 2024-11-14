import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddMedicineScreenNavigationProp } from '../types';
import { getDisplayNames } from '../UMLSService';
import { UMLS_API_KEY } from '@env';

function AddMedicineScreen(): React.JSX.Element {
    const navigation = useNavigation<AddMedicineScreenNavigationProp>();

    const [medicineName, setMedicineName] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const fetchSuggestions = async (query: string) => {
        try {
            // const tgt = await authenticate();
            // const serviceTicket = await getServiceTicket(tgt);
            const displayNames = await getDisplayNames(UMLS_API_KEY);

            console.log(displayNames);

            // Filter based on input query
            const filteredSuggestions = displayNames.filter((name: string) =>
                name.toLowerCase().startsWith(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (text: string) => {
        setMedicineName(text);
        if (text.length > 1) {
            fetchSuggestions(text); // Fetch suggestions if input length > 1
        } else {
            setSuggestions([]); // Clear suggestions if input is too short
        }
    };

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
                onChangeText={handleChange} />
            <FlatList
                data={suggestions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
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
