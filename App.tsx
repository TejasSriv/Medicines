import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MedicineListScreen from './screens/MedicineListScreen';
import AddMedicineScreen from './screens/AddMedicineScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MedicineList">
        <Stack.Screen name="MedicineList" component={MedicineListScreen} />
        <Stack.Screen name="AddMedicine" component={AddMedicineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
