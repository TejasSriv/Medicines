import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { HomeScreenNavigationProp } from '../types';


type Props = {
    navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Medicine Reminder App</Text>
            <Button
                title="Add Medicine"
                onPress={() => navigation.navigate('AddMedicine')} />
            <Button
                title="View Medicine List"
                onPress={() => navigation.navigate('MedicineList')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;
