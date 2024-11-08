import AsyncStorage from '@react-native-async-storage/async-storage';

const MEDICINE_KEY = 'medicines';

//function to add a medicine to the list
export const addMedicine = async (medicineName: string) => {
    try{
        const existingMedicines = await getMedicines();
        const updatedMedicines = [...existingMedicines, medicineName];
        await AsyncStorage.setItem(MEDICINE_KEY, JSON.stringify(updatedMedicines));
    } catch (error) {
        console.error('Error adding medicines: ', error);
    }
};

//function to retrieve all medicines
export const getMedicines = async (): Promise<string[]> => {
    try{
        const storedMedicines = await AsyncStorage.getItem(MEDICINE_KEY);
        return storedMedicines ? JSON.parse(storedMedicines) : [];
    } catch (error) {
        console.error('Error retrieving medicines:', error);
        return [];
    }
};

//fucntion to retireve a single medicine by its name
export const getMedicineByName = async (medicineName: string): Promise<string | null> => {
    try {
      const storedMedicines = await AsyncStorage.getItem(MEDICINE_KEY);
      const medicines = storedMedicines ? JSON.parse(storedMedicines) : [];
      const medicine = medicines.find((name: string) => name.toLowerCase() === medicineName.toLowerCase());
      return medicine || null;
    } catch (error) {
      console.error('Error retrieving single medicine:', error);
      return null;
    }
};

//function to clear all medicines
export const clearMedicines = async () => {
    try {
      await AsyncStorage.removeItem(MEDICINE_KEY);
    } catch (error) {
      console.error('Error clearing medicines:', error);
    }
};
  