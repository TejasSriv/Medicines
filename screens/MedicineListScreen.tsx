import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import StorageService from '../services/StorageService';
import { Medicine } from '../types';

function MedicineListScreen(): React.JSX.Element {
    const [medicines, setMedicines] = useState<Medicine[]>([]);

    //fetch the medicines when the component mounts
    useEffect(() => {
        async function fetchMedicines(): Promise<void> {
            const savedMedicines = await StorageService.getMedicines();
            setMedicines(savedMedicines);
        }
        fetchMedicines();
    }, []);

    async function handleClearMedicines(): Promise<void> {
        await StorageService.clearMedicines();
        setMedicines([]);
        Alert.alert('Success', 'All medicines have been cleared.');
    }

    // Render a single medicine item
    function renderMedicineItem({ item }: { item: Medicine; }): React.JSX.Element {
        return (
            <View style={styles.medicineItem}>
                <Text style={styles.medicineText}>{item.name}</Text>
                <Text>Dosage: {item.dosage}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Medicines</Text>

            <FlatList
                data={medicines}
                renderItem={renderMedicineItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>No medicines added yet.</Text>} />

            <Button title="Clear All Medicines" onPress={handleClearMedicines} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    medicineItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    medicineText: {
        fontSize: 18,
    },
});

export default MedicineListScreen;