import AsyncStorage from '@react-native-async-storage/async-storage';

const MEDICINE_KEY = 'medicines';

//function to add a medicine to the list
export async function addMedicine(medicineName: string) {
  try {
    const existingMedicines = await getMedicines();
    const updatedMedicines = [...existingMedicines, medicineName];
    await AsyncStorage.setItem(MEDICINE_KEY, JSON.stringify(updatedMedicines));
  } catch (error) {
    console.error('Error adding medicines: ', error);
  }
}

//function to retrieve all medicines
async function getMedicines(): Promise<string[]> {
  try {
    const storedMedicines = await AsyncStorage.getItem(MEDICINE_KEY);
    return storedMedicines ? JSON.parse(storedMedicines) : [];
  } catch (error) {
    console.error('Error retrieving medicines:', error);
    return [];
  }
}
export default getMedicines;

//fucntion to retireve a single medicine by its name
export async function getMedicineByName({ medicineName }: { medicineName: string; }): Promise<string | null> {
  try {
    const storedMedicines = await AsyncStorage.getItem(MEDICINE_KEY);
    const medicines = storedMedicines ? JSON.parse(storedMedicines) : [];
    const medicine = medicines.find((name: string) => name.toLowerCase() === medicineName.toLowerCase());
    return medicine || null;
  } catch (error) {
    console.error('Error retrieving single medicine:', error);
    return null;
  }
}

//function to clear all medicines
export async function clearMedicines(): Promise<void> {
  try {
    await AsyncStorage.removeItem(MEDICINE_KEY);
  } catch (error) {
    console.error('Error clearing medicines:', error);
  }
}
