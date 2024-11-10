import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import getMedicines, { clearMedicines } from '../services/StorageService';

function MedicineListScreen(): React.JSX.Element {
    const [medicines, setMedicines] = useState<string[]>([]);

    //fetch the medicines when the component mounts
    useEffect(() => {
        const fetchMedicines = async () => {
            const savedMedicines = await getMedicines();
            setMedicines(savedMedicines);
        };
        fetchMedicines();
    }, []);

    async function handleClearMedicines(): Promise<void> {
        await clearMedicines();
        setMedicines([]);
        Alert.alert('Success', 'All medicines have been cleared.');
    }

    // Render a single medicine item
    function renderMedicineItem({ item }: { item: string; }): React.JSX.Element {
        return (
            <View style={styles.medicineItem}>
                <Text style={styles.medicineText}>{item}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Medicines</Text>

            <FlatList
                data={medicines}
                renderItem={renderMedicineItem}
                keyExtractor={(item, index) => index.toString()}
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