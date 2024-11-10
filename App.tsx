import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MedicineListScreen from './screens/MedicineListScreen';
import AddMedicineScreen from './screens/AddMedicineScreen';
import HomeScreen from './screens/HomeScreen';
import MedicationDetailsScreen from './screens/MedicationDetailsScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMedicine" component={AddMedicineScreen} />
        <Stack.Screen name="MedicineList" component={MedicineListScreen} />
        <Stack.Screen name="MedicationDetails" component={MedicationDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
