import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    AddMedicine: undefined;
    MedicineList: undefined;
    MedicationDetails: { medicineName: string }; // Add parameters if needed
  };

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type AddMedicineScreenNavigationProp = StackNavigationProp<RootStackParamList,'AddMedicine'>;

export interface Medicine {
  id: string; // unique ID for each medicine
  name: string;
  dosage: string;
  form: string;
}

export type MedicationDetailsScreenRouteProp = RouteProp<
    RootStackParamList, 'MedicationDetails'
>;

export type MedicationDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MedicationDetails'
>;